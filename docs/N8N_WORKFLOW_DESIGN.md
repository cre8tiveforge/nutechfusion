# n8n Workflow Design - Consultation Form Integration

## Overview

This document details the n8n workflow design for handling consultation form submissions from the NuTech Fusion website, including instant Telegram notifications and optional data storage.

## Workflow Architecture

### High-Level Flow
```
Website Form Submission
        ↓
   Webhook Trigger
        ↓
  Data Validation
        ↓
    ┌───┴───┐
    ↓       ↓
Telegram  Error
Message  Response
    ↓
Optional: Email
    ↓
Optional: Database
    ↓
Success Response
```

## Node-by-Node Configuration

### 1. Webhook Trigger Node

**Node Type:** `n8n-nodes-base.webhook`
**Purpose:** Receive form submissions from website

**Configuration:**
```json
{
  "httpMethod": "POST",
  "path": "consultation-form",
  "responseMode": "responseNode",
  "options": {
    "rawBody": false
  }
}
```

**Expected Payload:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "projectType": "ai",
  "budget": "$10k-25k",
  "timeline": "2-3 months",
  "description": "Need AI chatbot for customer service...",
  "timestamp": "2025-10-30T12:00:00Z",
  "source": "website"
}
```

**Webhook URL Format:**
```
https://your-n8n-instance.com/webhook/consultation-form
```

### 2. Set Default Values Node (Optional)

**Node Type:** `n8n-nodes-base.set`
**Purpose:** Add defaults for optional fields, add metadata

**Configuration:**
```json
{
  "values": {
    "phone": "={{ $json.phone || 'Not provided' }}",
    "budget": "={{ $json.budget || 'Not specified' }}",
    "timeline": "={{ $json.timeline || 'Flexible' }}",
    "receivedAt": "={{ $now.toISO() }}",
    "ipAddress": "={{ $requestHeaders.\"x-forwarded-for\" || 'unknown' }}",
    "userAgent": "={{ $requestHeaders.\"user-agent\" || 'unknown' }}"
  }
}
```

### 3. Data Validation Node

**Node Type:** `n8n-nodes-base.function`
**Purpose:** Validate required fields and data format

**Code:**
```javascript
// Validation function
const requiredFields = ['name', 'email', 'projectType', 'description'];
const errors = [];

// Check required fields
for (const field of requiredFields) {
  if (!$json[field] || $json[field].trim() === '') {
    errors.push(`Missing required field: ${field}`);
  }
}

// Validate email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if ($json.email && !emailRegex.test($json.email)) {
  errors.push('Invalid email format');
}

// Validate project type
const validProjectTypes = ['ai', 'vr', '3d', 'technical', 'consulting'];
if ($json.projectType && !validProjectTypes.includes($json.projectType)) {
  errors.push('Invalid project type');
}

// Validate description length
if ($json.description && ($json.description.length < 10 || $json.description.length > 500)) {
  errors.push('Description must be between 10 and 500 characters');
}

// Return result
if (errors.length > 0) {
  return {
    json: {
      valid: false,
      errors: errors,
      data: $json
    }
  };
} else {
  return {
    json: {
      valid: true,
      data: $json
    }
  };
}
```

### 4. IF Node - Validation Check

**Node Type:** `n8n-nodes-base.if`
**Purpose:** Route to success or error path

**Configuration:**
```json
{
  "conditions": {
    "boolean": [
      {
        "value1": "={{ $json.valid }}",
        "value2": true,
        "operation": "equal"
      }
    ]
  }
}
```

### 5A. Error Response Node

**Node Type:** `n8n-nodes-base.respondToWebhook`
**Purpose:** Return validation errors to website

**Configuration:**
```json
{
  "options": {
    "responseCode": 400,
    "responseData": "={\"success\": false, \"message\": \"Validation failed\", \"errors\": {{ $json.errors }} }"
  }
}
```

### 5B. Telegram Notification Node

**Node Type:** `n8n-nodes-base.telegram`
**Purpose:** Send instant notification to Telegram

**Configuration:**
```json
{
  "operation": "sendMessage",
  "chatId": "YOUR_TELEGRAM_CHAT_ID",
  "text": "={{ $json.message }}",
  "additionalFields": {
    "parse_mode": "Markdown",
    "disable_web_page_preview": true
  }
}
```

**Message Template:**
```
🔔 *NEW CONSULTATION REQUEST*

