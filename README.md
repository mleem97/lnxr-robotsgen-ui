# Robots.txt Studio 🤖

[![License: MIT](https://img.shields.Drawing.co.uk/badge/License-MIT-yellow.svg)](LICENSE)
[![React 19](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev)
[![Next.js](https://img.shields.io/badge/Next.js-16-black.svg)](https://nextjs.org)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8.svg)](https://tailwindcss.com)
[![Package Manager: pnpm](https://img.shields.io/badge/pnpm-11-orange.svg)](https://pnpm.io)

A premium, standalone React and Next.js component designed for integration into custom UI systems and admin dashboards. Create, test, and generate SEO-compliant `robots.txt` files directly in your client application with zero backend dependencies.

---

## Key Features

*   **Interactive Rules Builder**: Manage multiple user-agent groups, add allow/disallow paths, and customize `Crawl-delay` seconds.
*   **AI Scraper Blocking**: Prevent AI agents (e.g., `GPTBot`, `ChatGPT-User`, `ClaudeBot`, `Google-Extended`, `PerplexityBot`) from harvesting content with a single click.
*   **Path Validation Engine**: A client-side path validation runner implementing standard matching rules (longest match wins, allow over disallow on equal length).
*   **Robots.txt Importer**: Paste any raw `robots.txt` text to parse its directives, sitemaps, and crawlers instantly.
*   **Presets Support**: Instantly load setups like *Allow All*, *Disallow All*, *Block Staging/Dev*, or *SEO Balanced*.
*   **Real-time Preview & Exports**: Real-time code previews with quick "Copy to Clipboard" and download options.
*   **Zero Package Overhead**: The component requires no external npm UI or icon libraries; all icons are inline SVGs.

---

## Installation

### Method 1: Automatic Installer (Recommended)
Create the file and fetch the source code directly using this command in your project directory:

```bash
mkdir -p components && curl -sS https://raw.githubusercontent.com/mleem97/lnxr-robotsgen-ui/main/components/RobotsTxtGenerator.tsx -o components/RobotsTxtGenerator.tsx
```

### Method 2: Manual Installation
1.  Create a file at `components/RobotsTxtGenerator.tsx` in your codebase.
2.  Copy the code from the [RobotsTxtGenerator.tsx](file:///components/RobotsTxtGenerator.tsx) file in this repository.
3.  Ensure your project uses **Tailwind CSS** for styling.

---

## Usage

Import and render the component anywhere in your Next.js or React layout:

```tsx
import RobotsTxtGenerator from "@/components/RobotsTxtGenerator";

export default function AdminSettings() {
  const handleExport = (robotsTxtContent: string) => {
    console.log("Updated robots.txt:", robotsTxtContent);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">SEO Controls</h1>
      <RobotsTxtGenerator onExport={handleExport} />
    </div>
  );
}
```

### Component Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `initialSitemaps` | `string[]` | `['https://example.com/sitemap.xml']` | Set of default sitemap URLs loaded initially. |
| `initialGroups` | `RuleGroup[]` | *(Default SEO rules)* | Standard list of crawler directive groups loaded initially. |
| `onExport` | `(robotsTxt: string) => void` | `undefined` | Callback fired whenever the generated text content updates. |

---

## Local Development

Ensure you have **pnpm** installed.

### 1. Launch Next.js dev server:
```bash
pnpm dev
```
Open [http://localhost:3001](http://localhost:3001) in your browser.

### 2. Verify code linting:
```bash
pnpm lint
```

### 3. Compile local build:
```bash
pnpm build
```

---

## Contributing & Sponsors

Please refer to the following documents for further development:
*   [CONTRIBUTING.md](file:///CONTRIBUTING.md) — Coding styles and directory architecture.
*   [LICENSE](file:///LICENSE) — MIT open-source license.
*   [FUNDING.md](file:///FUNDING.md) — Sponsorship channels and business support.
*   [SPONSORS.md](file:///SPONSORS.md) — Thanking our financial backers.
*   [CONTRIBUTORS.md](file:///CONTRIBUTORS.md) — Authors and maintainers list.

---

**Meyer Media - Marvin Lee Meyer**  
*Built as a Standalone Element for React.*
