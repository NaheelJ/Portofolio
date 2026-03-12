# Naheel J - Full Stack Flutter Developer Portfolio 💻🚀

A premium, high-performance personal portfolio website built to showcase my professional software development experience. Designed with a sleek, minimalist dark theme, immersive fluid 3D background animations, and native browser rendering integrations.

🔗 **Live Portfolio:** [https://naheel-j-portfolio.web.app/](https://naheel-j-portfolio.web.app/)

---

## 📦 What's Included

The project provides a fully responsive, single-page application (SPA) portfolio out-of-the-box, including:

*   **Fluid Topographic Background**: A custom, high-performance interactive grid pattern computing wave physics via vanilla JavaScript `requestAnimationFrame` and HTML5 Canvas.
*   **3D Scroll Mechanics**: Native CSS 3D Transforms (`perspective`, `translateZ`) to create an immersive "tunnel-flying" depth illusion as you scroll down the page.
*   **Dynamic Counting Stats**: Smooth, performant scroll-triggered counters built using `framer-motion` hooks (`useMotionValue`, `useTransform`).
*   **Glassmorphism Styling**: Beautifully blurred `<div className="glass">` cards intersecting seamlessly with the animated background ecosystem.
*   **Serverless Contact Form**: Natively hooked straight into **Firebase Firestore v11**, bypassing external email services. Guaranteed 100% uptime form logging directly into the database.
*   **PDF Viewer Integration**: An embedded `/resume.html` wrapper to cleanly display the native PDF resume without losing site branding and customized Tab Favicons.

---

## 🛠️ Tech Stack

*   **Frontend Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/) (blazing fast HMR & optimized production bundling)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) combined with Custom modular CSS (`index.css`)
*   **UI Animations**: Vanilla Code + [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/) + Custom SVGs
*   **Database**: [Google Firebase (Firestore)](https://firebase.google.com/) for form submissions
*   **Hosting**: [Firebase Hosting](https://firebase.google.com/docs/hosting)

---

## 🚀 How to Run (Local Development)

Follow these steps to run the portfolio locally on your machine:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Installation
Clone the repository and install the required dependencies:
```bash
git clone https://github.com/NaheelJ/Portofolio.git
cd Portofolio
npm install --legacy-peer-deps
```
*(Note: `--legacy-peer-deps` is required to resolve strict React 18 versioning rules in third-party libraries).*

### 3. Start the Development Server
Run Vite in development mode:
```bash
npm run dev
```
Navigate to `http://localhost:8080/` (or the exact port the Vite CLI prints out) to view the site in real-time.

---

## ☁️ How to Host (Deployment)

This project is fully configured to deploy as a Single Page App (SPA) seamlessly onto **Firebase Hosting**.

### 1. Setup Firebase CLI
If you haven't already, install the Firebase command-line tools:
```bash
npm install -g firebase-tools
firebase login
```

### 2. Connect Your Project
If not already initialized, connect the folder to your GCP/Firebase project:
```bash
firebase use --add
# Select your target Firebase project ID
```

### 3. Build for Production
Bundle and minify all React code, animations, and Tailwind configurations into the final `/dist` folder:
```bash
npm run build
```

### 4. Deploy Live
Push the compiled assets to Google's CDN servers:
```bash
firebase deploy --only hosting
```
Your site will instantly be globally accessible at your Firebase `web.app` URL (e.g., `https://portofolio-cea55.web.app/`).

---

## 🧑‍💻 Author
**Naheel J**
- [LinkedIn](https://www.linkedin.com/in/naheel-j-90a0a9285/)
- [GitHub](https://github.com/NaheelJ)