👤 *Name:* {{ $json.data.name }}
📧 *Email:* {{ $json.data.email }}
📱 *Phone:* {{ $json.data.phone }}

🎯 *Project Type:* {{ $json.data.projectType }}
💰 *Budget:* {{ $json.data.budget }}
📅 *Timeline:* {{ $json.data.timeline }}

📝 *Description:*
{{ $json.data.description }}

🕐 *Submitted:* {{ $json.data.timestamp }}
🌐 *Source:* {{ $json.data.source }}
```

**Message Formatting Function (Add before Telegram node):**
```javascript
// Format message for Telegram
const data = $json.data;

const projectTypeNames = {
  'ai': 'AI Solutions',
  'vr': 'Virtual Reality',
  '3d': '3D Production',
  'technical': 'Technical Solutions',
  'consulting': 'Consulting'
};

const message = `🔔 *NEW CONSULTATION REQUEST*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone}

🎯 *Project Type:* ${projectTypeNames[data.projectType] || data.projectType}
💰 *Budget:* ${data.budget}
📅 *Timeline:* ${data.timeline}

📝 *Description:*
${data.description}

🕐 *Submitted:* ${new Date(data.timestamp).toLocaleString()}
🌐 *Source:* ${data.source}`;

return {
  json: {
    ...data,
    message: message
  }
};
```

### 6. Email Confirmation Node (Optional)

**Node Type:** `n8n-nodes-base.emailSend` or SendGrid/Resend
**Purpose:** Send confirmation email to submitter

**Configuration (Gmail example):**
```json
{
  "fromEmail": "noreply@nutechfusion.com",
  "toEmail": "={{ $json.data.email }}",
  "subject": "Thank you for contacting NuTech Fusion",
  "text": "={{ $json.emailBody }}",
  "options": {
    "allowUnauthorizedCerts": false
  }
}
```

**Email Template:**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0066FF 0%, #6600FF 100%); color: white; padding: 30px; text-align: center; }
    .content { background: #f9f9f9; padding: 30px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Your Interest!</h1>
    </div>
    <div class="content">
      <p>Hi {{ $json.data.name }},</p>

      <p>Thank you for reaching out to NuTech Fusion. We've received your consultation request and will review it shortly.</p>

      <p><strong>Your Request Details:</strong></p>
      <ul>
        <li><strong>Project Type:</strong> {{ $json.data.projectType }}</li>
        <li><strong>Budget Range:</strong> {{ $json.data.budget }}</li>
        <li><strong>Preferred Timeline:</strong> {{ $json.data.timeline }}</li>
      </ul>

      <p><strong>Next Steps:</strong></p>
      <ul>
        <li>We'll review your project requirements</li>
        <li>A team member will reach out within 1-2 business days</li>
        <li>We'll schedule a consultation call to discuss your needs</li>
      </ul>

      <p>In the meantime, feel free to reply to this email with any additional information about your project.</p>

      <p>Best regards,<br>The NuTech Fusion Team</p>
    </div>
    <div class="footer">
      <p>NuTech Fusion | Transforming Business Through AI & VR</p>
      <p>This is an automated confirmation email.</p>
    </div>
  </div>
</body>
</html>
```

### 7. Database Storage Node (Optional)

**Node Type:** `n8n-nodes-base.supabase` or `n8n-nodes-base.postgres`
**Purpose:** Store submission for records/CRM integration

**Configuration (Supabase example):**
```json
{
  "operation": "insert",
  "table": "form_submissions",
  "data": {
    "name": "={{ $json.data.name }}",
    "email": "={{ $json.data.email }}",
    "phone": "={{ $json.data.phone }}",
    "project_type": "={{ $json.data.projectType }}",
    "budget": "={{ $json.data.budget }}",
    "timeline": "={{ $json.data.timeline }}",
    "description": "={{ $json.data.description }}",
    "source": "={{ $json.data.source }}",
    "ip_address": "={{ $json.data.ipAddress }}",
    "user_agent": "={{ $json.data.userAgent }}",
    "submitted_at": "={{ $json.data.timestamp }}",
    "status": "new"
  }
}
```

