Next.js Internationalization (i18n) Demo
A simple yet complete demonstration of how to implement multi-language support in a Next.js application using the Pages Router and the next-intl library. This project is configured to support English (en), German (de), and Italian (it).

✨ Features
Multi-Language Support: Fully translated content for English, German, and Italian.

Static Site Generation (SSG): Uses getStaticProps to pre-render pages in all supported languages for optimal performance.

URL-Based Routing: Clean, SEO-friendly URLs for each language (e.g., /en, /de, /it).

Dynamic Language Switcher: A simple and effective component to switch between languages on the fly.

Modern Tech Stack: Built with Next.js, React, TypeScript, and styled with Tailwind CSS.

🚀 Getting Started
Follow these steps to get the project up and running on your local machine.

Prerequisites
Node.js (version 18.18.0 or later)

npm, yarn, or pnpm

Quick Start Guide
Clone the Repository
```
git clone [https://github.com/Chy-Zaber-Bin-Zahid/Localization.git](https://github.com/Chy-Zaber-Bin-Zahid/Localization.git)
```
Navigate to the Project Directory
```
cd Localization
```
Install Dependencies
```
npm install
```
Run the Development Server
```
npm run dev
```
Once the server is running, open your browser and navigate to http://localhost:3000.

🌍 How to Use the Localization
You can switch between languages in two ways:

Using the Language Switcher: Click on EN, DE, or IT at the top of the page.

Navigating Directly via URL:
```
English: http://localhost:3000/en

German: http://localhost:3000/de

Italian: http://localhost:3000/it
```

🛠️ Project Structure Overview
Here are the key files and directories related to the localization setup:
```
.
├── /components/
│   └── LanguageSwitcher.tsx   # The UI component for switching locales.
├── /messages/
│   ├── de.json                # German translation strings.
│   ├── en.json                # English translation strings.
│   └── it.json                # Italian translation strings.
├── /pages/
│   ├── _app.tsx               # Wraps the app with NextIntlClientProvider.
│   ├── _document.tsx          # Sets the lang attribute on the HTML tag.
│   └── index.tsx              # Main page, uses getStaticProps to load messages.
└── next.config.ts             # Configures Next.js i18n routing.
```

📜 Available Scripts
```
npm run dev: Starts the development server with Turbopack.

npm run build: Creates a production-ready build of the application.

npm run start: Starts the production server.

npm run lint: Runs ESLint to analyze the code for potential errors.
```