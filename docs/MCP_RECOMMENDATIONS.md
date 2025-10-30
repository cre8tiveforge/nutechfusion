# MCP Server Recommendations for NuTech Fusion Website

## Overview
This document outlines recommended Model Context Protocol (MCP) servers and Claude Code tools/features that will enhance the development workflow for the NuTech Fusion website project.

## Currently Configured MCP Servers

### 1. Memory Server ✅
**Status:** Configured in `.clauderc`
**Purpose:** Persists conversation context across sessions
**Configuration:**
```json
{
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-memory"],
  "env": {
    "MEMORY_FILE_PATH": ".claude/memory/conversations.jsonl"
  }
}
```
**Use Cases:**
- Maintains project context between work sessions
- Remembers design decisions and rationale
- Tracks ongoing work and todos

### 2. Sequential Thinking Server ✅
**Status:** Configured in `.clauderc`
**Purpose:** Enhanced problem-solving for complex tasks
**Use Cases:**
- Breaking down complex redesign decisions
- Planning multi-step implementations
- Analyzing trade-offs in design choices

### 3. Filesystem Server ✅
**Status:** Configured in `.clauderc`
**Purpose:** Direct filesystem access
**Configuration:**
```json
{
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-filesystem",
    "d:\\ntfwebsite"
  ]
}
```

## Recommended Additional MCP Servers

### 4. n8n MCP Server 🔥 HIGH PRIORITY
**Installation:** Already available (mcp__n8n-faith, mcp__n8n-auto, mcp__n8n-n8n)
**Purpose:** Direct integration with n8n for workflow creation and management
**Why Essential for This Project:**
- Create and manage form submission workflows
- Test webhook endpoints
- Set up Telegram notifications
- Monitor workflow executions

**Use Cases:**
- Design the consultation form → Telegram workflow
- Test form submissions
- Debug workflow issues
- Create additional automation workflows

**Actions:**
```bash
# Already configured in your Claude Code setup
# Use the n8n MCP tools to:
# 1. Create workflow for form handling
# 2. Set up Telegram notifications
# 3. Test and debug the integration
```

### 5. Playwright/Chrome DevTools MCP Server 🔥 HIGH PRIORITY
**Installation:** Already available (mcp__playwright, mcp__chrome-devtools)
**Purpose:** Browser automation and visual testing
**Why Essential for This Project:**
- Test responsive design across viewports
- Verify animations and interactions
- Screenshot capture for documentation
- Test form submissions in real browser environment
- Debug dark/light mode implementation

**Use Cases:**
- Test the website in different screen sizes
- Capture screenshots of design iterations
- Verify scroll animations work properly
- Test form submission flow end-to-end

**Example Usage:**
```javascript
// Navigate and test the site
await browser.navigate('http://localhost:3000')
await browser.click('dark-mode-toggle')
await browser.screenshot('dark-mode-homepage.png')
await browser.fill('#consultation-form', formData)
await browser.submit()
```

### 6. Context7 MCP Server 📚 RECOMMENDED
**Installation:** Already available (mcp__context7)
**Purpose:** Up-to-date documentation for libraries and frameworks
**Why Useful:**
- Get latest Next.js documentation
- Find best practices for Framer Motion
- Discover new Tailwind CSS features
- Research UI component libraries

**Use Cases:**
```bash
# Get latest Next.js App Router docs
resolve-library-id "Next.js"
get-library-docs "/vercel/next.js" "App Router"

# Research Framer Motion animations
resolve-library-id "Framer Motion"
get-library-docs "/framer/motion" "scroll animations"

# Explore shadcn/ui components
resolve-library-id "shadcn/ui"
get-library-docs "/shadcn/ui" "dark mode"
```

### 7. IDE MCP Server 💡 USEFUL
**Installation:** Already available (mcp__ide)
**Purpose:** IDE integration for diagnostics and code execution
**Use Cases:**
- Get TypeScript diagnostics
- Execute code in Jupyter notebooks (if needed for data processing)
- Real-time error detection

## Additional Claude Code Features to Leverage

