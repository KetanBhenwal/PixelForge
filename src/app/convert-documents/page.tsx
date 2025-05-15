"use client";

import React, { useState } from "react";


export default function ConvertDocuments() {
  const [file, setFile] = useState<File | null>(null);
  const [outputFormat, setOutputFormat] = useState<string>("excel");
  const [convertedFileUrl, setConvertedFileUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setConvertedFileUrl("");

      // Mapping of file extensions to conversion types
      const extensionToFormatMap: Record<string, string> = {
        doc: "excel",
        docx: "excel",
        xls: "word",
        xlsx: "word",
        csv: "excel", // Add support for CSV to XLSX conversion
      };

      // Determine the file extension
      const ext = selectedFile.name.split(".").pop()?.toLowerCase();

      // Check if the extension is supported and set the output format
      if (ext && extensionToFormatMap[ext]) {
        setOutputFormat(extensionToFormatMap[ext]);
      } else {
        alert("Unsupported file type. Please upload a .doc, .docx, .xls, .xlsx, or .csv file.");
        setFile(null);
        return;
      }
    }
  };

  const handleFormatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOutputFormat(e.target.value);
  };

  const handleConvert = async () => {
    if (!file) {
      alert("No file selected. Please upload a file to convert.");
      return;
    }

    setLoading(true);

    // Simulate file conversion process
    setTimeout(() => {
      const ext = file.name.split(".").pop()?.toLowerCase();
      let convertedContent = "";

      if (ext === "doc" || ext === "docx") {
        // Simulate Word to Excel conversion
        convertedContent = "Simulated Excel content for " + file.name;
      } else if (ext === "xls" || ext === "xlsx") {
        // Simulate Excel to Word conversion
        convertedContent = "Simulated Word content for " + file.name;
      } else if (ext === "csv") {
        // Simulate CSV to Excel conversion
        convertedContent = "Simulated Excel content for CSV file: " + file.name;
      } else {
        alert("Unsupported file type. Conversion failed.");
        setLoading(false);
        return;
      }

      // Create a Blob with the converted content
      const blob = new Blob([convertedContent], { type: "application/octet-stream" });
      const fakeUrl = URL.createObjectURL(blob);
      setConvertedFileUrl(fakeUrl);

      // Update the download link with the correct file extension
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
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">Quick and Easy Document Format Conversion</h2>
      {/* Modern, accessible file upload area */}
      <div className="w-full flex flex-col items-center mb-4">
        <label
          htmlFor="file-upload"
          tabIndex={0}
          className={`w-full flex flex-col items-center px-6 py-8 bg-gray-100 dark:bg-gray-800 text-blue-700 dark:text-blue-200 rounded-xl shadow-md border-2 border-dashed border-blue-300 dark:border-blue-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 relative group ${file ? 'border-green-500 bg-green-50 dark:bg-green-900 ring-2 ring-green-400' : 'hover:bg-blue-50 dark:hover:bg-gray-700'}`}
          aria-label="Upload a document file"
        >
          <span className="sr-only">Upload a document file</span>
          <svg className="w-12 h-12 mb-2 text-blue-500 dark:text-blue-300 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"></path>
          </svg>
          <span className="mt-2 text-base font-medium text-center">
            {file ? (
              <>
                <span className="truncate max-w-xs inline-block align-middle" title={file.name}>{file.name}</span>
                <span className="ml-2 inline-block align-middle px-2 py-0.5 text-xs rounded bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-100">{file.type || 'Document'}</span>
              </>
            ) : (
              <>
                <span className="font-semibold">Click or press Enter/Space to upload</span>
                <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">Accepted: .doc, .docx, .xls, .xlsx, .csv</span>
              </>
            )}
          </span>
          <input
            id="file-upload"
            type="file"
            accept=".doc,.docx,.xls,.xlsx,.csv"
            className="hidden"
            onChange={handleFileChange}
            aria-describedby="file-upload-help"
          />
        </label>
        <span id="file-upload-help" className="sr-only">Accepted file types: .doc, .docx, .xls, .xlsx, .csv</span>
        {file && (
          <button
            type="button"
            onClick={() => setFile(null)}
            className="mt-2 flex items-center gap-1 text-xs text-red-600 dark:text-red-400 hover:underline focus:outline-none focus:ring-2 focus:ring-red-400 rounded px-2 py-1 transition"
            aria-label="Remove selected file"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            Remove
          </button>
        )}
      </div>
      <select value={outputFormat} onChange={handleFormatChange} className="mb-4 p-3 border rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 w-full max-w-xs">
        <option value="word">Convert to Word</option>
        <option value="excel">Convert to Excel</option>
        <option value="csv">Convert to CSV</option>
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
