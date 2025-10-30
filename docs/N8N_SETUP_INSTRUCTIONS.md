# n8n Workflow Setup Instructions

## Quick Setup Guide

Follow these steps to get your consultation form working with Telegram notifications.

---

## Step 1: Set Up Telegram Bot (5 minutes)

### 1.1 Create Your Bot
1. Open Telegram and search for **@BotFather**
2. Send `/newbot` command
3. Follow prompts:
   - Bot name: `NuTech Fusion Bot` (or your choice)
   - Bot username: Must end in `bot` (e.g., `nutechfusion_bot`)
4. **Save the Bot Token** - looks like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`

### 1.2 Get Your Chat ID
1. Start a chat with your new bot (click the link BotFather gives you)
2. Send any message to your bot (e.g., "Hello")
3. Open this URL in your browser (replace `YOUR_BOT_TOKEN`):
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```
4. Look for `"chat":{"id":` in the response
5. **Save the Chat ID** - it's a number like `123456789`

**Example response:**
```json
{
  "ok": true,
  "result": [{
    "message": {
      "chat": {
        "id": 123456789,    ← This is your Chat ID!
        "first_name": "Your Name"
      }
    }
  }]
}
```

---

## Step 2: Import Workflow to n8n (2 minutes)

### 2.1 Import the Workflow
1. Log into your n8n at **https://auto.aigenerated.biz**
2. Click **"Add workflow"** → **"Import from File"**
3. Select the file: `n8n-consultation-form-workflow.json` (in your project root)
4. Click **"Import"**
5. Workflow imported! ✓

### 2.2 Configure Telegram Credentials
1. Click on the **"Send Telegram"** node
2. Under **"Credentials"**, click **"Create New"**
3. Enter your Telegram credentials:
   - **Credential Name:** `Telegram Bot` (or your choice)
   - **Access Token:** Paste your Bot Token from Step 1.1
4. Click **"Save"**

### 2.3 Set Telegram Chat ID

**For Self-Hosted n8n (without Environment Variables UI):**
1. In the **Send Telegram** node, set the **Chat ID** field directly to your Chat ID number
2. Example: `123456789` (just the number, no quotes)

**For n8n Cloud/Enterprise (with Environment Variables):**
1. Go to **Settings** → **Environments**
2. Add a new variable:
   - **Key:** `TELEGRAM_CHAT_ID`
   - **Value:** Your Chat ID from Step 1.2
3. Click **"Save"**
4. In the **Send Telegram** node, set **Chat ID** to: `={{ $env.TELEGRAM_CHAT_ID }}`

### 2.4 Verify Data Mapping

**Note:** If you imported the workflow after October 30, 2025, this fix is already included in the JSON file. If you imported earlier, verify:

1. Click on the **"Validate Data"** node (second node in the workflow)
2. In the code editor, check line 6 reads:
   ```javascript
   const data = $input.item.json.body;
   ```
3. If it says `const data = $input.item.json;` (without `.body`), change it to include `.body`
4. Click **"Save"**

This is required because webhooks wrap the POST data in a `body` property.

---

## Step 3: Get Webhook URL (1 minute)

### 3.1 Activate and Get URL
1. In your workflow, click on the **"Webhook"** node
2. You'll see the **Webhook URL** displayed, something like:
   ```
   https://auto.aigenerated.biz/webhook/consultation-form
   ```
3. **Copy this URL** - you'll need it for Step 4

### 3.2 Activate Workflow
1. Click the **"Active"** toggle in the top-right
2. Workflow should now show as **Active** ✓

---

## Step 4: Update Website Environment (1 minute)

### 4.1 Add Webhook URL to .env
1. Open the file: `d:\ntfwebsite\.env`
2. Find the line: `N8N_FORM_WEBHOOK_URL=`
3. Paste your webhook URL after the `=`:
   ```
   N8N_FORM_WEBHOOK_URL=https://auto.aigenerated.biz/webhook/consultation-form
   ```
4. Save the file

### 4.2 Restart Dev Server
The dev server should automatically reload with the new environment variable.

If not, restart it:
- Press `Ctrl+C` in the terminal running `pnpm run dev`
- Run `pnpm run dev` again

---

