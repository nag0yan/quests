import ArrowLeft from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/arrow-left.tsx";
import Check from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/check.tsx";
import { Question } from "../data/surveyQuestions.ts";
import { Signal } from "https://esm.sh/v135/@preact/signals@1.2.2/X-ZS8q/dist/signals.js";

interface SurveyConfirmationProps {
  username: Signal<string>;
  questions: Question[];
  answers: Record<number, string>;
  onEdit: () => void;
  onSubmit: () => void;
}

export default function SurveyConfirmation({
  username,
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

        <p class="text-gray-500 text-sm mb-4 mx-auto">
          最後に、あなたの名前を教えてください。
        </p>
        <div class="flex items-center gap-4 mb-8">
          <label for="username" class="text-gray-700"></label>
          <input
            id="username"
            type="text"
            class="w-full py-2 px-4 bg-gray-100 text-center text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
            onChange={(e: any) => {
              username.value = e.target!.value;
            }}
          />
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
