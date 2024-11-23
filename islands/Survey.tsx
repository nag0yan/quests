import { useSignal } from "@preact/signals";
import ChevronLeft from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/chevron-left.tsx";
import ChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/chevron-right.tsx";
import { Question } from "../data/surveyQuestions.ts";
import SurveyConfirmation from "./SurveyConfirmation.tsx"

interface SurveyProps {
  questions: Question[];
}

export default function Survey({ questions }: SurveyProps) {
  const currentStep = useSignal(0);
  const answers = useSignal<Record<number, string>>({});
  const showOptions = useSignal(false);

  const currentQuestion = questions[currentStep.value];
  const hasAnsweredCurrent = Boolean(answers.value[currentQuestion.id]);
  const isLastQuestion = currentStep.value === questions.length - 1;
  const isConfirming = useSignal(false);

  const handleNext = () => {
    if (isLastQuestion && hasAnsweredCurrent) {
      isConfirming.value = true;
      return;
    }
    showOptions.value = false;
    setTimeout(() => {
      currentStep.value = Math.min(currentStep.value + 1, questions.length - 1);
      showOptions.value = true;
    }, 1000);
  };

  const handlePrevious = () => {
    showOptions.value = false;
    setTimeout(() => {
      currentStep.value = Math.max(currentStep.value - 1, 0);
      showOptions.value = true;
    }, 300);
  };

  const handleAnswer = (questionId: number, optionValue: string) => {
    answers.value = { ...answers.value, [questionId]: optionValue };
  };

  // 初期表示時のアニメーション
  if (!showOptions.value) {
    setTimeout(() => {
      showOptions.value = true;
    }, 1000);
  }

  const handleEdit = () => {
    throw new Error("Not implemented");
  }

  const handleSubmit = () => {
    throw new Error("Not implemented");
  }

  if (isConfirming.value) {
    return (
      <SurveyConfirmation
        questions={questions}
        answers={answers.value}
        onEdit={handleEdit}
        onSubmit={handleSubmit}></SurveyConfirmation>
    )
  }

  return (
    <div class="w-full max-w-2xl mx-auto">
      {/* Progress bar */}
      <div class="mb-8 flex justify-between items-center">
        <div class="text-sm text-gray-500">
          質問 {currentStep.value + 1} / {questions.length}
        </div>
        <div class="h-2 flex-1 mx-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            class="h-full bg-blue-600 transition-all duration-500"
            style={{
              width: `${((currentStep.value + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Question card */}
      <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 class="text-xl font-medium mb-6 transition-all duration-700 ease-out translate-y-4">
          {currentQuestion.question}
        </h2>

        <div class="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <div
              key={option.id}
              class={`transform transition-all duration-500 ease-out ${
                showOptions.value
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <button
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
                class={`w-full text-left p-4 rounded-lg transition-colors ${
                  answers.value[currentQuestion.id] === option.value
                    ? "bg-blue-100 text-blue-700 border-2 border-blue-500"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                {option.text}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div class="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentStep.value === 0}
          class={`px-6 py-2 rounded-lg flex items-center gap-2 ${
            currentStep.value === 0
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <ChevronLeft class="w-4 h-4" />
          前の質問
        </button>

        {hasAnsweredCurrent && (
          <button
            onClick={handleNext}
            class="px-6 py-2 rounded-lg flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700"
          >
            {isLastQuestion ? "回答を確認" : "次の質問"}
            <ChevronRight class="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
