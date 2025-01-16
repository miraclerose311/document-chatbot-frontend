import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { useState } from 'react';

export const AnswerSection = () => {
  const [isLiked, setIsLiked] = useState<boolean | null>(null);

  return (
    <div className="w-1/3 bg-white p-6 rounded-lg shadow-sm">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">username@gmail.com</span>
          <span className="text-sm text-gray-500">08:22</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">User's Question</h3>
          <p className="text-sm text-gray-600">
            What is the travel policy for family camping?
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Best Answer</h3>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 whitespace-pre-line">
            The company's travel policy for family camping includes:
            
            - Up to 5 days of paid time off for family camping trips
            - Reimbursement for camping equipment up to $200
            - Flexible work arrangements for longer trips
            - Special insurance coverage for outdoor activities
            
            Please refer to the HR portal for detailed information and forms.
          </p>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={() => setIsLiked(true)}
          className={`icon-button ${isLiked === true ? 'text-green-500' : ''}`}
        >
          <ThumbsUp className="w-5 h-5" />
        </button>
        <button
          onClick={() => setIsLiked(false)}
          className={`icon-button ${isLiked === false ? 'text-red-500' : ''}`}
        >
          <ThumbsDown className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};