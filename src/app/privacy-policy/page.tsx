import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col gap-8 items-center w-full max-w-2xl mx-auto p-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl border border-blue-200 dark:border-gray-700">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: May 8, 2025</p>
      <p className="mb-4">This Privacy Policy describes how PixelForge (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects your information when you use our image and file conversion tools.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>We do <strong>not</strong> store or upload your files. All processing is done in your browser.</li>
        <li>We may collect anonymous usage data (such as browser type, device, and usage statistics) to improve our service.</li>
        <li>We use Google AdSense, which may collect data as described in their <a href="https://policies.google.com/privacy" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To provide and improve our services.</li>
        <li>To analyze usage trends and maintain security.</li>
        <li>To display relevant ads via Google AdSense.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">Third-Party Services</h2>
      <p className="mb-4">We use Google AdSense for advertising. Please review their <a href="https://policies.google.com/privacy" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">Privacy Policy</a> for more information.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Your Rights</h2>
      <p className="mb-4">You may contact us at any time to inquire about your data or request its deletion.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Contact</h2>
      <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@pixelforge.com" className="underline text-blue-600">support@pixelforge.com</a>.</p>
      <p className="mt-8 text-sm text-gray-500">&copy; 2025 PixelForge. All rights reserved.</p>
    </div>
  );
}