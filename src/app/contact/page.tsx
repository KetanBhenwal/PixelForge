import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col gap-8 items-center w-full max-w-2xl mx-auto p-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl border border-blue-200 dark:border-gray-700">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-4">We&apos;d love to hear from you! For any questions, feedback, or support, please reach out to us at:</p>
      <a
        href="mailto:ketanbhenwal0199@gmail.com"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition-colors mb-6"
      >
        ketanbhenwal0199@gmail.com
      </a>
      <p className="text-gray-600 mt-8 text-sm">We aim to respond to all inquiries within 24-48 hours.</p>
    </div>
  );
}
