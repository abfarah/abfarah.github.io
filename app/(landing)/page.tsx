import Hero from '../components/Hero';
import Projects from '../components/Projects';
import SocialLinks from '../components/SocialLinks';
import ThemeToggle from '../components/ThemeToggle';
import WorkExperience from '../components/WorkExperience';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-gray-950 dark:via-purple-950/20 dark:to-pink-950/20 transition-colors duration-500">
      <ThemeToggle />
      <Hero />
      <SocialLinks />
      <Projects />
      <WorkExperience />
      <footer className="relative py-12 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30"></div>
        <div className="relative">
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            Made with <span className="inline-block animate-pulse text-red-500">❤️</span> and{' '}
            <span className="inline-block hover:rotate-12 transition-transform">☕</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Abdul Farah. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
