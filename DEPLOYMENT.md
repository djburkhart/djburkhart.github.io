# Deployment Guide for danielburkhart.com

## Quick Start

Your Hugo site is now running locally at **http://localhost:1313/**

## What's Included

✅ Professional portfolio homepage  
✅ About page highlighting AI development expertise  
✅ Projects page showcasing Resolvora LLC and ForwardCast  
✅ Blog with 2 initial posts:
  - Welcome post
  - "The Future of AI in Project Management"
✅ PaperMod theme (clean, fast, responsive)  
✅ GitHub Actions workflow for automated deployment  
✅ Complete documentation

## Next Steps

### 1. Add Your Profile Image

Place your profile photo at:
```
blog/static/images/profile.jpg
```

### 2. Update Social Links

Edit `blog/hugo.toml` and update the social media URLs:
- GitHub: https://github.com/YOUR_USERNAME
- LinkedIn: https://linkedin.com/in/YOUR_PROFILE
- Email: your@email.com

### 3. Deploy to GitHub Pages (Recommended)

1. Create a new GitHub repository named `danielburkhart.com`

2. Push your code:
```bash
cd blog
git add .
git commit -m "Initial commit: Hugo site for danielburkhart.com"
git remote add origin https://github.com/YOUR_USERNAME/danielburkhart.com.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"
   - The site will auto-deploy on every push!

4. Add custom domain (optional):
   - In Settings → Pages → Custom domain, enter: `danielburkhart.com`
   - Update DNS settings with your domain registrar:
     - Add A records pointing to GitHub Pages IPs
     - Or add a CNAME record pointing to `YOUR_USERNAME.github.io`

### 4. Alternative Deployments

**Netlify:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd blog
netlify deploy --prod
```

**Vercel:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd blog
vercel --prod
```

## Local Development

### Start the dev server:
```bash
cd blog
hugo server -D
```

### Create a new blog post:
```bash
hugo new blog/my-new-post.md
```

### Build for production:
```bash
hugo --minify
```
Output will be in `blog/public/`

## Content Organization

```
blog/content/
├── _index.md              # Homepage
├── about.md               # About page
├── projects.md            # Projects showcase
└── blog/
    ├── _index.md          # Blog landing page
    ├── welcome.md         # Welcome post
    └── ai-project-management.md
```

## Configuration

Main config file: `blog/hugo.toml`

Key settings:
- `baseURL`: Your domain
- `title`: Site title
- `[params]`: Theme customization
- `[menu]`: Navigation menu
- `[[params.socialIcons]]`: Social media links

## Support

For Hugo documentation: https://gohugo.io/documentation/  
For PaperMod theme: https://github.com/adityatelange/hugo-PaperMod

## Current Status

🟢 Site is live at http://localhost:1313/  
🟢 All pages created and configured  
🟢 Ready for deployment  

Stop the dev server with Ctrl+C in the terminal.
