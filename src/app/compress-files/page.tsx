"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function CompressFiles() {
  const [file, setFile] = useState<File | null>(null);
  const [compressedFileUrl, setCompressedFileUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setCompressedFileUrl("");
    }
  };

  const handleCompress = async () => {
    if (!file) return;
    setLoading(true);

    // Simulate file compression process
    setTimeout(() => {
      const fakeUrl = URL.createObjectURL(new Blob(["Compressed File"], { type: "application/octet-stream" }));
      setCompressedFileUrl(fakeUrl);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-8 items-center w-full max-w-2xl mx-auto p-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl border border-blue-200 dark:border-gray-700">
      <h1 className="text-3xl font-bold mb-6 text-center">Compress Huge Files</h1>
      <p className="mb-8 text-center max-w-xl text-gray-700 dark:text-gray-300">
        Upload your file to compress it and save space.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <Link href="/convert-documents" className="text-blue-600 hover:underline">
          Convert Documents
        </Link>
        <Link href="/file-management" className="text-blue-600 hover:underline">
          File Management Tools
        </Link>
        <Link href="/privacy-policy" className="text-blue-600 hover:underline">
          Privacy Policy
        </Link>
        <Link href="/terms-of-service" className="text-blue-600 hover:underline">
          Terms of Service
        </Link>
        <Link href="/contact" className="text-blue-600 hover:underline">
          Contact Us
        </Link>
      </div>
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">Reduce File Size Without Losing Quality</h2>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button
        onClick={handleCompress}
        disabled={!file || loading}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? "Compressing..." : "Compress"}
      </button>
      {compressedFileUrl && (
        <div className="mt-4">
          <a href={compressedFileUrl} download="compressed-file.zip" className="text-blue-700 underline">
            Download Compressed File
          </a>
        </div>
      )}
      <div className="my-8 w-full flex justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center" }}
          data-ad-client="ca-pub-3851492837698079"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
      </div>
    </div>
  );
}
