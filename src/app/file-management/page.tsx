import React from 'react';
import FileManagement from '../../components/FileManagement';

const FileManagementPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="py-4 text-center">
        <h1 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">File Management Tools</h1>
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-200">Organize and Manage Your Files Efficiently</h2>
      </div>
      <FileManagement />
    </div>
  );
};

export default FileManagementPage;
