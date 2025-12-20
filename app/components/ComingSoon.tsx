export default function ComingSoon() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">🚀 Coming Soon</h1>

        <p className="text-gray-300 text-lg mb-8">
          This website is currently under construction. We&apos;re working hard to bring you
          something awesome!
        </p>

        <div className="text-sm text-gray-400">© {new Date().getFullYear()} abfarah.com</div>
      </div>
    </main>
  );
}
