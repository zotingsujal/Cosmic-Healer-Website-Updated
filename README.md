# Cosmic Healer by Dr. Dipenti Merchant

A luxury, high-converting website for **Cosmic Healer by Dr. Dipenti Merchant**, offering personalised astrology, numerology, tarot, Vastu, and holistic spiritual guidance based in Santacruz West, Mumbai and online worldwide.

---

## Tech Stack & Architecture

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (with custom `@theme` variables)
- **Typography**: Cormorant Garamond (editorial serif headings) + Plus Jakarta Sans (body)
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO & Structured Data**: Built-in OpenGraph metadata and Schema.org `HealthAndBeautyBusiness` JSON-LD

---

## Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to view the application with instant hot reload.

### 3. Production Build
```bash
npm run build
```
Generates an optimized, minified production build in the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## Project Structure

```text
├── index.html              # HTML entry with SEO, Google Fonts & JSON-LD schema
├── metadata.json           # AI Studio applet metadata
├── netlify.toml            # Netlify zero-config deployment settings
├── package.json            # Dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration with @/* alias
├── vercel.json             # Vercel zero-config single-page app rewrites
├── vite.config.ts          # Vite build and plugin configurations
├── public/                 # Static assets served at root / on live production
│   └── images/             # All live site images (logo.jpg, logo.svg, hero.jpg, sanctuary.jpg)
├── src/
│   ├── main.tsx            # React application entry point
│   ├── App.tsx             # Root component assembling all sections
│   ├── index.css           # Global Tailwind CSS and animation keyframes
│   ├── assets/
│   │   └── images/         # High-resolution branding and visual assets
│   ├── data/
│   │   └── content.ts      # Business data, services, testimonials, hours & FAQs
│   └── components/
│       ├── Navbar.tsx            # Sticky navigation with brand emblem logo
│       ├── Hero.tsx              # Atmospheric hero with proposition & CTAs
│       ├── TrustStrip.tsx        # Credential markers (Est. 2018, Mumbai, Global)
│       ├── About.tsx             # Sanctuary visual & Dr. Dipenti Merchant biography
│       ├── Services.tsx          # 9 core guidance disciplines with modal triggers
│       ├── FeaturedCTA.tsx       # Emotional reflection call-to-action
│       ├── WhyUs.tsx             # 6 key pillars of the practice
│       ├── HowItWorks.tsx        # 3-step consultation timeline
│       ├── Testimonials.tsx      # Automatic smooth side-scrolling carousel
│       ├── GoogleReviewBadge.tsx # Google review trust section
│       ├── LocationSection.tsx   # Vikas Center address, map & operating hours
│       ├── ContactSection.tsx    # Consultation lead-generation form
│       ├── FAQSection.tsx        # Accordion answering core client queries
│       ├── FinalCTA.tsx          # Majestic concluding call-to-action
│       ├── Footer.tsx            # Multi-column footer with brand emblem
│       ├── ConsultationModal.tsx # Fast booking pop-up modal
│       └── MobileActionBar.tsx   # Sticky mobile call & booking action bar
```

---

## Easy Deployment Anywhere

### Deploying to Vercel
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In the [Vercel Dashboard](https://vercel.com/new), import the repository.
3. Vercel automatically detects the **Vite** preset:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. The included `vercel.json` ensures all route requests resolve cleanly.

### Deploying to Netlify
1. Connect your repository in the [Netlify Dashboard](https://app.netlify.com/).
2. The included `netlify.toml` automatically sets:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
3. Click **Deploy Site**.

### Deploying to GitHub Pages or Any Static Web Server
1. Run `npm run build`.
2. Upload or deploy the contents of the generated `dist/` directory directly to any static host (Cloudflare Pages, AWS S3, GitHub Pages, Firebase Hosting, Nginx, or Apache).
