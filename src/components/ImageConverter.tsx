import React, { useState } from "react";
import Image from "next/image";

// Remove unused Props interface to fix lint error

const ImageConverter: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [outputUrl, setOutputUrl] = useState<string>("");
  const [outputType, setOutputType] = useState<string>("image/jpeg");
  const [loading, setLoading] = useState(false);
  const [resizeOption, setResizeOption] = useState<string>("percentage");
  const [resizeValue, setResizeValue] = useState<number>(100);
  const [customWidth, setCustomWidth] = useState<number | "">("");
  const [customHeight, setCustomHeight] = useState<number | "">("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setOutputUrl("");
    }
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOutputType(e.target.value);
  };

  const handleResizeOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setResizeOption(e.target.value);
  };

  const handleResizeValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResizeValue(Number(e.target.value));
  };

  const handleCustomWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomWidth(Number(e.target.value) || "");
  };

  const handleCustomHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomHeight(Number(e.target.value) || "");
  };

  const handleConvert = async () => {
    if (!file) return;
    setLoading(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        let scaleFactor = 1;
        if (resizeOption === "percentage") {
          scaleFactor = resizeValue / 100;
        } else if (resizeOption === "size") {
          const targetSize = resizeValue * 1024; // Convert KB to bytes
          const originalSize = file.size;
          scaleFactor = Math.sqrt(targetSize / originalSize);
        }

        canvas.width = img.width * scaleFactor;
        canvas.height = img.height * scaleFactor;
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

        const url = canvas.toDataURL(outputType);
        setOutputUrl(url);
        setLoading(false);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleResize = async () => {
    if (!file) return;
    setLoading(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (resizeOption === "custom") {
          canvas.width = customWidth || img.width;
          canvas.height = customHeight || img.height;
        } else {
          let scaleFactor = 1;
          if (resizeOption === "percentage") {
            scaleFactor = resizeValue / 100;
          } else if (resizeOption === "size") {
            const targetSize = resizeValue * 1024; // Convert KB to bytes
            const originalSize = file.size;
            scaleFactor = Math.sqrt(targetSize / originalSize);
          }
          canvas.width = img.width * scaleFactor;
          canvas.height = img.height * scaleFactor;
        }

        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
        const url = canvas.toDataURL(outputType);
        setOutputUrl(url);
        setLoading(false);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col gap-8 items-center w-full max-w-2xl mx-auto p-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl border border-blue-200 dark:border-gray-700">
      {/* Modern, accessible file upload area (consistent with other pages) */}
      <div className="w-full flex flex-col items-center mb-4">
        <label
          htmlFor="image-upload"
          tabIndex={0}
          className={`w-full flex flex-col items-center px-6 py-8 bg-gray-100 dark:bg-gray-800 text-blue-700 dark:text-blue-200 rounded-xl shadow-md border-2 border-dashed border-blue-300 dark:border-blue-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 relative group ${file ? 'border-green-500 bg-green-50 dark:bg-green-900 ring-2 ring-green-400' : 'hover:bg-blue-50 dark:hover:bg-gray-700'}`}
          aria-label="Upload an image file"
        >
          <span className="sr-only">Upload an image file</span>
          <svg className="w-12 h-12 mb-2 text-blue-500 dark:text-blue-300 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"></path>
          </svg>
          <span className="mt-2 text-base font-medium text-center">
            {file ? (
              <>
                <span className="truncate max-w-xs inline-block align-middle" title={file.name}>{file.name}</span>
                <span className="ml-2 inline-block align-middle px-2 py-0.5 text-xs rounded bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-100">{file.type || 'Image'}</span>
              </>
            ) : (
              <>
                <span className="font-semibold">Click or press Enter/Space to upload</span>
                <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">Accepted: .jpg, .jpeg, .png, .webp, .bmp, etc.</span>
              </>
            )}
          </span>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
            aria-describedby="image-upload-help"
          />
        </label>
        <span id="image-upload-help" className="sr-only">Accepted file types: .jpg, .jpeg, .png, .webp, .bmp, etc.</span>
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
      <div className="flex w-full gap-4 mt-4">
        <select value={outputType} onChange={handleTypeChange} className="border rounded p-3 flex-1 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
          <option value="image/jpeg">JPEG</option>
          <option value="image/png">PNG</option>
          <option value="image/webp">WEBP</option>
          <option value="image/bmp">BMP</option>
        </select>
        <button
          onClick={handleConvert}
          disabled={!file || loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded font-medium transition disabled:opacity-50"
        >
          {loading ? "Converting..." : "Convert Format"}
        </button>
      </div>
      <div className="flex w-full gap-4 mt-4">
        <select value={resizeOption} onChange={handleResizeOptionChange} className="border rounded p-3 flex-1 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
          <option value="percentage">Resize by Percentage</option>
          <option value="size">Resize by Size (KB)</option>
          <option value="custom">Custom Dimensions</option>
        </select>
        {resizeOption === "custom" ? (
          <>
            <input
              type="number"
              value={customWidth}
              onChange={handleCustomWidthChange}
              className="border rounded p-2 w-20 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="Width (px)"
            />
            <input
              type="number"
              value={customHeight}
              onChange={handleCustomHeightChange}
              className="border rounded p-2 w-20 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="Height (px)"
            />
          </>
        ) : (
          <input
            type="number"
            value={resizeValue}
            onChange={handleResizeValueChange}
            className="border rounded p-3 flex-1 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            placeholder="Enter value"
          />
        )}
      </div>
      <button
        onClick={handleResize}
        disabled={!file || loading}
        className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded font-medium transition disabled:opacity-50 mt-4"
      >
        {loading ? "Resizing..." : "Resize Image"}
      </button>
      {outputUrl && (
        <div className="flex flex-col items-center gap-3 mt-6">
          <Image src={outputUrl} alt="Converted" className="max-w-full max-h-64 border rounded shadow-lg" width={500} height={500} />
          <a href={outputUrl} download={`converted.${outputType.split("/")[1]}`} className="text-blue-700 dark:text-blue-300 underline font-medium">
            Download
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageConverter;
