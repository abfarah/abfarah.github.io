'use client';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-20 animate-float-slow"></div>
      </div>

      <div className="max-w-5xl w-full relative">
        {/* Asymmetric layout */}
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left side - Text content */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-block">
              <div className="relative">
                <h1 className="text-6xl md:text-8xl font-black mb-2 relative z-10">
                  <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default text-gray-900 dark:text-white">
                    Abdul
                  </span>
                  <br />
                  <span className="inline-block hover:rotate-2 transition-transform duration-300 cursor-default bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                    Farah
                  </span>
                </h1>
                {/* Decorative squiggle */}
                <svg
                  className="absolute -bottom-2 left-0 w-48 h-8 text-purple-500 dark:text-purple-400 opacity-50"
                  viewBox="0 0 200 20"
                >
                  <path
                    d="M0,10 Q25,0 50,10 T100,10 T150,10 T200,10"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
                Software Engineer
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              Building{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">creative</span>{' '}
              solutions to complex problems.{' '}
              <span className="inline-block hover:rotate-12 transition-transform cursor-default">
                ✨
              </span>
            </p>

            {/* Fun stats/badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full border-2 border-purple-300 dark:border-purple-700 transform hover:rotate-2 transition-transform">
                <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                  🚀 Full Stack
                </span>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 px-4 py-2 rounded-full border-2 border-cyan-300 dark:border-cyan-700 transform hover:-rotate-2 transition-transform">
                <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                  💡 Problem Solver
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Decorative element */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-64 h-64">
              {/* Animated circles */}
              <div className="absolute inset-0 border-4 border-purple-300 dark:border-purple-700 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 border-4 border-dashed border-cyan-300 dark:border-cyan-700 rounded-full animate-spin-reverse"></div>
              <div className="absolute inset-8 border-4 border-pink-300 dark:border-pink-700 rounded-full animate-pulse"></div>

              {/* Center emoji/icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-7xl animate-bounce-slow">👨‍💻</span>
              </div>

              {/* Orbiting elements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg animate-orbit shadow-lg flex items-center justify-center text-2xl">
                ⚡
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
