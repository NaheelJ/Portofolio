# Naheel J - Full Stack Flutter Developer Portfolio 💻🚀

A premium, high-performance personal portfolio website built to showcase 2+ years of professional software development experience. Designed with a sleek, minimalist dark theme, immersive fluid 3D background animations, and native browser rendering integrations.

![Portfolio Preview](./public/app-logo.svg) <!-- You can eventually replace this with a full screenshot -->

## 🌟 Key Features

*   **Fluid Topographic Background**: A custom, high-performance interactive grid pattern computing wave physics via vanilla JavaScript `requestAnimationFrame` and HTML5 Canvas.
*   **3D Scroll Mechanics**: Native CSS 3D Transforms (`perspective`, `translateZ`) to create an immersive "tunnel-flying" depth illusion as you scroll down the page.
*   **Dynamic Counting Stats**: Smooth, performant scroll-triggered counters built using `framer-motion` hooks (`useMotionValue`, `useTransform`).
*   **Glassmorphism Styling**: Beautifully blurred `<div className="glass">` cards intersecting seamlessly with the animated background ecosystem.
*   **Serverless Contact Form**: Natively hooked straight into **Firebase Firestore v11** bypassing external email services. Guaranteed 100% uptime form logging straight into the database.
*   **PDF Wrapper Preservation**: An embedded `/resume.html` wrapper to ensure the browser strictly respects the custom `app-logo.svg` when launching native PDF readers.

## 🛠️ Technology Stack

*   **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/) ( blazing fast HMR & optimizations)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom CSS (`index.css`)
*   **UI Animations**: Vanilla Code + [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/) + Custom SVGs
*   **Database**: [Google Firebase (Firestore)](https://firebase.google.com/)
*   **Hosting**: [Firebase Hosting](https://firebase.google.com/docs/hosting)

## 📦 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/NaheelJ/Portofolio.git
   cd Portofolio
   ```
2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
   *(Note: `--legacy-peer-deps` is recommended due to strict React 18 versioning requirements in some Radix UI / Firebase dependencies).*
3. Set up Firebase:
   Update `src/lib/firebase.ts` with your exact Firebase Config keys to pipe the Contact Form directly to your Firestore Database.
   
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Navigate to `http://localhost:8080/` (or the port Vite outputs).

## 🚀 Deployment

This project is configured to automatically deploy as a Single Page App (SPA) to Firebase Hosting.

To deploy manually after testing locally:
```bash
npm run build
firebase deploy --only hosting
```

## 🧑‍💻 Author
**Naheel J**
- [LinkedIn](https://www.linkedin.com/in/naheel-j-90a0a9285/)
- [GitHub](https://github.com/NaheelJ)

---
*Built from the ground up for speed, aesthetics, and reliability.*
