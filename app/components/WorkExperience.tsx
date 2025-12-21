'use client';

interface Experience {
  color: string;
  company: string;
  description: string;
  icon: string;
  period: string;
  role: string;
}

const experiences: Experience[] = [
  {
    color: 'from-purple-500 to-pink-500',
    company: 'Tech Company',
    description:
      'Leading development of scalable web applications. Architecting solutions and mentoring junior developers.',
    icon: '🎯',
    period: '2022 - Present',
    role: 'Senior Software Engineer',
  },
  {
    color: 'from-blue-500 to-cyan-500',
    company: 'Startup Inc',
    description:
      'Built core features for the main product. Worked across the full stack with React and Node.js.',
    icon: '💼',
    period: '2020 - 2022',
    role: 'Software Engineer',
  },
  {
    color: 'from-orange-500 to-red-500',
    company: 'Digital Agency',
    description:
      'Developed client websites and web applications. Collaborated with design teams to implement pixel-perfect UIs.',
    icon: '🚀',
    period: '2018 - 2020',
    role: 'Junior Developer',
  },
];

export default function WorkExperience() {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="experience">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/50 to-transparent dark:via-purple-950/20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative">
        {/* Section heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
            My Journey <span className="inline-block animate-bounce-slow">🗺️</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Where I&apos;ve been and what I&apos;ve done
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-300 via-pink-300 to-orange-300 dark:from-purple-700 dark:via-pink-700 dark:to-orange-700 transform -translate-x-1/2 rounded-full"></div>

          {/* Timeline items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col gap-8`}
              >
                {/* Content card */}
                <div className="md:w-5/12 w-full">
                  <div
                    className={`group relative bg-white dark:bg-gray-800 rounded-3xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 ${
                      index % 2 === 0 ? 'md:hover:translate-x-2' : 'md:hover:-translate-x-2'
                    } hover:scale-105`}
                  >
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`}
                    ></div>

                    {/* Period badge */}
                    <div className="absolute -top-3 right-6">
                      <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-full shadow-lg">
                        {exp.period}
                      </span>
                    </div>

                    <div className="relative">
                      <div className="flex items-start gap-4 mb-4">
                        {/* Icon */}
                        <div
                          className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-transform`}
                        >
                          {exp.icon}
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-1">
                            {exp.company}
                          </h3>
                          <h4
                            className={`text-lg font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                          >
                            {exp.role}
                          </h4>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Decorative corner */}
                    <div
                      className={`absolute ${index % 2 === 0 ? 'right-4' : 'left-4'} bottom-4 w-16 h-16 border-2 ${index % 2 === 0 ? 'border-r-0 border-b-0' : 'border-l-0 border-b-0'} border-gray-200 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity`}
                    ></div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 items-center justify-center">
                  <div
                    className={`w-6 h-6 bg-gradient-to-br ${exp.color} rounded-full border-4 border-white dark:border-gray-950 shadow-lg animate-pulse-slow`}
                  ></div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>

          {/* End marker */}
          <div className="hidden md:flex justify-center mt-16">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl shadow-xl animate-bounce">
                ⭐
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
