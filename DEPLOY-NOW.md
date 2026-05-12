# 🚀 Deploy to GitHub - Final Steps

## ✅ What's Done

Your site is fully built and committed to git:
- ✅ All content updated with non-developer explanations
- ✅ Social links and email configured
- ✅ Terminal theme fully customized
- ✅ Git repository initialized
- ✅ Initial commit created
- ✅ Remote repository added

## 📤 Complete the Deployment

You need to push the code to GitHub. Here are three ways to do it:

---

### Option 1: GitHub CLI (Recommended)

```bash
# Login to GitHub
gh auth login

# Push to repository
cd "/c/Projects/danielburkhart.com/blog"
git push -u origin main
```

Follow the prompts to authenticate with GitHub.

---

### Option 2: Using Git with Personal Access Token

```bash
# Create a Personal Access Token (PAT) at:
# https://github.com/settings/tokens
# Scopes needed: repo

# Push using the token
cd "/c/Projects/danielburkhart.com/blog"
git push https://YOUR_TOKEN@github.com/djburkhart/djburkhart.github.io.git main
```

---

### Option 3: Using GitHub Desktop or Git Credential Manager

```bash
# Just try to push - a login dialog should appear
cd "/c/Projects/danielburkhart.com/blog"
git push -u origin main
```

Windows will prompt for your GitHub credentials.

---

## 🌐 After Pushing

### 1. Enable GitHub Pages

1. Go to: https://github.com/djburkhart/djburkhart.github.io/settings/pages
2. **Source:** Select "GitHub Actions"
3. The site will build automatically

### 2. Add Custom Domain (Optional)

1. In Pages settings, add: `danielburkhart.com`
2. Update DNS with your domain registrar:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153

   Type: CNAME
   Name: www
   Value: djburkhart.github.io
   ```

### 3. Wait for Deployment

- GitHub Actions will build the site (takes ~1-2 minutes)
- Check status: https://github.com/djburkhart/djburkhart.github.io/actions
- Your site will be live at: **https://djburkhart.github.io**
- Or with custom domain: **https://danielburkhart.com**

---

## 📸 Don't Forget Your Profile Picture!

Before the site goes live, add your profile image:

```bash
# Save your profile picture as:
static/images/profile.jpg

# Then commit and push:
git add static/images/profile.jpg
git commit -m "Add profile picture"
git push origin main
```

---

## ✅ Verification Checklist

After deployment:

- [ ] Push code to GitHub
- [ ] Enable GitHub Pages with Actions
- [ ] Wait for first build to complete
- [ ] Visit your site (djburkhart.github.io)
- [ ] Test terminal commands (help, about, projects, blog, contact)
- [ ] Add profile.jpg and push again
- [ ] Test photo command
- [ ] (Optional) Configure custom domain

---

## 🎯 Quick Push Commands

```bash
# Navigate to project
cd "/c/Projects/danielburkhart.com/blog"

# Authenticate with GitHub (choose one method above)
# Then push:
git push -u origin main

# Watch the deployment:
# https://github.com/djburkhart/djburkhart.github.io/actions
```

---

## 🔧 Troubleshooting

**"Authentication failed"**
- Use `gh auth login` for GitHub CLI
- Or create a Personal Access Token
- Or use Git Credential Manager

**"Repository not found"**
- Verify the repository exists: https://github.com/djburkhart/djburkhart.github.io
- Check you have write access

**"Build failed"**
- Check Actions tab for error details
- Verify hugo.toml configuration
- Ensure themes are properly committed

---

## 📊 What Happens Next

1. **You push** → GitHub receives the code
2. **GitHub Actions** → Builds the Hugo site automatically
3. **Deployment** → Site goes live on GitHub Pages
4. **Your site** → Available at djburkhart.github.io

**Build time:** ~1-2 minutes  
**Updates:** Automatic on every push to main branch

---

## 🎉 You're Almost There!

Just run these commands:

```bash
cd "/c/Projects/danielburkhart.com/blog"
gh auth login              # Authenticate
git push -u origin main    # Deploy!
```

Then visit: **https://djburkhart.github.io** 🚀

---

**Repository:** https://github.com/djburkhart/djburkhart.github.io  
**Status:** ✅ Ready to push  
**Next Step:** Authenticate and push to GitHub