## Step 5: Test the Workflow (2 minutes)

### 5.1 Test from Website
1. Go to **http://localhost:3000**
2. Scroll to the consultation form
3. Fill it out with test data:
   - Name: Test User
   - Email: test@example.com
   - Project Type: AI Integration
   - Description: This is a test submission
4. Click **"Schedule a Consultation"**

**Expected Results:**
- ✅ Button shows "Sending..." during submission
- ✅ Toast notification slides up from bottom-right corner
- ✅ Success message displays for 5 seconds
- ✅ Form fields clear automatically
- ✅ You receive a Telegram message with all form data
- ✅ User stays on the same page (no redirect)

### 5.2 Check Telegram
Open Telegram and check your bot chat - you should see a message like:

```
🔔 NEW CONSULTATION REQUEST

👤 Name: Test User
📧 Email: test@example.com

🎯 Project Type: AI Integration

📝 Description:
This is a test submission to verify the form is working.

🕐 Submitted: 10/30/2025, 5:00:00 PM
🌐 Source: Website
```

---

## Troubleshooting

### Issue: "Telegram credentials not configured"
**Fix:** Make sure you created and selected the Telegram credentials in the "Send Telegram" node.

### Issue: "Invalid chat ID"
**Fix:**
1. Make sure the Chat ID is set in n8n Environment Variables
2. Check you used the correct Chat ID (just the numbers, no quotes)
3. Make sure you sent at least one message to your bot

### Issue: "Webhook not receiving data"
**Fix:**
1. Check the webhook URL is correct in `.env`
2. Make sure workflow is **Active** (toggle in top-right)
3. Check n8n logs for errors

### Issue: "Form validation failing"
**Check:**
- Name: At least 2 characters, letters only
- Email: Valid email format
- Project Type: Must be selected
- Description: 10-500 characters

---

## Workflow Architecture

The workflow has 7 nodes:

```
1. Webhook Trigger
   ↓
2. Validate Data (checks required fields)
   ↓
3. IF Valid
   ↓                ↓
4. Format Message  Error Response
   ↓
5. Send Telegram
   ↓
6. Success Response
```

**Flow:**
1. Webhook receives form data
2. JavaScript validates all fields
3. If invalid → Return 400 error
4. If valid → Format Telegram message
5. Send to Telegram
6. Return success to website

---

## Optional Enhancements

### Add Email Confirmation (Optional)
1. Add a **"Send Email"** node after "Format Telegram Message"
2. Configure with your email service (Gmail, SendGrid, etc.)
3. Send confirmation email to user

### Add Database Storage (Optional)
1. Add a **"Supabase"** or **"PostgreSQL"** node
2. Configure connection to your database
3. Insert form data for records

### Add Lead Scoring (Optional)
1. Add a **"Code"** node after validation
2. Score leads based on criteria (budget, timeline, etc.)
3. Add priority flag to Telegram message

---

## Security Notes

- **Never commit `.env` file** - it contains API keys
- **Use HTTPS** - Always use secure connections
- **Rate limit** - Consider adding rate limiting to webhook
- **Validation** - The workflow validates all inputs before processing

---

## Need Help?

If you encounter issues:
1. Check n8n execution logs (click on a workflow execution)
2. Test the Telegram bot manually (send a message)
3. Verify webhook URL is correct
4. Check environment variables are set

---

## Summary Checklist

- [x] Created Telegram bot with @BotFather
- [x] Got Bot Token
- [x] Got Chat ID
- [x] Imported workflow to n8n
- [x] Configured Telegram credentials
- [x] Set Chat ID in Send Telegram node
- [x] Fixed data mapping in Validate Data node
- [x] Activated workflow
- [x] Copied webhook URL
- [x] Updated `.env` file with webhook URL
- [x] Tested form submission
- [x] Received Telegram notification with correct data

**Estimated Total Time:** 10-15 minutes
**Status:** ✅ **COMPLETE AND WORKING**

---

**Your form now:**
✅ Validates all inputs (client-side and server-side)
✅ Sends instant Telegram notifications
✅ Shows toast notification in bottom-right corner
✅ Clears form after successful submission
✅ Handles errors gracefully with error toasts
✅ Disables form during submission

🎉 **Ready to go live!**
