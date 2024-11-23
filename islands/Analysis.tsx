import { questionAnalysis } from "../data/analysis.ts";
import { Question } from "../data/surveyQuestions.ts";

interface AnalysisDisplayProps {
  answers: Record<number, string>;
  questions: Question[];
}

export default function AnalysisDisplay({ answers }: AnalysisDisplayProps) {
  return (
    <div class="w-full max-w-2xl mx-auto space-y-12 p-6">
      {Object.entries(answers).map(([questionId, answer]) => {
        const qNumber = parseInt(questionId);
        const question =
          questionAnalysis[qNumber as keyof typeof questionAnalysis];

        return (
          <div key={questionId} class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-800">
              {question.question}
            </h3>

            <div class="bg-blue-50 p-4 rounded-lg">
              <p class="font-medium text-blue-800 mb-2">
                あなたの選択: 「{answer}」
              </p>
              <p class="text-gray-700 leading-relaxed">
                {question.choices[answer as keyof typeof question.choices]}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
