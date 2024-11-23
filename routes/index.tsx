import { surveyQuestions } from "../data/surveyQuestions.ts";
import Survey from "../islands/Survey.tsx";

export default function Home() {
  return (
    <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <Survey questions={surveyQuestions} />
      </div>
    </div>
  );
}
