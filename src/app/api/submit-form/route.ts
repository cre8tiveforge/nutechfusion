import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Here you would typically send the data to your backend service
    // For now, we'll just log it and return success
    console.log('Form submission:', data);

    // You can add your email service integration here
    // Example: await sendEmail(data);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 