import { useState } from 'react';
import { Upload, HardDrive, Download, Trash2, Check, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

export const FileUploadSection = () => {
  const [uploadedFiles, setUploadedFiles] = useState([
    { id: 1, name: 'HR Policy.pdf', uploaded: true },
    { id: 2, name: 'Finance Policy.pdf', uploaded: true },
  ]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="w-1/3 bg-white p-6 rounded-lg shadow-sm">
      <div className="space-y-4">
        <Button 
          onClick={handleFileUpload}
          className="w-full justify-start space-x-2 bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-200"
        >
          <Upload className="w-4 h-4" />
          <span>Upload File From PC</span>
        </Button>

        <Button 
          variant="outline"
          className="w-full justify-start space-x-2 hover:scale-105 transition-all duration-200"
        >
          <HardDrive className="w-4 h-4" />
          <span>Source From Online Drive</span>
        </Button>

        {isUploading && (
          <div className="animate-slide-up">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-5 h-5 border-2 border-primary rounded flex items-center justify-center transition-all duration-200">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-sm text-green-500">File Successfully Uploaded</span>
            </div>
            <Progress value={uploadProgress} className="h-1" />
            <p className="text-sm text-gray-500 mt-1">Total Files Uploaded: {uploadedFiles.length}</p>
          </div>
        )}

        <div className="mt-6 space-y-2">
          {uploadedFiles.map((file) => (
            <div key={file.id} className="file-item animate-slide-up">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-primary rounded flex items-center justify-center transition-all duration-200">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm">{file.name}</span>
              </div>
              <div className="flex space-x-2">
                <button className="icon-button hover:scale-110 transition-transform duration-200">
                  <Download className="w-4 h-4 text-gray-500" />
                </button>
                <button className="icon-button hover:scale-110 transition-transform duration-200">
                  <Trash2 className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <Button 
          variant="ghost"
          className="w-full justify-center mt-4 hover:scale-105 transition-transform duration-200"
        >
          <ChevronDown className="w-4 h-4 mr-2" />
          More Files
        </Button>
      </div>
    </div>
  );
};