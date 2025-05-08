"use client";

import React, { useState } from "react";

export default function ConvertDocuments() {
  const [file, setFile] = useState<File | null>(null);
  const [outputFormat, setOutputFormat] = useState<string>("excel");
  const [convertedFileUrl, setConvertedFileUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setConvertedFileUrl("");
    }
  };

  const handleFormatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOutputFormat(e.target.value);
  };

  const handleConvert = async () => {
    if (!file) return;
    setLoading(true);

    // Simulate file conversion process
    setTimeout(() => {
      const fakeUrl = URL.createObjectURL(new Blob(["Converted File"], { type: "application/octet-stream" }));
      setConvertedFileUrl(fakeUrl);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-8 items-center w-full max-w-2xl mx-auto p-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl border border-blue-200 dark:border-gray-700">
      <h1 className="text-3xl font-bold mb-6 text-center">Convert Documents</h1>
      <p className="mb-8 text-center max-w-xl text-gray-700 dark:text-gray-300">
        Upload your document and convert it to the desired format (Word to Excel or vice versa).
      </p>
      <input type="file" accept=".doc,.docx,.xls,.xlsx" onChange={handleFileChange} className="mb-4" />
      <select value={outputFormat} onChange={handleFormatChange} className="mb-4 p-2 border rounded">
        <option value="word">Convert to Word</option>
        <option value="excel">Convert to Excel</option>
      </select>
      <button
        onClick={handleConvert}
        disabled={!file || loading}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? "Converting..." : "Convert"}
      </button>
      {convertedFileUrl && (
        <div className="mt-4">
          <a href={convertedFileUrl} download={`converted.${outputFormat === "word" ? "docx" : "xlsx"}`} className="text-blue-700 underline">
            Download Converted File
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
