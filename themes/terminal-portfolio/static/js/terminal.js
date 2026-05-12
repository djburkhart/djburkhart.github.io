// Terminal Portfolio - Interactive Command Line
// Created for Daniel J. Burkhart

(function() {
    'use strict';

    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');
    const promptText = document.querySelector('.terminal-prompt')?.textContent || 'visitor@danielburkhart.com:~$';

    let commandHistory = [];
    let historyIndex = -1;

    // Command definitions
    const commands = {
        help: {
            description: 'Display available commands',
            execute: () => {
                return `
<div class="output-success">Available Commands:</div>
<div class="output-list">
    <div class="output-list-item"><strong>about</strong> - Learn about Daniel and his expertise in AI development</div>
    <div class="output-list-item"><strong>projects</strong> - View Resolvora LLC and ForwardCast</div>
    <div class="output-list-item"><strong>blog</strong> - Read technical blog posts</div>
    <div class="output-list-item"><strong>skills</strong> - Display technical skills and expertise</div>
    <div class="output-list-item"><strong>experience</strong> - Show professional experience</div>
    <div class="output-list-item"><strong>contact</strong> - Get contact information and social links</div>
    <div class="output-list-item"><strong>photo</strong> - Display profile picture</div>
    <div class="output-list-item"><strong>resume</strong> - Download resume (PDF)</div>
    <div class="output-list-item"><strong>whoami</strong> - Display current user info</div>
    <div class="output-list-item"><strong>ls</strong> - List available sections</div>
    <div class="output-list-item"><strong>clear</strong> - Clear the terminal screen</div>
    <div class="output-list-item"><strong>help</strong> - Show this help message</div>
</div>
<div class="output-info">Tip: Use arrow keys to navigate command history</div>
                `;
            }
        },

        about: {
            description: 'About Daniel Burkhart',
            execute: () => {
                return `
<div class="output-success">About Daniel J. Burkhart</div>
<div class="output-text">
I'm a developer specializing in <strong>AI development</strong> and building
intelligent software products that solve real operational problems.

<strong>Role:</strong> Founder, Resolvora LLC
<strong>Products:</strong> ForwardCast (project delivery platform), DNSsecured (DNS security stack)
<strong>Focus:</strong> Multi-tenant SaaS, AI-assisted workflows, security tools

<strong>Expertise:</strong>
  • Machine Learning & AI-assisted features
  • Multi-tenant SaaS architecture
  • DNS and email security
  • Go and TypeScript/React development
  • Production Kubernetes deployment

<a href="/about">Read more →</a>
</div>
                `;
            }
        },

        projects: {
            description: 'View projects',
            execute: () => {
                return `
<div class="output-success">Resolvora LLC Projects</div>
<div class="output-text">
<strong>1. ForwardCast</strong> (app.forwardcast.io)
   Project delivery platform with AI-assisted planning and finance tools.

   • Multi-tenant SaaS (dedicated customer workspaces)
   • AI draft suggestions for project scoping
   • P&L and financial forecasting
   • Gantt, Kanban, calendar views
   • Stripe billing + PWA + iOS app
   • Production: Kubernetes + PostgreSQL

<strong>2. DNSsecured</strong>
   DNS security analysis stack in Go (library + HTTP service).

   • DNSSEC, DANE/TLSA, SPF/DKIM/DMARC validation
   • NS redundancy + TLS certificate posture
   • Embeddable library or standalone service
   • Traffic-steering and DNSSEC rollover planning
   • Caddy-style CLI + HTTP API

<a href="/projects">View detailed specs →</a>
</div>
                `;
            }
        },

        skills: {
            description: 'Display technical skills',
            execute: () => {
                return `
<div class="output-success">Technical Skills & Expertise</div>
<div class="output-text">
<strong>Product Development:</strong>
  • Multi-tenant SaaS architecture
  • Progressive Web Apps (PWA)
  • Mobile apps (Capacitor/iOS)
  • Payment integration (Stripe)
  • Kubernetes deployment

<strong>Programming Languages:</strong>
  • Go (DNS security, high-performance services)
  • TypeScript/JavaScript (React, Node.js)
  • Python (AI/ML, data analysis)
  • SQL (PostgreSQL)

<strong>Frameworks & Tools:</strong>
  • React + Vite
  • Node.js serverless APIs
  • Go standard library
  • Kubernetes + Docker
  • Cloudflare DNS

<strong>Specializations:</strong>
  • DNS and email security (DNSSEC, SPF/DKIM/DMARC)
  • AI-assisted planning and recommendations
  • Library-first architecture design
  • Production SaaS deployment
  • Billing and multi-tenancy
</div>
                `;
            }
        },

        experience: {
            description: 'Show professional experience',
            execute: () => {
                return `
<div class="output-success">Professional Experience</div>
<div class="output-text">
<strong>Founder - Resolvora LLC</strong>
2020 - Present

  • Built and deployed ForwardCast (multi-tenant project delivery platform)
  • Developed DNSsecured (DNS security analysis stack in Go)
  • Architected Kubernetes-based SaaS infrastructure
  • Integrated Stripe billing, auth, and customer provisioning
  • Shipped production PWA + iOS mobile app

<strong>Software Developer & AI Specialist</strong>
2018 - Present

  • Full-stack development (Go, TypeScript/React, Node.js)
  • DNS and email security implementation
  • AI-assisted planning features
  • Multi-tenant architecture design
  • Production deployment and operations

<a href="/about">View full experience →</a>
</div>
                `;
            }
        },

        blog: {
            description: 'Read blog posts',
            execute: () => {
                return `
<div class="output-success">Latest Blog Posts</div>
<div class="output-text">
Recent articles on AI development, software engineering, and project management:

  • <a href="/blog/ai-project-management">The Future of AI in Project Management</a>
  • <a href="/blog/welcome">Welcome to My Blog</a>

<a href="/blog">View all posts →</a>
</div>
                `;
            }
        },

        contact: {
            description: 'Get contact information',
            execute: () => {
                return `
<div class="output-success">Contact Information</div>
<div class="output-text">
<strong>Email:</strong> me@danielburkhart.com
<strong>Website:</strong> https://danielburkhart.com

<strong>Connect with me:</strong>
  • <a href="https://github.com/djburkhart" target="_blank">GitHub (@djburkhart)</a>
  • <a href="https://www.linkedin.com/in/danieljamesburkhart/" target="_blank">LinkedIn</a>
  • <a href="https://x.com/DannyBurkhart" target="_blank">X/Twitter (@DannyBurkhart)</a>

Feel free to reach out for collaborations, opportunities, or just to chat
about AI, software development, or innovative projects!
</div>
                `;
            }
        },

        photo: {
            description: 'Display profile picture',
            execute: () => {
                return `
<div class="output-success">Profile Picture</div>
<div class="profile-picture-container">
    <div class="ascii-border">
╔════════════════════════════════════════╗
║                                        ║
║      [PROFILE IMAGE LOADING...]        ║
║                                        ║
╚════════════════════════════════════════╝
    </div>
    <img src="/images/profile.jpg" alt="Daniel J. Burkhart" class="profile-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
    <div class="profile-fallback" style="display:none;">
        <pre class="ascii-portrait">
    ████████████████
  ██░░░░░░░░░░░░░░██
██░░░░▓▓░░░░▓▓░░░░░░██
██░░░░▓▓░░░░▓▓░░░░░░██
██░░░░░░░░░░░░░░░░░░██
  ██░░░░▀▀▀▀▀▀░░░░██
    ██░░░░░░░░░░██
      ████████████
        </pre>
        <p class="output-info">Image not found. Please add profile.jpg to /static/images/</p>
    </div>
</div>
<div class="output-text">
<strong>Daniel J. Burkhart</strong>
AI Development Specialist | Founder, Resolvora LLC
</div>
                `;
            }
        },

        resume: {
            description: 'Download resume',
            execute: () => {
                return `
<div class="output-info">Opening resume...</div>
<div class="output-text">
Resume download not yet configured. Contact me directly for my full CV.
<a href="mailto:me@danielburkhart.com">Email me →</a>
</div>
                `;
            }
        },

        whoami: {
            description: 'Display current user',
            execute: () => {
                return `
<div class="output-text">visitor</div>
<div class="output-info">You are browsing Daniel Burkhart's portfolio terminal</div>
                `;
            }
        },

        ls: {
            description: 'List available sections',
            execute: () => {
                return `
<div class="output-success">Available sections:</div>
<div class="output-text">
<span style="color: #00ff41;">about/</span>
<span style="color: #00ff41;">projects/</span>
<span style="color: #00ff41;">blog/</span>
<span style="color: #00ccff;">contact.txt</span>
<span style="color: #00ccff;">resume.pdf</span>
<span style="color: #00ccff;">README.md</span>
</div>
                `;
            }
        },

        clear: {
            description: 'Clear terminal screen',
            execute: () => {
                terminalOutput.innerHTML = '';
                return null;
            }
        },

        echo: {
            description: 'Echo text to terminal',
            execute: (args) => {
                return `<div class="output-text">${args.join(' ')}</div>`;
            }
        },

        date: {
            description: 'Display current date and time',
            execute: () => {
                const now = new Date();
                return `<div class="output-text">${now.toString()}</div>`;
            }
        },

        pwd: {
            description: 'Print working directory',
            execute: () => {
                return `<div class="output-text">/home/visitor/danielburkhart</div>`;
            }
        }
    };

    // Easter eggs and aliases
    const aliases = {
        '?': 'help',
        'h': 'help',
        'list': 'ls',
        'dir': 'ls',
        'cls': 'clear',
        'exit': () => '<div class="output-info">Nice try! Use Ctrl+W to close the tab 😉</div>',
        'sudo': () => '<div class="output-error">Permission denied. You\'re not root here! 🔒</div>',
        'rm': () => '<div class="output-error">rm: cannot remove: Permission denied (also, please don\'t!) 😅</div>',
        'cat': (args) => {
            if (args[0] === 'README.md') {
                return `<div class="output-text">
# Daniel J. Burkhart

AI Development Specialist | Founder of Resolvora LLC

Type 'help' to get started or 'about' to learn more.
</div>`;
            }
            return `<div class="output-error">cat: ${args[0]}: No such file or directory</div>`;
        },
        'vim': () => '<div class="output-info">Loading vim... Just kidding! Try the \'blog\' command instead 😄</div>',
        'emacs': () => '<div class="output-info">Emacs? Really? Try \'help\' instead 😉</div>',
        'nano': () => '<div class="output-info">nano is too easy. Type \'help\' for available commands 😊</div>'
    };

    // Execute command
    function executeCommand(input) {
        const parts = input.trim().split(' ');
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1);

        // Check aliases first
        if (aliases[cmd]) {
            if (typeof aliases[cmd] === 'function') {
                return aliases[cmd](args);
            }
            return executeCommand(aliases[cmd]);
        }

        // Check commands
        if (commands[cmd]) {
            return commands[cmd].execute(args);
        }

        // Command not found
        return `<div class="output-error">Command not found: ${cmd}. Type 'help' for available commands.</div>`;
    }

    // Add output to terminal
    function addOutput(command, output) {
        const commandLine = document.createElement('div');
        commandLine.className = 'command-line';
        commandLine.innerHTML = `
            <span class="prompt">${promptText}</span>
            <span class="command">${escapeHtml(command)}</span>
        `;
        terminalOutput.appendChild(commandLine);

        if (output) {
            const outputLine = document.createElement('div');
            outputLine.className = 'output-line';
            outputLine.innerHTML = output;
            terminalOutput.appendChild(outputLine);
        }

        // Scroll to bottom
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    // Escape HTML
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Handle input
    if (terminalInput) {
        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const command = terminalInput.value.trim();

                if (command) {
                    commandHistory.unshift(command);
                    historyIndex = -1;

                    const output = executeCommand(command);
                    addOutput(command, output);
                }

                terminalInput.value = '';
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    terminalInput.value = commandHistory[historyIndex];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (historyIndex > 0) {
                    historyIndex--;
                    terminalInput.value = commandHistory[historyIndex];
                } else {
                    historyIndex = -1;
                    terminalInput.value = '';
                }
            } else if (e.key === 'Tab') {
                e.preventDefault();
                const input = terminalInput.value.toLowerCase();
                const matches = Object.keys(commands).filter(cmd => cmd.startsWith(input));

                if (matches.length === 1) {
                    terminalInput.value = matches[0];
                } else if (matches.length > 1) {
                    const output = `<div class="output-text">${matches.join('  ')}</div>`;
                    addOutput(input, output);
                }
            }
        });

        // Auto-focus input
        document.addEventListener('click', (e) => {
            if (!e.target.closest('a')) {
                terminalInput.focus();
            }
        });

        terminalInput.focus();
    }

    // Show welcome message on load
    setTimeout(() => {
        if (terminalInput) {
            addOutput('', `<div class="output-info">Type 'help' to see available commands</div>`);
        }
    }, 500);
})();
