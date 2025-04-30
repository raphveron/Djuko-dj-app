export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Djuko Web App
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Modern Stack</h2>
            <ul className="space-y-2">
              <li>Next.js 15+</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>ESLint + Prettier</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="space-y-2">
              <li>App Router</li>
              <li>Dark Mode Support</li>
              <li>Strict TypeScript</li>
              <li>Modular Structure</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
