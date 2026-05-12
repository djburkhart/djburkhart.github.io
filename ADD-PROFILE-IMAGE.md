# Adding Your Profile Picture

## Quick Instructions

**Save your profile image as:**
```
blog/static/images/profile.jpg
```

## Step-by-Step

1. **Locate your profile image** (the one you shared in the chat)

2. **Save it with the exact filename:** `profile.jpg`

3. **Place it in the directory:**
   ```
   blog/static/images/profile.jpg
   ```

4. **The image will automatically appear when users type:**
   ```bash
   photo
   ```
   in the terminal

## Image Specifications

**Recommended:**
- Format: JPG, PNG, or WebP
- Size: 300-500px width (will auto-scale)
- Aspect Ratio: Square or portrait orientation works best
- File size: Under 500KB for fast loading

**Current Image:**
- The image you provided shows you in a plaid shirt with glasses
- It will be displayed with a green terminal-style border
- Hover effect with glowing green shadow

## How It Works

When users type `photo` in the terminal:

```
visitor@danielburkhart:~$ photo

╔════════════════════════════════════════╗
║                                        ║
║      [Your profile picture]            ║
║                                        ║
╚════════════════════════════════════════╝

Daniel J. Burkhart
AI Development Specialist | Founder, Resolvora LLC
```

## Testing

After adding the image:

1. Reload the site: http://localhost:1313/
2. Type `photo` in the terminal
3. Your profile picture should appear with a green border

## Fallback

If the image is not found, users will see:
- An ASCII art portrait placeholder
- A message: "Image not found. Please add profile.jpg to /static/images/"

## Alternative Locations

You can also add the image to use it elsewhere:
- About page
- Blog author bio
- Footer
- Anywhere in your content with: `![Daniel](/images/profile.jpg)`

---

**File Path:** `blog/static/images/profile.jpg`
**Command to view:** `photo`
**Styling:** Terminal-themed with green border and glow effect
