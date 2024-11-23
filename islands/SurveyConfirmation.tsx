import Check from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/check.tsx";
import ArrowLeft from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/arrow-left.tsx";
import { Question } from "../data/surveyQuestions.ts";

interface SurveyConfirmationProps {
  questions: Question[];
  answers: Record<number, string>;
  onEdit: () => void;
  onSubmit: () => void;
}

export default function SurveyConfirmation({
  questions,
  answers,
  onEdit,
  onSubmit,
}: SurveyConfirmationProps) {
  const getAnswerText = (question: Question, answerValue: string) => {
    return question.options.find((opt) => opt.value === answerValue)?.text ||
      "";
  };

  return (
    <div class="w-full max-w-2xl mx-auto">
      <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 class="text-2xl font-semibold mb-6 text-center">回答内容の確認</h2>

        <div class="space-y-6 mb-8">
          {questions.map((question) => (
            <div key={question.id} class="border-b pb-4">
              <p class="font-medium text-gray-700 mb-2">
                {question.question}
              </p>
              <p class="text-blue-600 pl-4">
                {getAnswerText(question, answers[question.id])}
              </p>
            </div>
          ))}
        </div>

        <div class="space-y-4">
          <button
            onClick={onSubmit}
            class="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <Check class="w-5 h-5" />
            回答を送信する
          </button>

          <button
            onClick={onEdit}
            class="w-full py-3 px-4 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft class="w-5 h-5" />
            やりなおす
          </button>
        </div>
      </div>
    </div>
  );
}
