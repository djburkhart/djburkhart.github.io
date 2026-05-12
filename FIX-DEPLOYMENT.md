# Fix GitHub Pages Deployment - Quick Steps

## ✅ Branch Renamed Successfully

Your local branch has been renamed from `main` to `master`.

## 📤 Next Step: Push to GitHub

You need to authenticate and push. Run these commands:

### Option 1: Using GitHub CLI (Recommended)

```bash
cd "/c/Projects/danielburkhart.com/blog"

# Authenticate (opens browser)
gh auth login

# Push master branch
git push -u origin master

# Delete old main branch
git push origin --delete main
```

### Option 2: Using Git with Browser Auth

```bash
cd "/c/Projects/danielburkhart.com/blog"

# Push (Git Credential Manager will open browser)
git push -u origin master

# After successful push, delete old main
git push origin --delete main
```

### Option 3: Using Personal Access Token

```bash
cd "/c/Projects/danielburkhart.com/blog"

# Push with token (replace YOUR_TOKEN)
git push https://YOUR_TOKEN@github.com/djburkhart/djburkhart.github.io.git master

# Set upstream
git branch --set-upstream-to=origin/master master

# Delete old main
git push origin --delete main
```

---

## 🎯 What Happens Next

1. You authenticate and push
2. GitHub Actions automatically runs
3. Site deploys from `master` branch (no more errors!)
4. Your site goes live at: **https://djburkhart.github.io**

---

## 🔍 Check Deployment Status

After pushing, check the deployment:
- **Actions:** https://github.com/djburkhart/djburkhart.github.io/actions
- **Pages:** https://github.com/djburkhart/djburkhart.github.io/settings/pages

Build should complete in ~1-2 minutes.

---

## ⚡ Quick Command

Just run this:

```bash
cd "/c/Projects/danielburkhart.com/blog" && gh auth login && git push -u origin master && git push origin --delete main
```

Then visit: **https://djburkhart.github.io** 🚀
