# Deployment Guide

## Recommended Platform: **Vercel**

### Why Vercel?
- ✅ **Built for Next.js** (same company)
- ✅ **Zero configuration** deployment
- ✅ **Automatic HTTPS**
- ✅ **Global CDN**
- ✅ **Free tier** perfect for portfolios
- ✅ **Automatic preview deployments** for PRs
- ✅ **Environment variables** management
- ✅ **Custom domains** included

---

## Pre-Deployment Checklist

### 1. Update Personal Information

**Required Updates:**

- [ ] **Social Media URLs** ([Hero.tsx:105-122](src/components/Hero.tsx))
  - Replace `https://github.com` with your GitHub
  - Replace `https://linkedin.com` with your LinkedIn
  - Replace `your.email@example.com` with your email

- [ ] **Metadata URLs** ([layout.tsx:32, 40](src/app/layout.tsx))
  - Replace `https://sabbiarraftasahib.com` with your actual domain

- [ ] **Structured Data** ([StructuredData.tsx:9, 11-14](src/components/StructuredData.tsx))
  - Update site URL
  - Update GitHub/LinkedIn URLs

- [ ] **Project Live URL** ([Projects.tsx](src/components/Projects.tsx))
  - Update Khali's Beauty project URL (currently `#`)

### 2. Create OG Image

**Requirements:**
- Size: 1200x630px
- Format: PNG or JPG
- Location: `/public/og-image.png`
- Content: Your name + "Front-end Developer" + portfolio screenshot

**Tools:**
- [Canva](https://canva.com) (free templates)
- [Figma](https://figma.com) (design from scratch)
- [OG Image Generator](https://og-image.vercel.app/)

### 3. Environment Variables

**Create `.env.local` from template:**
```bash
cp .env.example .env.local
```

**Fill in actual values:**
```env
NEXT_PUBLIC_SITE_URL=https://your-actual-domain.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-username
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/your-username
NEXT_PUBLIC_EMAIL=your.email@example.com
```

---

## Deployment Steps (Vercel)

### Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings ✓

3. **Configure Environment Variables:**
   - In Vercel dashboard → Settings → Environment Variables
   - Add all variables from `.env.local`
   - Set for "Production" environment

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Done! 🎉

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

---

## Custom Domain Setup

### 1. Purchase Domain
- **Recommended:** Namecheap, Google Domains, Cloudflare
- **Suggested domains:**
  - `sabbiarraftasahib.com`
  - `sabbisahib.dev`
  - `sabbiarrafta.me`

### 2. Configure DNS (in Vercel)

1. Go to project → Settings → Domains
2. Add your domain
3. Vercel provides DNS records
4. Add records to your domain provider:

**For subdomain (www):**
```
CNAME www cname.vercel-dns.com
```

**For apex domain:**
```
A @ 76.76.21.21
```

5. Wait for DNS propagation (5-60 minutes)

---

## Post-Deployment

### 1. Test Checklist

- [ ] Site loads at Vercel URL
- [ ] All sections visible
- [ ] Animations work
- [ ] Links functional (social, email, anchor links)
- [ ] Mobile responsive
- [ ] OG image displays in social shares
- [ ] Custom domain works (if configured)

### 2. Performance Audit

Run Google Lighthouse:
```bash
# Install Lighthouse CLI
npm i -g lighthouse

# Test production URL
lighthouse https://your-site.vercel.app --view
```

**Expected Scores:**
- Performance: 95-100
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 95-100

### 3. SEO Setup

**Submit to Search Engines:**

1. **Google Search Console:**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add property → Enter your domain
   - Verify ownership (DNS method)
   - Submit sitemap: `https://your-domain.com/sitemap.xml`

2. **Bing Webmaster Tools:**
   - Go to [bing.com/webmasters](https://www.bing.com/webmasters)
   - Add site
   - Verify ownership

### 4. Analytics (Optional)

**Google Analytics 4:**
```bash
# Add to .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Then create analytics component:**
```tsx
// src/components/Analytics.tsx
import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  );
}
```

---

## Continuous Deployment

**Automatic deployments on push:**

1. Every commit to `main` → production deployment
2. Every PR → preview deployment
3. Vercel comments on PRs with preview URL

**Branch strategy:**
```bash
main → production (sabbiarraftasahib.com)
dev → preview (dev.sabbiarraftasahib.vercel.app)
```

---

## Monitoring & Maintenance

### Update Dependencies (Monthly)
```bash
npm outdated
npm update
npm run build  # Test locally
git commit -am "Update dependencies"
git push  # Auto-deploys
```

### Check Vercel Logs
- Dashboard → Deployments → Select deployment → Runtime Logs
- Monitor errors, performance

### Update Content
- Projects: Add new projects to `Projects.tsx`
- Experience: Add new roles to `Experience.tsx`
- Skills: Update tech stack in `Skills.tsx`

---

## Rollback (If Needed)

**Via Vercel Dashboard:**
1. Go to Deployments
2. Find previous working deployment
3. Click "..." → Promote to Production

**Via CLI:**
```bash
vercel rollback
```

---

## Performance Budget

**Target Metrics:**
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.8s
- Cumulative Layout Shift (CLS): < 0.1
- Total Bundle Size: < 200KB

**Current optimizations:**
- Static generation (SSG)
- Image optimization (AVIF/WebP)
- Font preloading (Geist)
- Code splitting (automatic)
- Compression (gzip/brotli)

---

## Support & Resources

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support:** [vercel.com/support](https://vercel.com/support)

---

## Quick Commands Reference

```bash
# Local development
npm run dev

# Production build test
npm run build
npm start

# Deploy to Vercel
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs [deployment-url]
```

---

**Your portfolio is production-ready! 🚀**

All code is optimized, accessible, and follows best practices. Just update personal URLs and deploy.
