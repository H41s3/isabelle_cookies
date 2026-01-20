## Isabelle Cookies – Home Bakery Landing Page 🍪

A single-page landing site for **Isabelle Cookies**, a new online home bakery.  
Built to introduce the business, showcase featured treats, and make it easy for people to order by phone or social.

### 🧰 Technologies

- **Next.js 14** (App Router, static export)
- **TypeScript**
- **Tailwind CSS**
- **React Server Components**
- **Dark / light theme toggle**

### ✨ Features

- **Single-page layout** focused on introducing the business
- **Hero section** with clear call‑to‑actions (view offerings, order online)
- **Featured offerings grid** highlighting popular cookies and pastries
- **About / Our Story** section tailored for a starting home bakery
- **Contact section** with phone number and Instagram link for orders
- **Responsive design** that looks good on mobile and desktop

### 📌 The Process

This project started as a full blog, then was simplified into a one‑page site  
to better match a new home bakery that just needs an introduction and easy ordering.

- Kept only the sections that matter most: **Hero**, **Offerings**, **About**, **Contact**
- Turned old sub‑pages (`/about`, `/blog`, `/find-us`) into redirects back to the homepage
- Switched all navigation to smooth‑scrolling anchors (`/#about`, `/#offers`, `/#contact`)
- Simplified cards and copy so it reads like a business landing page, not a blog

### 📥 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/H41s3/cookie_blog.git
   cd cookie_blog
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### ▶️ Running the Project

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open `http://localhost:3000` in your browser.

### 📦 Production Build

```bash
npm run build
npm run export   # static files will be in the out/ directory
```

You can deploy the contents of the `out/` folder to any static hosting (Netlify, Vercel, cPanel, etc.).

### 👀 Preview

![Isabelle Cookies landing page preview](./public/preview.gif)

- A **hero banner** welcoming visitors to Isabelle Cookies with two main buttons  
- A **Featured Offerings** section showing 3 cards with images, tags, and descriptions  
- An **Our Story** block describing how the home bakery started  
- A **Contact / Order Now** panel with the home‑kitchen location, phone, and Instagram link  

---

Built with ❤️ for Isabelle Cookies –  
*“Every cookie tells a story, and every story deserves to be shared.”* 🍪✨
