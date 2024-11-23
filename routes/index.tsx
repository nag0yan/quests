export default function Home() {
  return (
    <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <div class="flex flex-col items-center justify-center">
          <div class="relative flex items-center justify-center gap-2 py-4">
            <div class="h-[1px] w-12 bg-gradient-to-r from-transparent to-gray-300">
            </div>
            <p class="text-lg md:text-xl text-center relative">
              <span class="text-gray-600">あなたのうちなる</span>
              <span class="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                欲求
              </span>
              <span class="text-gray-600">を知ろう</span>
            </p>
            <div class="h-[1px] w-12 bg-gradient-to-l from-transparent to-gray-300">
            </div>
          </div>

          <p class="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 animate-gradient tracking-wide">
            Quest
          </p>
          <a
            href="/survey"
            class="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-lg font-bold rounded-lg shadow-[0_0_20px_rgba(66,153,225,0.5)] hover:shadow-[0_0_25px_rgba(66,153,225,0.6)] transform hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
          >
            <span class="relative z-10">診断を始める</span>
            <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000">
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
