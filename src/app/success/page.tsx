import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="rounded-full h-24 w-24 bg-green-100 mx-auto flex items-center justify-center">
          <svg
            className="h-12 w-12 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Message Sent Successfully!
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Thank you for reaching out. We'll get back to you as soon as possible.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="btn-primary inline-block"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
} 