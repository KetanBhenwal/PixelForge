import React from "react";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-4">We'd love to hear from you! For any questions, feedback, or support, please reach out to us at:</p>
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
