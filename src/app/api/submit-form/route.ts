import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Get n8n webhook URL from environment
    const webhookUrl = process.env.N8N_FORM_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('N8N_FORM_WEBHOOK_URL not configured');
      return NextResponse.json(
        { success: false, message: 'Form service not configured' },
        { status: 500 }
      );
    }

    // Send form data to n8n workflow
    const n8nResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Check if response has content
    const text = await n8nResponse.text();
    let responseData;

    try {
      responseData = text ? JSON.parse(text) : {};
    } catch {
      responseData = { success: n8nResponse.ok };
    }

    // Return n8n's response to the client
    return NextResponse.json(responseData, {
      status: n8nResponse.status
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
} 