# danielburkhart.com - Terminal Portfolio

A custom terminal-themed Hugo site showcasing Daniel J. Burkhart's portfolio as an AI Development Specialist and Founder of Resolvora LLC.

## 🎯 Features

- **Interactive Terminal Interface** - Command-line experience in the browser
- **Custom Commands** - Type `help` to see all available commands
- **AI Development Portfolio** - Showcasing expertise in AI and ML
- **Project Showcase** - Resolvora LLC and ForwardCast Project Management
- **Technical Blog** - Articles on AI, software development, and project management
- **Responsive Design** - Works on desktop and mobile devices

## 🚀 Quick Start

### Local Development

The Hugo server is currently running at **http://localhost:1313/**

To start the server manually:

```bash
cd blog
hugo server -D
```

### Using the Terminal Interface

On the homepage, you can type commands like:

- `help` - See all available commands
- `about` - Learn about Daniel
- `projects` - View projects (Resolvora, ForwardCast)
- `blog` - Read blog posts
- `skills` - Display technical skills
- `contact` - Get contact information
- `clear` - Clear the terminal

Use **arrow keys** to navigate command history and **Tab** for auto-completion!

## 📁 Project Structure

```
blog/
├── content/
│   ├── about.md              # About page
│   ├── projects.md           # Projects page
│   └── blog/                 # Blog posts
├── themes/
│   ├── terminal-portfolio/   # Custom terminal theme ⭐
│   └── PaperMod/            # Alternative theme
├── static/
│   └── images/              # Images and assets
└── hugo.toml                # Site configuration
```

## 🎨 Themes

### Current Theme: Terminal Portfolio (Custom)

A custom-built theme featuring an interactive terminal interface. Perfect for developer portfolios and tech-focused sites.

**Key Features:**
- Interactive command-line interface
- Real-time command execution
- Command history and tab completion
- Classic terminal styling
- Easter eggs and fun commands

**To customize the terminal:**
- Edit `hugo.toml` to change prompt, ASCII art, and welcome message
- Modify `themes/terminal-portfolio/static/js/terminal.js` to add new commands
- Update `themes/terminal-portfolio/static/css/terminal.css` for styling

### Alternative Theme: PaperMod

A clean, modern blog theme included as an alternative.

**To switch themes:**

Edit `hugo.toml` and change:
```toml
theme = 'terminal-portfolio'  # Current
# theme = 'PaperMod'          # Alternative
```

## 📝 Content Management

### Adding Blog Posts

Create a new post:

```bash
hugo new blog/my-new-post.md
```

Or manually create with frontmatter:

```markdown
---
title: "My Post Title"
date: 2026-05-12
draft: false
tags: ["AI", "development"]
categories: ["AI Development"]
---

Your content here...
```

### Editing Pages

- **About:** Edit `content/about.md`
- **Projects:** Edit `content/projects.md`
- **Homepage Terminal:** Edit parameters in `hugo.toml`

## 🛠️ Configuration

Main configuration in `hugo.toml`:

```toml
baseURL = 'https://danielburkhart.com/'
title = 'Daniel J. Burkhart'
theme = 'terminal-portfolio'

[params]
  description = "AI Development Specialist | Founder of Resolvora LLC"
  terminalTitle = "daniel@burkhart ~ terminal"
  prompt = "visitor@danielburkhart:~$"
  welcomeText = "Your custom welcome message"
  asciiArt = """
  Your ASCII art banner
  """
```

## 🌐 Deployment

### GitHub Pages (Recommended)

A GitHub Actions workflow is already configured at `.github/workflows/hugo.yml`

**Steps:**
1. Create a GitHub repository
2. Push your code
3. Enable GitHub Pages in repository settings (Source: GitHub Actions)
4. Site will auto-deploy on every push!

### Custom Domain

1. Add `danielburkhart.com` in GitHub Pages settings
2. Configure DNS with your registrar:
   - Add A records to GitHub Pages IPs
   - Or CNAME to `yourusername.github.io`

### Alternative Platforms

**Netlify:**
```bash
netlify deploy --prod
```

**Vercel:**
```bash
vercel --prod
```

## 🎯 Next Steps

1. ✅ Custom terminal theme created
2. ✅ Interactive commands implemented
3. ⬜ Add your profile photo to `static/images/profile.jpg`
4. ⬜ Update social media links in terminal commands
5. ⬜ Add more blog posts
6. ⬜ Deploy to production
7. ⬜ Configure custom domain

## 💡 Tips

- The terminal supports command history - use **arrow keys**
- Try **Tab** for command auto-completion
- Type `help` to discover all commands
- There are hidden Easter eggs - try commands like `sudo`, `vim`, `exit`
- On mobile, a simplified view is shown with direct navigation links

## 📄 Documentation

- **Theme Documentation:** `themes/terminal-portfolio/README.md`
- **Deployment Guide:** `DEPLOYMENT.md`
- **Hugo Documentation:** https://gohugo.io/documentation/

## 🔧 Customization

### Adding Terminal Commands

Edit `themes/terminal-portfolio/static/js/terminal.js`:

```javascript
commands = {
  mycommand: {
    description: 'My custom command',
    execute: () => {
      return `<div class="output-text">Output here</div>`;
    }
  }
}
```

### Changing Colors

Edit CSS variables in `themes/terminal-portfolio/static/css/terminal.css`:

```css
:root {
  --text-primary: #00ff41;    /* Green terminal text */
  --terminal-bg: #1a1f29;     /* Terminal background */
  /* ... more variables */
}
```

## 📞 Support

Created by **Daniel J. Burkhart**  
AI Development Specialist | Founder of Resolvora LLC

For Hugo help: https://gohugo.io/  
For theme issues: Check `themes/terminal-portfolio/README.md`

---

**Status:** 🟢 Site is live at http://localhost:1313/  
**Theme:** Terminal Portfolio (Custom)  
**Framework:** Hugo v0.161.1
