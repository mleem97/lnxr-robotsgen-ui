import RobotsTxtGenerator from "@/components/RobotsTxtGenerator";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Background Decoratives */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute top-[-5%] right-[10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      {/* Decorative Grid Line background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />

      {/* Navigation Header */}
      <header className="border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-7 h-7 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="8" x2="12" y2="4" />
              <circle cx="12" cy="3" r="1" fill="currentColor" />
              <line x1="2" y1="13" x2="5" y2="13" />
              <line x1="19" y1="13" x2="22" y2="13" />
              <rect x="5" y="8" width="14" height="11" rx="2" />
              <circle cx="9" cy="12" r="1" fill="currentColor" />
              <circle cx="15" cy="12" r="1" fill="currentColor" />
              <line x1="9" y1="16" x2="15" y2="16" />
            </svg>
            <span className="font-bold tracking-tight text-white text-sm">Robots.txt generator</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mleem97/lnxr-robotsgen-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
        
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Reusable UI Component
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
            SEO Robots.txt Generator
          </h1>
          <p className="text-sm md:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A single, standalone React component equipped with rule builders, quick presets, crawl delaying, AI agent blockers, raw file imports, and a spec-compliant path testing engine.
          </p>
        </section>

        {/* The Generator Component */}
        <section className="relative z-10 animate-fade-in">
          <RobotsTxtGenerator />
        </section>

        {/* Documentation / Integration Guide */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-zinc-900">
          
          {/* Card 1: How to Integrate */}
          <div className="bg-zinc-900/40 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-5">
            <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              Integration in custom UI
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              This component is designed to be completely standalone. All SVG icons and helper functions (including the robots.txt matching logic) are located inside one file. You can simply copy `RobotsTxtGenerator.tsx` into your components folder and install standard Tailwind CSS.
            </p>
            <div className="relative">
              <pre className="bg-zinc-950 p-4 rounded-2xl text-[10px] font-mono text-zinc-300 overflow-x-auto border border-zinc-800/80 leading-relaxed">
{`// Importing the component in Next.js or React
import RobotsTxtGenerator from "./components/RobotsTxtGenerator";

export default function SettingsPage() {
  const handleExport = (content: string) => {
    console.log("Generated Robots.txt:", content);
  };

  return (
    <div className="p-6">
      <RobotsTxtGenerator onExport={handleExport} />
    </div>
  );
}`}
              </pre>
            </div>
          </div>

          {/* Card 2: Technical Specifications */}
          <div className="bg-zinc-900/40 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-5">
            <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              Path Validation Engine
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Robots.txt rule matching uses specific priority parameters. Our validation engine implements a client-side matching script mimicking Google's standard parser:
            </p>
            <ul className="space-y-3.5 text-xs text-zinc-400">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                <span>
                  <strong>Wildcard matching:</strong> The parser translates `*` patterns to wildcards and anchored patterns (`$`) into regular expression bounds.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                <span>
                  <strong>Pattern specificity:</strong> If multiple rules match a path, the <strong>longest pattern matching string</strong> wins. For example, `Disallow: /admin/` beats `Allow: /`.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                <span>
                  <strong>Allow priority:</strong> When an Allow rule and Disallow rule both match and have equal length, the <strong>Allow</strong> rule takes precedence.
                </span>
              </li>
            </ul>
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-8 text-center text-xs text-zinc-500 mt-auto">
        <div className="max-w-7xl mx-auto px-4">
          <p>© Copyright 2026 Meyer Media - Marvin Lee Meyer - Built as a Standalone Element for React.</p>
        </div>
      </footer>
    </div>
  );
}
