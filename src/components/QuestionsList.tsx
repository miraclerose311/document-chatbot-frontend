import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const questions = [
  "What is the vacation policy?",
  "What is the work from home policy?",
  "How do I request time off?",
  "What are the office hours?",
  "What is the dress code?",
  "How do I submit expenses?",
  "What benefits are offered?",
  "How do I contact IT support?",
  "What is the performance review process?",
  "How do I access my pay stubs?",
];

export const QuestionsList = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const totalQuestions = 300;

  return (
    <div className="w-1/3 bg-white p-6 rounded-lg shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">All Questions ({totalQuestions})</h2>
      </div>

      <div className="space-y-1">
        {questions.map((question, index) => (
          <div
            key={index}
            className={`question-item ${
              selectedQuestion === index ? 'bg-primary/5 border-primary' : ''
            }`}
            onClick={() => setSelectedQuestion(index)}
          >
            <div className="flex items-center space-x-3">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                {index + 1}
              </span>
              <span className="text-sm">{question}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`pagination-button hover:scale-105 transition-transform duration-200 ${
              page === 1 ? 'bg-primary text-white' : 'text-gray-600'
            }`}
          >
            {page}
          </button>
        ))}
        <button className="pagination-button hover:scale-105 transition-transform duration-200">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};