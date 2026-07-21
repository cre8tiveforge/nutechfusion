export default function ConsultationForm() {
  return (
    <form
      name="consultation"
      method="POST"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-6 max-w-2xl mx-auto card p-8"
      id="consultation"
    >
      {/* Required by Netlify: routes the POST to the "consultation" form. */}
      <input type="hidden" name="form-name" value="consultation" />

      {/* Honeypot. Real visitors never see this; bots fill it and get dropped. */}
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          pattern="[A-Za-z\s]{2,}"
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your email"
        />
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-gray-300">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          defaultValue=""
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select project type</option>
          <option value="virtual-reality">Virtual Reality</option>
          <option value="ai-integration">AI Integration</option>
          <option value="3d-production">3D Production</option>
          <option value="tech-solutions">Technical Solutions</option>
          <option value="consulting">Consulting</option>
        </select>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-300">
          Project Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          minLength={10}
          rows={4}
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Tell us about your project"
        />
      </div>

      {/*
        SMS opt-in — required for A2P 10DLC campaign approval.
        Both fields are OPTIONAL and the checkbox must stay unchecked by default:
        carriers reject campaigns where consent is pre-selected or is a condition
        of using the service. Do not add `required` or `defaultChecked` here.
      */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
          Mobile phone <span className="text-gray-500">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="(555) 555-5555"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="smsConsent"
          name="smsConsent"
          value="yes"
          className="mt-1 h-4 w-4 shrink-0 rounded border-gray-700 bg-gray-800 text-blue-500 focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="smsConsent" className="text-sm text-gray-400">
          I agree to receive recurring automated text messages from NuTech Fusion at the
          number provided. Message frequency varies. Message and data rates may apply.
          Reply STOP to unsubscribe, HELP for help. See our{' '}
          <a href="/privacy/" className="text-blue-400 underline hover:text-blue-300">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="/terms/" className="text-blue-400 underline hover:text-blue-300">
            Terms
          </a>
          .
        </label>
      </div>

      <div>
        <button type="submit" className="w-full btn-primary">
          Schedule a Consultation
        </button>
      </div>
    </form>
  );
}