**Database Schema (Supabase):**
```sql
CREATE TABLE form_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  project_type VARCHAR(50) NOT NULL,
  budget VARCHAR(100),
  timeline VARCHAR(100),
  description TEXT NOT NULL,
  source VARCHAR(50) NOT NULL,
  ip_address VARCHAR(50),
  user_agent TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_form_submissions_status ON form_submissions(status);
CREATE INDEX idx_form_submissions_submitted_at ON form_submissions(submitted_at DESC);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_form_submissions_updated_at
  BEFORE UPDATE ON form_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

### 8. Success Response Node

**Node Type:** `n8n-nodes-base.respondToWebhook`
**Purpose:** Return success to website

**Configuration:**
```json
{
  "options": {
    "responseCode": 200,
    "responseData": "{\"success\": true, \"message\": \"Your consultation request has been received. We'll be in touch within 1-2 business days.\"}"
  }
}
```

## Complete Workflow JSON

```json
{
  "name": "NuTech Fusion - Consultation Form Handler",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "consultation-form",
        "responseMode": "responseNode",
        "options": {}
      },
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 1,
      "position": [250, 300]
    },
    {
      "parameters": {
        "functionCode": "// Validation code here..."
      },
      "name": "Validate Data",
      "type": "n8n-nodes-base.function",
      "typeVersion": 1,
      "position": [450, 300]
    },
    {
      "parameters": {
        "conditions": {
          "boolean": [
            {
              "value1": "={{ $json.valid }}",
              "value2": true
            }
          ]
        }
      },
      "name": "IF",
      "type": "n8n-nodes-base.if",
      "typeVersion": 1,
      "position": [650, 300]
    },
    {
      "parameters": {
        "options": {
          "responseCode": 400,
          "responseData": "={{ JSON.stringify({ success: false, errors: $json.errors }) }}"
        }
      },
      "name": "Error Response",
      "type": "n8n-nodes-base.respondToWebhook",
      "typeVersion": 1,
      "position": [850, 450]
    },
    {
      "parameters": {
        "functionCode": "// Format Telegram message..."
      },
      "name": "Format Message",
      "type": "n8n-nodes-base.function",
      "typeVersion": 1,
      "position": [850, 150]
    },
    {
      "parameters": {
        "chatId": "YOUR_CHAT_ID",
        "text": "={{ $json.message }}",
        "additionalFields": {
          "parse_mode": "Markdown"
        }
      },
      "name": "Send Telegram",
      "type": "n8n-nodes-base.telegram",
      "typeVersion": 1,
      "position": [1050, 150]
    },
    {
      "parameters": {
        "options": {
          "responseCode": 200,
          "responseData": "={{ JSON.stringify({ success: true, message: 'Request received' }) }}"
        }
      },
      "name": "Success Response",
      "type": "n8n-nodes-base.respondToWebhook",
      "typeVersion": 1,
      "position": [1250, 150]
    }
  ],
  "connections": {
    "Webhook": {
      "main": [[{ "node": "Validate Data", "type": "main", "index": 0 }]]
    },
    "Validate Data": {
      "main": [[{ "node": "IF", "type": "main", "index": 0 }]]
    },
    "IF": {
      "main": [
        [{ "node": "Format Message", "type": "main", "index": 0 }],
        [{ "node": "Error Response", "type": "main", "index": 0 }]
      ]
    },
    "Format Message": {
      "main": [[{ "node": "Send Telegram", "type": "main", "index": 0 }]]
    },
    "Send Telegram": {
      "main": [[{ "node": "Success Response", "type": "main", "index": 0 }]]
    }
  }
}
```

## Setup Instructions

### Prerequisites
1. n8n instance (self-hosted or n8n.cloud)
2. Telegram Bot token and Chat ID
3. (Optional) Supabase or database account
4. (Optional) Email service credentials

### Step 1: Create Telegram Bot

```bash
# 1. Open Telegram and search for @BotFather
# 2. Send: /newbot
# 3. Follow prompts to create bot
# 4. Save the bot token

# 5. Get your Chat ID:
# - Start a chat with your new bot
# - Send any message
# - Visit: https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
# - Find "chat":{"id": YOUR_CHAT_ID}
```

### Step 2: Import Workflow to n8n

1. Open n8n
2. Click "Add Workflow" → "Import from URL/File"
3. Paste workflow JSON or upload file
4. Workflow imported ✓

### Step 3: Configure Nodes

1. **Webhook Node:**
   - Note the webhook URL
   - Copy for use in website

2. **Telegram Node:**
   - Click "Create New Credentials"
   - Enter bot token
   - Enter chat ID
   - Test connection

3. **(Optional) Database Node:**
   - Configure Supabase/Postgres credentials
   - Create table with schema above
   - Test connection

4. **(Optional) Email Node:**
   - Configure email service credentials
   - Test with sample email

### Step 4: Test Workflow

```bash
# Test with curl
curl -X POST https://your-n8n-instance.com/webhook/consultation-form \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+1234567890",
    "projectType": "ai",
    "budget": "$10k-25k",
    "timeline": "2-3 months",
    "description": "This is a test submission for the consultation form.",
    "timestamp": "2025-10-30T12:00:00Z",
    "source": "website"
  }'
