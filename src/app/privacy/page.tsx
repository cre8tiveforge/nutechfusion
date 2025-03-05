import Header from '@/components/Header';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gray-900/90 border border-blue-500/10 rounded-xl p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last updated: February 11, 2025</p>
          
          <div className="prose prose-invert max-w-none">
            <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
            
            <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
            
            <h2 className="text-3xl font-bold text-blue-400 mt-8 mb-4">Interpretation and Definitions</h2>
            
            <h3 className="text-2xl font-bold mb-4">Interpretation</h3>
            <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Definitions</h3>
            <p>For the purposes of this Privacy Policy:</p>
            <ul className="list-disc pl-6 space-y-4 mb-8">
              <li>
                <strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.
              </li>
              <li>
                <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
              </li>
              <li>
                <strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to NUTECH FUSION LLC, 1 HOUSTON, TX 77051.
              </li>
              <li>
                <strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.
              </li>
              <li>
                <strong>Country</strong> refers to: Texas, United States
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-blue-400 mt-8 mb-4">Collecting and Using Your Personal Data</h2>
            
            <h3 className="text-2xl font-bold mb-4">Types of Data Collected</h3>
            
            <h4 className="text-xl font-bold text-blue-400 mb-4">Personal Data</h4>
            <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personal Data we collect may include:</p>
            <ul className="list-disc pl-6 space-y-4 mb-8">
              <li>
                <strong>Email Address:</strong> We collect your email address when you subscribe to our newsletter, contact us through the website, or create an account (if applicable).
                <br />
                <em>Purpose:</em> To communicate with you, respond to your inquiries, send you newsletters or updates you&apos;ve subscribed to, and for account management if you create an account.
              </li>
              <li>
                <strong>Usage Data</strong> (as described below)
              </li>
            </ul>

            <h4 className="text-xl font-bold text-blue-400 mb-4">Usage Data</h4>
            <p>Usage Data is collected automatically when using the Service.</p>
            <p>Usage Data may include:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Internet Protocol (IP) Address:</strong> Your device&apos;s IP address is logged when you access our Service.
                <br />
                <em>Purpose:</em> To analyze website traffic, monitor server performance, diagnose technical issues, and for security purposes.
              </li>
              <li>
                <strong>Browser Type and Version:</strong> Information about the type and version of your web browser.
                <br />
                <em>Purpose:</em> To optimize our website for different browsers and understand the technology users are employing to access our Service.
              </li>
              <li>
                <strong>Pages You Visit:</strong> We track the pages you visit on our Service and the order in which you visit them.
                <br />
                <em>Purpose:</em> To understand user navigation patterns, identify popular content, and improve website structure and user experience.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 