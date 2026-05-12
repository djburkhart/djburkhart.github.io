# Social Links & Contact Update Summary

## ✅ All Updates Complete

### Updated Information

**Email:** `me@danielburkhart.com`  
**GitHub:** `https://github.com/djburkhart`  
**LinkedIn:** `https://www.linkedin.com/in/danieljamesburkhart/`  
**Twitter/X:** `https://x.com/DannyBurkhart`

---

## 📝 Files Updated

### Configuration
- ✅ `hugo.toml` - Site-wide social links and email

### Terminal Commands
- ✅ `themes/terminal-portfolio/static/js/terminal.js`
  - Updated `contact` command
  - Updated `resume` command
  - Added new `photo` command

### Content Pages
- ✅ `content/about.md` - Connect section
- ✅ `content/projects.md` - Collaboration section
- ✅ `content/blog/welcome.md` - Comments section
- ✅ `content/blog/ai-project-management.md` - Contact section

---

## 🎨 New Features

### 1. Fullscreen Terminal (Homepage)
The terminal now acts like a maximized window:
- Fills entire viewport
- No rounded corners
- No shadow (looks built-in)
- Full height terminal window

**CSS Changes:**
```css
/* Maximized terminal for homepage */
.terminal-container:not(.page) {
  max-width: 100%;
  height: 100vh;
  border-radius: 0;
  box-shadow: none;
}
```

### 2. Photo Command
New terminal command to display your profile picture:

```bash
visitor@danielburkhart:~$ photo
```

Shows:
- Profile picture with terminal border
- Green glowing effect
- Your name and title below
- ASCII art fallback if image missing

### 3. Updated Social Links
All social links now point to correct profiles:
- GitHub: djburkhart
- LinkedIn: danieljamesburkhart  
- Twitter/X: DannyBurkhart
- Email: me@danielburkhart.com

---

## 🎯 How to Test

### Terminal Commands
```bash
# Open terminal
http://localhost:1313/

# Try these commands:
contact    # See updated email and social links
photo      # View profile picture (after adding image)
help       # See all available commands
```

### Fullscreen Terminal
- Visit homepage - should fill entire screen
- No padding, rounded corners, or shadow
- Looks like native terminal application

### Content Pages
- Check `/about` - updated connect section
- Check `/projects` - updated collaboration section  
- Check `/blog/welcome` - updated contact info
- Check `/blog/ai-project-management` - updated email

---

## 📸 Profile Image

**Next Step:** Add your profile image

**Location:** `blog/static/images/profile.jpg`

**Instructions:** See `ADD-PROFILE-IMAGE.md` for detailed steps

**Preview:** Type `photo` in terminal to see it

---

## 🎨 Visual Changes

### Before (Homepage):
```
┌─────────────────────────────┐
│   Terminal (centered box)   │
│   with padding & shadow      │
└─────────────────────────────┘
```

### After (Homepage):
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Terminal (fullscreen/max)   ┃
┃ edge-to-edge, no decorations┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

**Note:** Content pages still use windowed terminal look

---

## ✅ Verification Checklist

- [x] Email updated to me@danielburkhart.com
- [x] GitHub updated to github.com/djburkhart
- [x] LinkedIn updated to linkedin.com/in/danieljamesburkhart
- [x] Twitter updated to x.com/DannyBurkhart
- [x] Terminal is fullscreen on homepage
- [x] Photo command added
- [x] All content pages updated
- [ ] Profile image added (manual step)

---

## 🚀 Current Status

**Site URL:** http://localhost:1313/  
**Terminal:** Fullscreen/maximized ✅  
**Social Links:** Updated ✅  
**Email:** Updated ✅  
**Photo Command:** Ready (waiting for image) ⏳

---

## 📱 Social Links Quick Reference

```javascript
const social = {
  email: "me@danielburkhart.com",
  github: "https://github.com/djburkhart",
  linkedin: "https://www.linkedin.com/in/danieljamesburkhart/",
  twitter: "https://x.com/DannyBurkhart"
};
```

All links are live in:
- Terminal `contact` command
- Hugo configuration
- About page
- Projects page
- Blog posts