### 1. Skills System
**Location:** `.claude/skills/`
**Purpose:** Reusable workflow templates

**Recommended Skills to Create:**
- **component-generator.md** - Template for creating new UI components
- **animation-tester.md** - Workflow for testing Framer Motion animations
- **form-validator.md** - Steps to test form validation
- **deployment-checklist.md** - Pre-deployment verification steps

### 2. Todo Management
**Feature:** Built-in todo tracking with TodoWrite tool
**Usage:** Track progress on redesign tasks
**Benefits:**
- Visual progress tracking
- Break down large tasks
- Maintain focus on current work

### 3. Background Bash Processes
**Feature:** Run development server in background
**Usage:**
```bash
# Start dev server in background
npm run dev &

# Continue working while server runs
# Check output periodically
```

## Workflow Integration Examples

### Example 1: Design Iteration Workflow
```bash
1. Start dev server (Background Bash)
2. Make design changes (Edit tool)
3. Test in browser (Playwright MCP)
4. Capture screenshots (Playwright MCP)
5. Compare against design requirements (Context7 for best practices)
6. Update todo list (TodoWrite)
```

### Example 2: Form Integration Workflow
```bash
1. Review n8n workflows (n8n MCP - list_workflows)
2. Create form submission workflow (n8n MCP - create_workflow)
3. Update form API route (Edit tool)
4. Test submission (Playwright MCP)
5. Verify Telegram notification (n8n MCP - get_execution)
6. Document setup (Write tool)
```

### Example 3: Component Development Workflow
```bash
1. Research component patterns (Context7 MCP)
2. Generate component boilerplate (Skills system)
3. Implement with TypeScript (Edit tool)
4. Add Framer Motion animations (Context7 for docs)
5. Test responsiveness (Playwright MCP)
6. Check TypeScript errors (IDE MCP)
```

## Priority Implementation Order

### Phase 1: Essential Setup (Do First)
1. ✅ Memory Server - Already configured
2. ✅ Sequential Thinking - Already configured
3. ✅ Filesystem Server - Already configured

### Phase 2: Development Tools (Do Soon)
4. 🔥 Configure n8n MCP for form workflow
5. 🔥 Set up Playwright/Chrome for testing
6. 📚 Use Context7 for library documentation

### Phase 3: Optimization (Do Later)
7. 💡 Create custom skills for common tasks
8. 💡 Set up IDE MCP for diagnostics
9. 💡 Document workflows in skills

## Configuration Tips

### Testing MCP Servers
Before relying on an MCP server, test it:
```bash
# List available tools
mcp__n8n-faith__list_workflows --verbosity concise

# Test browser automation
mcp__playwright__browser_navigate --url "https://example.com"
```

### Managing MCP Server Performance
- Only load MCPs you're actively using
- Some servers (like Playwright) start browser instances - be mindful of resources
- Use verbosity settings to control output size

### Troubleshooting
If an MCP server isn't working:
1. Check it's properly configured in `.clauderc`
2. Verify the command can run independently
3. Check for conflicting environment variables
4. Review MCP server documentation

## Resources & Documentation

### MCP Documentation
- [Official MCP Specification](https://spec.modelcontextprotocol.io/)
- [Claude Code MCP Guide](https://docs.claude.com/claude-code)

### Specific Server Docs
- **n8n MCP:** Use `mcp__n8n-docs__tools_documentation` for help
- **Playwright:** Check Playwright documentation for selector syntax
- **Context7:** Automatically searches for library documentation

## Next Actions

1. **Immediate:**
   - [ ] Test n8n MCP connection to your n8n instance
   - [ ] Create first workflow using n8n MCP
   - [ ] Set up Playwright for browser testing

2. **Short Term:**
   - [ ] Create custom skills for repetitive tasks
   - [ ] Document any MCP configuration issues
   - [ ] Set up Context7 for common libraries

3. **Long Term:**
   - [ ] Evaluate additional MCP servers as they become available
   - [ ] Share successful workflow patterns in skills
   - [ ] Create project-specific MCP wrappers if needed

---

**Last Updated:** 2025-10-30
**Status:** Configuration Complete, Ready for Active Use
