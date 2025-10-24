<!--
	README for: resume-creator
	Purpose: Clear, user-friendly instructions for running, developing, and contributing to the project.
-->

# Resume Creator

A small React + Vite app to build and export simple resume/CV templates from user-provided data.

This repository provides a fast, client-side resume builder with live preview and image export (uses `html-to-image`). It's built with React, Vite and Tailwind CSS and includes a small UI component library under `src/components/ui` for reuse.

## Demo

- Live demo: (not provided) — you can run locally following the instructions below.
- Export options: download as PNG/SVG using the `html-to-image` integration or print to PDF from the browser.

## Features

- Live form-driven resume preview
- Multiple simple UI components (avatar, badge, button, date picker, inputs)
- Export resume to image (PNG/SVG)
- Responsive layout suitable for printing
- Built with performant tooling: Vite + React 18

## Tech stack

- React 18
- Vite
- Tailwind CSS
- html-to-image (export)
- date-fns (date handling)
- radix-ui primitives for accessibility

## Quick start (PowerShell)

Requirements:

- Node.js 18+ recommended
- pnpm (project includes a pnpm lockfile; `npm` or `yarn` should also work but examples use `pnpm`)

Install dependencies and run the dev server:

```powershell
# install (use pnpm if available)
pnpm install

# start dev server
pnpm dev
```

Open http://localhost:5173 in your browser (Vite default). If that port is taken, Vite will pick the next free port.

Build for production:

```powershell
pnpm build

# preview the production build locally
pnpm preview
```

Lint the project:

```powershell
pnpm lint
```

Notes: If you prefer `npm`, run `npm install` and use the scripts as `npm run dev`, `npm run build`, etc.

## Available scripts

These scripts come from `package.json` and should be up-to-date for this project:

- `dev` — start Vite dev server
- `build` — build production bundle with Vite
- `preview` — preview the built production bundle locally
- `lint` — run ESLint across the project

Use them with `pnpm <script>` or `npm run <script>`.

## Project structure

Key files and folders:

```
README.md                 # (this file)
index.html                # Vite entry
src/
	main.jsx                # app bootstrap
	App.jsx                 # top-level app
	components/             # main UI components (Display.jsx, Form.jsx)
	components/ui/          # small reusable UI primitives (avatar, button, input...)
	contexts/               # React context providers (InfoContext)
	lib/                    # utilities (utils.js)
public/                   # static assets
package.json              # scripts & deps
pnpm-lock.yaml            # pnpm lockfile
vite.config.js            # Vite config
```

## How to use the app

1. Run the dev server.
2. Open the app and fill the resume form.
3. Preview updates live on the right (or in the display area).
4. Use the export button to download an image of the resume, or choose print-to-PDF from the browser.

Tips:

- Keep text blocks concise for best print layout
- Use the avatar upload and badges to highlight important info
- Use the date picker to set date ranges for experience items

## Contributing

Contributions are welcome. A suggested flow:

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/my-change`
3. Install dependencies and run the app locally
4. Add tests or small focused changes
5. Create a pull request describing what you changed and why

Please open an issue for larger changes or design questions.

## Tests

This project does not currently include an automated test suite. Adding unit tests (e.g., with Vitest + Testing Library) is a good improvement.

## Troubleshooting

- Port conflicts: Vite will ask to use another port; accept or kill the process occupying the port.
- Missing dependencies: run `pnpm install` (or `npm install`) and retry.
- Export issues: ensure the resume nodes are fully visible in the DOM before export; the export uses `html-to-image` which has some limitations with webfonts and external resources.

## Security & Privacy

All data is stored in-memory in the browser (no server). If you decide to add a backend or persistence, secure any personal data appropriately.

## License

No license file is included in this repository. If you want this project to be open source, add a `LICENSE` (for example, MIT) to the repo.

## Acknowledgements

- Built with Vite and Tailwind CSS
- Uses Radix UI primitives and `html-to-image` for exports

---

If you'd like, I can also:

- add a demo GIF or screenshots into `public/` and reference them here
- add a LICENSE file (MIT) and update the repo
- add a small CONTRIBUTING.md with contribution checklist

If you want any of those, tell me which and I will add them.
