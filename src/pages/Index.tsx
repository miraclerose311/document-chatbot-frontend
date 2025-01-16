import { FileUploadSection } from '@/components/FileUploadSection';
import { QuestionsList } from '@/components/QuestionsList';
import { AnswerSection } from '@/components/AnswerSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto flex space-x-6">
        <FileUploadSection />
        <QuestionsList />
        <AnswerSection />
      </div>
    </div>
  );
};

export default Index;