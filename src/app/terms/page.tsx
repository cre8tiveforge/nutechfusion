import Header from '@/components/Header';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gray-900/90 border border-blue-500/10 rounded-xl p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">Terms of Service</h1>
          <p className="text-gray-400 mb-8">Last updated: February 11, 2025</p>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-blue-400 mt-8 mb-4">1. Agreement to Terms</h2>
            <p>These Terms of Service (&quot;Terms&quot;) govern your access to and use of NuTech Fusion&apos;s website and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our services.</p>

            <h2 className="text-3xl font-bold text-blue-400 mt-8 mb-4">2. Services</h2>
            <p>NuTech Fusion provides AI and Virtual Reality solutions, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Custom AI Integration Solutions</li>
              <li>Virtual Reality Development</li>
              <li>3D Production Services</li>
              <li>Technical Consulting</li>
            </ul>

            <h2 className="text-3xl font-bold text-blue-400 mt-8 mb-4">3. Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of NuTech Fusion and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of NuTech Fusion.</p>

            <h2 className="text-3xl font-bold text-blue-400 mt-8 mb-4">4. User Accounts</h2>
            <h3 className="text-2xl font-bold mb-4">4.1 Account Creation</h3>
            <p>When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.</p>

            <h3 className="text-2xl font-bold mb-4">4.2 Account Security</h3>
            <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party.</p>

            <h2 className="text-3xl font-bold text-blue-400 mt-8 mb-4">5. Project Development and Delivery</h2>
            <h3 className="text-2xl font-bold mb-4">5.1 Project Scope</h3>
            <p>All projects will be defined by a separate Statement of Work (SOW) or service agreement that outlines specific deliverables, timelines, and costs. Any changes to the project scope must be agreed upon in writing by both parties.</p>

            <h3 className="text-2xl font-bold mb-4">5.2 Client Responsibilities</h3>
            <p>Clients agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide necessary information and materials in a timely manner</li>
              <li>Review and provide feedback on deliverables within agreed timeframes</li>
              <li>Maintain open communication throughout the project</li>
              <li>Make payments according to the agreed schedule</li>
            </ul>

            <h2 className="text-3xl font-bold text-blue-400 mt-8 mb-4">6. Payment Terms</h2>
            <p>Payment terms will be specified in individual project agreements. Unless otherwise stated:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A deposit may be required before work begins</li>
              <li>Payments are non-refundable</li>
              <li>Late payments may incur additional fees</li>
              <li>We reserve the right to pause work until outstanding payments are resolved</li>
            </ul>

            <h2 className="text-3xl font-bold text-blue-400 mt-8 mb-4">7. Confidentiality</h2>
            <p>Both parties agree to maintain the confidentiality of any proprietary information shared during the course of service delivery. This includes but is not limited to business strategies, technical specifications, and client data.</p>

            <h2 className="text-3xl font-bold text-blue-400 mt-8 mb-4">8. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: contact@nutechfusion.com</li>
              <li>Website: <a href="https://www.nutechfusion.com/contact" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">www.nutechfusion.com/contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 