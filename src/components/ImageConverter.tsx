import React, { useState } from "react";

// Remove unused Props interface to fix lint error

const ImageConverter: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [outputUrl, setOutputUrl] = useState<string>("");
  const [outputType, setOutputType] = useState<string>("image/jpeg");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setOutputUrl("");
    }
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOutputType(e.target.value);
  };

  const handleConvert = async () => {
    if (!file) return;
    setLoading(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0);
        const url = canvas.toDataURL(outputType);
        setOutputUrl(url);
        setLoading(false);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col gap-6 items-center w-full max-w-md mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <label className="w-full flex flex-col items-center px-4 py-6 bg-gray-100 dark:bg-gray-700 text-blue-600 rounded-lg shadow-md tracking-wide uppercase border border-blue-200 cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-600 transition">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"></path></svg>
        <span className="mt-2 text-base leading-normal">{file ? file.name : "Select an image to convert"}</span>
        <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
      </label>
      <div className="flex w-full gap-2">
        <select value={outputType} onChange={handleTypeChange} className="border rounded p-2 flex-1 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
          <option value="image/jpeg">JPEG</option>
          <option value="image/png">PNG</option>
          <option value="image/webp">WEBP</option>
          <option value="image/bmp">BMP</option>
        </select>
        <button
          onClick={handleConvert}
          disabled={!file || loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition disabled:opacity-50"
        >
          {loading ? "Converting..." : "Convert"}
        </button>
      </div>
      {outputUrl && (
        <div className="flex flex-col items-center gap-2 mt-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={outputUrl} alt="Converted" className="max-w-full max-h-64 border rounded shadow" />
          <a href={outputUrl} download={`converted.${outputType.split("/")[1]}`} className="text-blue-700 dark:text-blue-300 underline font-medium">
            Download
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageConverter;
