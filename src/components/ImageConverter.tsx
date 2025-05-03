import React, { useState } from "react";

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
    <div className="flex flex-col gap-6 items-center w-full max-w-md mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
      <label className="w-full flex flex-col items-center px-6 py-8 bg-gray-200 dark:bg-gray-700 text-blue-600 rounded-lg shadow-md tracking-wide uppercase border border-blue-300 cursor-pointer hover:bg-blue-300 dark:hover:bg-gray-600 transition">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"></path>
        </svg>
        <span className="mt-3 text-lg leading-normal font-semibold">{file ? file.name : "Select an image to convert"}</span>
        <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
      </label>
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
          <img src={outputUrl} alt="Converted" className="max-w-full max-h-64 border rounded shadow-lg" />
          <a href={outputUrl} download={`converted.${outputType.split("/")[1]}`} className="text-blue-700 dark:text-blue-300 underline font-medium">
            Download
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageConverter;
