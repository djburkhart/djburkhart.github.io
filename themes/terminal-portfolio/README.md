# Terminal Portfolio Theme

A custom Hugo theme featuring an interactive command-line interface, inspired by classic terminal emulators and developer tools.

## Features

✨ **Interactive Terminal Interface**
- Real command-line experience in the browser
- Command history with arrow key navigation
- Tab completion for commands
- Customizable prompt and ASCII art

🎨 **Modern Terminal Styling**
- Monospace fonts (Fira Code, Source Code Pro)
- Classic terminal color scheme (green on black)
- Terminal window with realistic header buttons
- Smooth animations and transitions

⌨️ **Built-in Commands**
- `help` - Display all available commands
- `about` - Learn about Daniel and AI expertise
- `projects` - View Resolvora LLC and ForwardCast
- `blog` - Read technical blog posts
- `skills` - Display technical skills
- `experience` - Show professional experience
- `contact` - Get contact information
- `resume` - Download resume
- `whoami` - Display current user
- `ls` - List available sections
- `clear` - Clear the terminal
- Plus more commands and Easter eggs!

📱 **Responsive Design**
- Full terminal experience on desktop
- Simplified mobile-friendly fallback
- Touch-friendly navigation on small screens

## Configuration

Configure in `hugo.toml`:

```toml
[params]
  terminalTitle = "daniel@burkhart ~ terminal"
  prompt = "visitor@danielburkhart:~$"
  welcomeText = "Your welcome message here"
  asciiArt = """
  Your ASCII art here
  """
```

## Customization

### Adding New Commands

Edit `themes/terminal-portfolio/static/js/terminal.js` and add to the `commands` object:

```javascript
commandName: {
    description: 'Command description',
    execute: (args) => {
        return `<div class="output-text">Your output here</div>`;
    }
}
```

### Styling

Modify `themes/terminal-portfolio/static/css/terminal.css` to change colors, fonts, or layout.

### ASCII Art

Update the `asciiArt` parameter in `hugo.toml` to change the welcome banner.

## File Structure

```
terminal-portfolio/
├── layouts/
│   ├── _default/
│   │   ├── baseof.html      # Base template
│   │   ├── single.html      # Single page template
│   │   └── list.html        # List page template
│   └── index.html           # Homepage with terminal
├── static/
│   ├── css/
│   │   └── terminal.css     # All styles
│   └── js/
│       └── terminal.js      # Terminal logic
└── theme.toml               # Theme metadata
```

## Commands with Easter Eggs

Try these for fun:
- `sudo` - Permission denied
- `rm` - Don't even think about it!
- `vim`, `emacs`, `nano` - Editor jokes
- `exit` - Nice try!
- `cat README.md` - Show README content

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Simplified fallback view

## Created By

Daniel J. Burkhart  
AI Development Specialist | Founder of Resolvora LLC

## License

MIT License
