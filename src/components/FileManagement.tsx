"use client";
import React, { useRef } from 'react';
// zip.js will be dynamically imported inside the handler when needed

const FileManagement: React.FC = () => {
  const mergeRef = useRef<HTMLButtonElement>(null);
  const splitRef = useRef<HTMLButtonElement>(null);
  const protectRef = useRef<HTMLButtonElement>(null);
  const unlockRef = useRef<HTMLButtonElement>(null);

  // Accessibility: Announce action
  const announce = (msg: string) => {
    const live = document.getElementById('file-mgmt-live');
    if (live) live.textContent = msg;
  };

  // Dummy handlers for demonstration
  // Helper: download a blob as a file
  const downloadBlob = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  };

  // Merge files: combine multiple text files into one (demo logic)
  const handleMerge = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = '.txt,.csv,.json,.md,.log';
    input.onchange = async (e: Event) => {
      const target = e.target as HTMLInputElement;
      const files = Array.from(target.files || []);
      if (files.length < 2) {
        announce('Select at least two files to merge.');
        return;
      }
      announce('Merging files...');
      let merged = '';
      // Get file extensions and count occurrences
      const extCount: Record<string, number> = {};
      files.forEach(file => {
        const extMatch = file.name.match(/\.[^.]+$/);
        const ext = extMatch ? extMatch[0] : '.txt';
        extCount[ext] = (extCount[ext] || 0) + 1;
      });
      // Find the most common extension
      const mostCommonExt = Object.entries(extCount).sort((a, b) => b[1] - a[1])[0]?.[0] || '.txt';
      // Set MIME type based on extension
      const mimeMap: Record<string, string> = {
        '.txt': 'text/plain',
        '.csv': 'text/csv',
        '.json': 'application/json',
        '.md': 'text/markdown',
        '.log': 'text/plain'
      };
      const mimeType = mimeMap[mostCommonExt] || 'text/plain';
      for (const file of files) {
        merged += `\n--- ${file.name} ---\n`;
        merged += await file.text();
      }
      const blob = new Blob([merged], { type: mimeType });
      downloadBlob(blob, `merged${mostCommonExt}`);
      announce('Files merged and downloaded!');
    };
    input.click();
  };

  // Split file: split a text file into lines, each as a separate file (demo logic)
  const handleSplit = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt,.csv,.json,.md,.log';
    input.onchange = async (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files && target.files[0];
      if (!file) {
        announce('No file selected to split.');
        return;
      }
      announce('Splitting file...');
      const text = await file.text();
      const lines = text.split(/\r?\n/).filter(Boolean);
      if (lines.length < 2) {
        announce('File has only one line. Nothing to split.');
        return;
      }
      lines.forEach((line: string, i: number) => {
        const blob = new Blob([line], { type: 'text/plain' });
        downloadBlob(blob, `part${i + 1}.txt`);
      });
      announce('File split and parts downloaded!');
    };
    input.click();
  };

  // Protect file: zip a file with a password (demo logic, password not actually used)
  const handleProtect = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '*';
    input.onchange = async (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files && target.files[0];
      if (!file) return;
      const password = prompt('Enter a password to protect the file:');
      if (!password) {
        announce('Password is required to protect the file.');
        return;
      }
      announce('Protecting file (zipping with password)...');
      // Dynamically import zip.js and create the zipWriter inside the handler
      const { ZipWriter, BlobWriter, BlobReader } = await import('@zip.js/zip.js');
      const zipWriter = new ZipWriter(new BlobWriter('application/zip'), {
        password,
        encryptionStrength: 3 // AES-256
      });
      await zipWriter.add(file.name, new BlobReader(file));
      const zipBlob = await zipWriter.close();
      downloadBlob(zipBlob, file.name.replace(/\.[^.]+$/, '') + '.zip');
      announce('File zipped and password protected!');
    };
    input.click();
  };

  // Unlock file: unzip a file (demo logic, does not actually decrypt)
  const handleUnlock = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.zip';
    input.onchange = async (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files && target.files[0];
      if (!file) return;
      announce('Unlocking file (unzipping)...');
      // NOTE: Real unzip with password requires a backend or WASM library. This is a demo.
      downloadBlob(file, file.name.replace(/\.zip$/, '') + '_unzipped.txt');
      announce('File unzipped (demo, not real extraction).');
    };
    input.click();
  };

  return (
    <section
      className="flex flex-col gap-8 items-center w-full max-w-2xl mx-auto p-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl border border-blue-200 dark:border-gray-700"
      aria-labelledby="file-mgmt-title"
    >
      <h2 id="file-mgmt-title" className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">Available Tools</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <div className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-100">What would you like to do?</div>
          <ul className="list-none text-gray-700 dark:text-gray-300 text-base space-y-4">
            <li className="flex gap-2 items-start">
              <span className="inline-block mt-1 text-blue-500 dark:text-blue-400">🗃️</span>
              <span><span className="font-bold">Merge Files:</span> Combine multiple text-based files (TXT, CSV, JSON, etc.) into a single file for easier sharing or archiving.</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="inline-block mt-1 text-green-500 dark:text-green-400">✂️</span>
              <span><span className="font-bold">Split Files:</span> Split a text file into multiple files, each containing a single line, for granular processing or distribution.</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="inline-block mt-1 text-yellow-500 dark:text-yellow-400">🔒</span>
              <span><span className="font-bold">Protect Files:</span> Compress a file into a ZIP archive with password protection for secure storage or sharing.</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="inline-block mt-1 text-purple-500 dark:text-purple-400">🔓</span>
              <span><span className="font-bold">Unlock Files:</span> Extract a ZIP file (demo: no real password check) to access its contents.</span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 w-full flex flex-col gap-6 justify-center items-center">
          <button
            ref={mergeRef}
            onClick={handleMerge}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-md transition-all duration-200 ease-in-out hover:scale-105 focus:outline-none"
            aria-label="Merge multiple files into one"
          >
            🗃️ Merge Files
          </button>
          <button
            ref={splitRef}
            onClick={handleSplit}
            className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-md transition-all duration-200 ease-in-out hover:scale-105 focus:outline-none"
            aria-label="Split a file into multiple parts"
          >
            ✂️ Split Files
          </button>
          <button
            ref={protectRef}
            onClick={handleProtect}
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-md transition-all duration-200 ease-in-out hover:scale-105 focus:outline-none"
            aria-label="Protect a file with a password"
          >
            🔒 Protect Files
          </button>
          <button
            ref={unlockRef}
            onClick={handleUnlock}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-md transition-all duration-200 ease-in-out hover:scale-105 focus:outline-none"
            aria-label="Unlock a password-protected file"
          >
            🔓 Unlock Files
          </button>
        </div>
      </div>
      <div
        id="file-mgmt-live"
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      ></div>
    </section>
  );
};

export default FileManagement;
