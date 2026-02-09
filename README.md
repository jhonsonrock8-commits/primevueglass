# PrimeVue Glass Website - Netlify Deployment

## 🚀 Quick Deploy to Netlify

### Method 1: Drag & Drop (Easiest)

1. **Prepare Files**
   - Download all files in this folder
   - Keep them together in one folder

2. **Deploy to Netlify**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop the entire folder
   - Your site will be live in seconds!

3. **Add Custom Domain**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain name
   - Follow DNS configuration instructions

### Method 2: Git Deployment (Recommended for Updates)

1. **Create Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub/GitLab**
   ```bash
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

3. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Netlify will auto-detect settings from `netlify.toml`

### Method 3: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**
   ```bash
   netlify deploy --prod
   ```

## 📁 Files Included

```
.
├── index.html          # Main HTML file
├── styles.css          # All styles
├── script.js           # JavaScript functionality
├── netlify.toml        # Netlify configuration
└── README.md           # This file
```

## 🔧 Configuration

### Update Contact Information

Replace the following in **ALL files**:

**Phone Number:**
- Find: `9512112123`
- Replace with: Your phone number

**WhatsApp Number:**
- Find: `919512112123` (with country code)
- Replace with: Your WhatsApp number with country code

**Email:**
- Find: `primevueglass@gmail.com`
- Replace with: Your email address

**Business Name:**
- Find: `PrimeVue Glass`
- Replace with: Your business name

**Location:**
- Find: `Bangalore`
- Replace with: Your city/location

### Update Images

Images are loaded from CDN URLs. To use your own images:

1. Upload images to Netlify or image hosting service
2. Replace image URLs in `index.html`:
   - Product images (4 images)
   - Gallery images (6 images)

## 🌐 Custom Domain Setup

### Netlify DNS (Recommended)

1. **In Netlify Dashboard:**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., `yourdomain.com`)

2. **Update Nameservers at Domain Registrar:**
   - Netlify will provide nameservers
   - Update your domain registrar's DNS settings
   - Wait 24-48 hours for propagation

### External DNS

1. **Get Netlify Site URL:**
   - Example: `your-site-name.netlify.app`

2. **Add DNS Records at Your Domain Provider:**
   - **A Record:** `185.199.108.153`
   - **A Record:** `185.199.109.153`
   - **A Record:** `185.199.110.153`
   - **A Record:** `185.199.111.153`
   - **CNAME Record:** `www` → `your-site-name.netlify.app`

3. **Verify in Netlify:**
   - Go to Domain management
   - Click "Verify DNS configuration"

## 🔒 SSL Certificate

Netlify provides **free HTTPS** automatically:
- SSL certificate is auto-generated
- Takes 1-2 minutes after DNS is configured
- Auto-renews before expiration

## ✨ Features

✅ **Fully Responsive** - Works on all devices
✅ **WhatsApp Integration** - 6 contact points
✅ **SEO Optimized** - Meta tags included
✅ **Fast Loading** - Optimized performance
✅ **Mobile Menu** - Hamburger navigation
✅ **Smooth Animations** - Professional feel
✅ **Contact Form** - Sends to WhatsApp
✅ **Testimonials Carousel** - Auto-rotating reviews
✅ **Image Gallery** - Hover effects
✅ **Floating WhatsApp Button** - Always visible

## 📞 Support

For deployment issues:
- [Netlify Documentation](https://docs.netlify.com)
- [Netlify Community](https://answers.netlify.com)

## 📝 License

All Rights Reserved © 2026 PrimeVue Glass
