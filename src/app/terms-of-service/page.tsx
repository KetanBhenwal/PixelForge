import React from "react";

export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Terms &amp; Conditions</h1>
      <p className="mb-4">Last updated: May 8, 2025</p>
      <p className="mb-4">Welcome to PixelForge! By using our website and tools, you agree to the following terms and conditions:</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Use of Service</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>PixelForge is provided as-is, without warranty of any kind.</li>
        <li>All file processing is performed in your browser; we do not store your files.</li>
        <li>You are responsible for ensuring you have the rights to use and process any files you upload.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>We are not liable for any damages or losses resulting from the use of our service.</li>
        <li>We do not guarantee the accuracy or availability of the service at all times.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">Changes to Terms</h2>
      <p className="mb-4">We may update these terms at any time. Continued use of the service constitutes acceptance of the new terms.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Contact</h2>
      <p className="mb-4">For questions about these terms, contact us at <a href="mailto:support@pixelforge.com" className="underline text-blue-600">support@pixelforge.com</a>.</p>
      <p className="mt-8 text-sm text-gray-500">&copy; 2025 PixelForge. All rights reserved.</p>
    </div>
  );
}