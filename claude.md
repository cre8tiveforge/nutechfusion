# NuTech Fusion Website Project

## Project Overview
This is the official website for NuTech Fusion, a technology services company specializing in AI solutions, Virtual Reality development, 3D production, and technical consulting services.

**Last Major Update:** October 2025
**Original Design:** March 2024 (11 months ago)
**Current Phase:** Complete redesign and modernization

## Quick Links
- **Main Planning Documents:**
  - [Business Overview](./docs/business-overview.md) - Core service offerings
  - [Detailed Business Overview](./docs/detailed-business-overview.md) - Comprehensive capabilities
  - [Website Structure Plan](./docs/website-structure.md) - Original structural design
  - [Planned Updates](./docs/PLANNED_UPDATES.md) - Animation and interaction improvements

- **Project Resources:**
  - [Website Evaluation & Analysis](#) - See `docs/EVALUATION.md` (to be created)
  - [Comprehensive Redesign Plan](#) - See `docs/REDESIGN_PLAN.md` (to be created)
  - [New Hope Sample Project](./resources/New%20Hope%20Methodist%20Church.md) - Recent project example

## Technology Stack

### Current Implementation
- **Framework:** Next.js 15.1.7 with App Router
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4.1
- **Animations:** Framer Motion 12.4.2
- **UI Components:** Custom components (animated-hero, bento-card, wavy-background, background-paths)
- **Deployment:** Netlify (static export, free plan)

### Dependencies
```json
{
  "next": "15.1.7",
  "react": "^19.0.0",
  "framer-motion": "^12.4.2",
  "tailwindcss": "^3.4.1",
  "typescript": "^5"
}
```

## Business Services (Core Offerings)

### Primary Services
1. **AI Solutions & Integration**
   - Custom chatbot development (multi-model systems)
   - Process automation and workflow optimization
   - AI-powered content generation (text, images, audio)
   - Knowledge base integration
   - Local and cloud deployment options

2. **Virtual Reality Solutions**
   - Business visualization (architecture, real estate)
   - Training simulations (medical, industrial)
   - Virtual tours and product showcases
   - Platform support: Oculus, Vive, XR, Mobile VR

3. **3D Production & Animation**
   - Character animation and motion capture
   - Environmental modeling and visualization
   - Product visualization
   - Technical animation (particles, simulations)

4. **Technical Solutions**
   - Custom software development
   - Hardware solutions and PC building
   - Network configuration
   - System integration

### Secondary Services
- 3D Printing (FDM, resin, prototyping)
- Digital Marketing & Social Media Strategy
- Project Management & Consulting

## Current Website Structure

### Pages
- `/` - Homepage (single-page format with sections)
- `/success` - Form submission success page
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/newhope` - Sample project showcase

### Key Sections (Homepage)
1. **Hero Section** - Animated with background paths, rotating service words
2. **Stats Cards** - Years experience, projects, technologies
3. **Services Grid** - 4 bento cards showcasing core services
4. **Technology Stack** - Currently hidden, needs implementation
5. **Consultation Form** - Contact form (currently non-functional)

## Current Issues & Improvements Needed

### Critical Issues
1. **Form Integration** ❌
   - Form submits to `/api/submit-form` but only logs data
   - Netlify form detection enabled but not working
   - Needs proper n8n workflow integration for Telegram notifications

2. **Missing Features** ⚠️
   - No light/dark mode toggle
   - Limited interactivity and modern UI patterns
   - Technology stack section hidden
   - No case studies or portfolio showcase

3. **Design Limitations** ⚠️
   - Basic animations, not showcasing full expertise
   - Limited use of modern web design techniques
   - Could benefit from more sophisticated UI components

## Design Goals (Redesign)

### Core Requirements
1. **Single-Page Format** - All content accessible without navigation, but with:
   - Pop-up modals for detailed information
   - Expanding/contracting sections
   - Carousels for project showcases
   - Tabbed interfaces for service details
   - Smooth scroll animations

2. **Light/Dark Mode** - Professional toggle implementation

3. **Modern Design Excellence**
   - Showcase web design expertise
   - High-level visual sophistication
   - Smooth animations and interactions
   - Professional, polished appearance

4. **Interactive Elements**
   - Scroll-triggered animations
   - Parallax effects
   - Micro-interactions
   - Hover states and transitions
   - Dynamic content reveal

## Design Resources & Tools

### Component Libraries to Consider
- **shadcn/ui** - High-quality React components with Tailwind
- **Aceternity UI** - Modern, animated components
- **Magic UI** - Stunning UI components
- **Framer Motion** - Already integrated, expand usage

### Design Inspiration
- Modern portfolio sites
- Tech company landing pages
- Interactive showcases (e.g., 21st.dev approach)

### Additional Resources from SmartMarks DB
- See `docs/WEB_DESIGN_RESOURCES.md` (to be created with extracted tools from CSV)

## Hosting Considerations

### Current: Netlify (Free Plan)
**Pros:**
- Easy deployment from Git
- Built-in CI/CD
- Form handling (when properly configured)
- Free SSL/HTTPS

**Cons:**
- Form integration issues currently
- Limited to static exports with Next.js
- Free tier limitations

### Alternatives to Evaluate
- **Vercel** - Native Next.js support, edge functions
- **Cloudflare Pages** - Fast CDN, serverless functions
- **Railway** - Full-stack hosting with databases
- **Netlify (stay)** - Fix form issues and optimize usage

## Form Integration Strategy

### Current State
```typescript
// src/app/api/submit-form/route.ts
// Currently just logs data, needs n8n integration
```

### Desired Flow
1. User submits consultation form
2. Form data sent to n8n workflow via HTTP POST
3. n8n workflow:
   - Stores submission data
   - Sends Telegram notification
   - (Optional) Sends email confirmation
   - (Optional) Logs to database

### Implementation Options
**Option A: Stay on Netlify**
- Fix Netlify form detection
- Add n8n HTTP POST as secondary notification
- Use Netlify Functions for webhook

**Option B: Move to Vercel/Cloudflare**
- Direct n8n integration via API route
- More control over form processing
- Better Next.js support

## Project Workflow & n8n Integration

### n8n Workflow Design (To Be Implemented)
1. **Webhook Trigger** - Receives form data
2. **Data Validation** - Validates required fields
3. **Telegram Node** - Sends instant notification
4. **Database Node** - (Optional) Stores in Supabase/PostgreSQL
5. **Email Node** - (Optional) Sends confirmation email

See: `docs/N8N_WORKFLOW_DESIGN.md` (to be created)

## Development Guidelines

### Code Style
- TypeScript strict mode
- Functional components with hooks
- Tailwind for styling (avoid custom CSS when possible)
- Component-based architecture
- Server components by default, "use client" when needed

### File Structure
```
src/
├── app/              # Next.js app router pages
│   ├── api/         # API routes
│   └── (pages)/     # Page components
├── components/       # Reusable components
│   └── ui/          # UI components
└── lib/             # Utilities and helpers
```

### Animation Guidelines
- Use Framer Motion for complex animations
- CSS transitions for simple hover effects
- Respect `prefers-reduced-motion` for accessibility
- Keep animations smooth (60fps target)

## MCP Servers Configuration

### Active Servers
1. **Memory Server** - Conversation context persistence
   - Location: `.claude/memory/conversations.jsonl`

2. **Sequential Thinking Server** - Enhanced problem-solving

3. **Filesystem Server** - Project file access

### Additional Recommended Servers
- **n8n MCP Server** - Direct n8n workflow integration
- **Playwright MCP Server** - Browser automation for testing
- **Context7 MCP Server** - Up-to-date library documentation
- **Chrome DevTools MCP Server** - Visual testing and debugging

See: `docs/MCP_RECOMMENDATIONS.md` (to be created)

## Skills & Workflows

### Available Skills
- See `.claude/skills/` directory for specialized task workflows

### Common Tasks
- **Development:** `npm run dev` - Start dev server
- **Build:** `npm run build` - Production build
- **Lint:** `npm run lint` - Check code quality

## Next Steps

### Phase 1: Evaluation & Planning (Current)
- [x] Set up Claude Code project structure
- [x] Create project documentation (claude.md)
- [ ] Complete website evaluation document
- [ ] Create comprehensive redesign plan
- [ ] Research and document design resources

### Phase 2: Technical Foundation
- [ ] Decide on hosting platform
- [ ] Set up n8n workflow for form handling
- [ ] Implement light/dark mode toggle
- [ ] Add missing UI component libraries

### Phase 3: Design Implementation
- [ ] Redesign hero section with advanced animations
- [ ] Implement interactive service showcases
- [ ] Add project portfolio/case studies section
- [ ] Create modal system for detailed content
- [ ] Implement carousel for projects

### Phase 4: Content & Polish
- [ ] Write detailed service descriptions
- [ ] Add case study content
- [ ] Optimize images and assets
- [ ] Performance testing and optimization
- [ ] Accessibility audit

### Phase 5: Launch
- [ ] Deploy to production
- [ ] Test form submissions and notifications
- [ ] Monitor analytics
- [ ] Gather feedback

## Key Contacts & Resources

### n8n Instance
- URL: [To be configured]
- Workflow ID: [To be created]

### Netlify
- Site URL: [To be documented]
- Build command: `pnpm build`
- Publish directory: `out`

## Notes & Reminders

- Original website designed March 2024 (11 months ago)
- Major improvements in Claude Code tools since then
- Focus on showcasing web design expertise
- Single-page format with expandable sections
- Light/dark mode is mandatory
- Form must connect to n8n → Telegram

## Document History
- **2025-10-30:** Initial claude.md creation, project setup
- **2024-03:** Original website design and implementation

---

**Last Updated:** 2025-10-30
**Maintained by:** Claude Code
**Project Status:** Redesign Planning Phase
