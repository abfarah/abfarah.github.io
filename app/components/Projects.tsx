'use client';

interface Project {
  color: string;
  description: string;
  emoji: string;
  link?: string;
  technologies: string[];
  title: string;
}

const projects: Project[] = [
  {
    color: 'from-pink-500 to-rose-500',
    description:
      'A full-stack web application built with modern technologies. Features real-time updates and responsive design.',
    emoji: '🎨',
    link: '#',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    title: 'Project One',
  },
  {
    color: 'from-cyan-500 to-blue-500',
    description:
      'Mobile-first application with seamless user experience. Includes authentication and data visualization.',
    emoji: '📱',
    link: '#',
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Express'],
    title: 'Project Two',
  },
  {
    color: 'from-violet-500 to-purple-500',
    description:
      'Open-source tool for developers. Built to improve productivity and streamline workflows.',
    emoji: '🚀',
    link: '#',
    technologies: ['Python', 'FastAPI', 'Docker', 'Redis'],
    title: 'Project Three',
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-4 relative" id="projects">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-cyan-200 to-blue-200 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Creative heading */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-2">
              Cool Stuff <span className="inline-block animate-wiggle">🎯</span>
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 opacity-30 blur-sm"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
            Things I&apos;ve built for fun and profit
          </p>
        </div>

        {/* Creative grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 h-full border-2 border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-2xl">
                {/* Gradient accent on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}
                ></div>

                {/* Emoji badge */}
                <div className="relative mb-4">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}
                  >
                    <span className="text-3xl">{project.emoji}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white relative">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed relative">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4 relative">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:scale-110 transition-transform cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.link && (
                  <a
                    href={project.link}
                    className={`inline-flex items-center gap-2 font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent group-hover:gap-3 transition-all relative`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View Project
                    <span className="inline-block group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                )}

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gray-300 dark:border-gray-600 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gray-300 dark:border-gray-600 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Fun CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Want to see more?{' '}
            <a
              href="https://github.com/abfarah"
              className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-purple-500 hover:to-pink-500 transition-all"
              rel="noopener noreferrer"
              target="_blank"
            >
              Check out my GitHub
            </a>{' '}
            <span className="inline-block hover:scale-125 transition-transform">✨</span>
          </p>
        </div>
      </div>
    </section>
  );
}