```

**Expected Results:**
- ✅ Telegram message received
- ✅ (Optional) Email sent
- ✅ (Optional) Database entry created
- ✅ 200 success response

### Step 5: Add Webhook URL to Website

```typescript
// .env.local
N8N_FORM_WEBHOOK_URL=https://your-n8n-instance.com/webhook/consultation-form
```

### Step 6: Activate Workflow

1. In n8n, click "Active" toggle
2. Workflow is now live
3. Monitor executions tab for submissions

## Monitoring & Maintenance

### Health Checks

**Daily:**
- Check executions for errors
- Verify Telegram notifications arriving
- Test form submission

**Weekly:**
- Review execution time
- Check for failed workflows
- Optimize if needed

**Monthly:**
- Review database growth (if used)
- Archive old submissions
- Update workflow if needed

### Common Issues & Solutions

**Issue: Webhook not receiving data**
- Check webhook URL is correct
- Verify n8n is accessible from internet
- Check firewall/security settings

**Issue: Telegram not sending**
- Verify bot token is valid
- Check chat ID is correct
- Ensure bot is not blocked

**Issue: Validation failing**
- Check data format from website
- Review validation logic
- Check for special characters

**Issue: Slow response**
- Optimize database queries
- Remove unnecessary nodes
- Consider async processing

## Security Considerations

### Webhook Security
1. **Use HTTPS** - Always use secure connection
2. **Add Basic Auth** - Protect webhook with credentials
3. **Rate Limiting** - Prevent spam submissions
4. **IP Whitelist** - Restrict to known IPs (optional)

**Add Basic Auth:**
```json
{
  "authentication": "basicAuth",
  "basicAuth": {
    "user": "webhook-user",
    "password": "strong-random-password"
  }
}
```

**Update website API call:**
```typescript
const response = await fetch(webhookUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa('user:password')
  },
  body: JSON.stringify(data)
});
```

### Data Privacy
- Don't log sensitive data
- Comply with GDPR/privacy laws
- Add privacy notice on form
- Provide data deletion option
- Secure database with encryption

### Error Handling
- Don't expose internal errors to users
- Log errors for debugging
- Provide helpful error messages
- Have fallback notification method

## Advanced Features (Future)

### Auto-Response Based on Project Type
```javascript
// Add node to route by project type
const responses = {
  'ai': 'Thanks for your AI project inquiry. We specialize in...',
  'vr': 'Thanks for your VR project inquiry. We can help with...',
  // etc
};

return {
  json: {
    ...data,
    responseMessage: responses[data.projectType]
  }
};
```

### Lead Scoring
```javascript
// Score leads based on criteria
let score = 0;

if (data.budget.includes('$25k+')) score += 3;
if (data.timeline === '1-2 months') score += 2;
if (data.description.length > 100) score += 1;

return {
  json: {
    ...data,
    leadScore: score,
    priority: score >= 4 ? 'high' : score >= 2 ? 'medium' : 'low'
  }
};
```

### CRM Integration
- Add Salesforce node
- Add HubSpot node
- Add custom CRM API call
- Sync contacts automatically

### Follow-Up Automation
- Schedule follow-up reminders
- Send automated follow-up emails
- Track response status
- Escalate if no response

## Conclusion

This n8n workflow provides a robust, scalable solution for handling consultation form submissions with:

- ✅ Instant Telegram notifications
- ✅ Data validation and error handling
- ✅ Optional email confirmations
- ✅ Optional database storage
- ✅ Security best practices
- ✅ Easy to maintain and extend

**Estimated Setup Time:** 1-2 hours
**Maintenance:** <30 minutes/month

---

**Document Version:** 1.0
**Last Updated:** 2025-10-30
**Status:** Ready for implementation
**Prerequisites:** n8n instance, Telegram bot
