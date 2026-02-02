# Muhammad Younis Portfolio - Design Document

## Part 1: Visual Design System

### Overview
A modern, dark-themed portfolio website with a professional aesthetic that emphasizes technical expertise and cloud computing credentials. The design features:
- **Dark theme** with deep navy/slate backgrounds
- **Vibrant accent colors** (cyan/teal gradients) for highlights and CTAs
- **Clean typography** with excellent readability
- **Card-based layouts** for organizing content
- **Subtle animations** and hover effects for engagement
- **Single-page navigation** with smooth scrolling

### Color Palette

**Primary Colors:**
- Background Primary: `#0f172a` (Deep slate/navy)
- Background Secondary: `#1e293b` (Slightly lighter slate)
- Background Card: `#334155` (Card backgrounds)

**Accent Colors:**
- Primary Accent: `#06b6d4` (Cyan - for highlights, buttons, links)
- Secondary Accent: `#14b8a6` (Teal - for gradients)
- Gradient: `linear-gradient(135deg, #06b6d4 0%, #14b8a6 100%)`

**Text Colors:**
- Text Primary: `#f8fafc` (Off-white for headings)
- Text Secondary: `#cbd5e1` (Light gray for body text)
- Text Muted: `#94a3b8` (Muted gray for labels)

**Status/Level Colors:**
- Advanced: `#22c55e` (Green)
- Proficient: `#3b82f6` (Blue)
- Intermediate: `#f59e0b` (Amber)

### Typography System

**Font Family:**
- Primary: `Inter, system-ui, sans-serif`

**Type Scale:**
- Hero Title: `4rem` (64px), font-weight: 700, letter-spacing: -0.02em
- H1: `3rem` (48px), font-weight: 700
- H2: `2.25rem` (36px), font-weight: 600
- H3: `1.5rem` (24px), font-weight: 600
- H4: `1.25rem` (20px), font-weight: 600
- Body Large: `1.125rem` (18px), font-weight: 400
- Body: `1rem` (16px), font-weight: 400
- Small: `0.875rem` (14px), font-weight: 400
- Caption: `0.75rem` (12px), font-weight: 500

### Spacing System

**Section Spacing:**
- Section padding: `80px` vertical (desktop), `60px` (tablet), `40px` (mobile)
- Container max-width: `1200px`
- Container padding: `24px` horizontal

**Component Spacing:**
- Card padding: `24px` - `32px`
- Grid gap: `24px` - `32px`
- Element margin: `16px` - `24px`

### Common Components

**Buttons:**
- Primary: Gradient background, white text, rounded-lg (8px), padding 12px 24px
- Secondary: Transparent with border, accent color text
- Hover: Scale 1.02, brightness increase

**Cards:**
- Background: `#334155` or `#1e293b`
- Border-radius: `12px` (rounded-xl)
- Border: `1px solid rgba(255,255,255,0.1)`
- Shadow: `0 4px 6px -1px rgba(0,0,0,0.3)`
- Hover: Border color brightens, subtle lift

**Skill Progress Bars:**
- Background track: `rgba(255,255,255,0.1)`
- Fill: Gradient from cyan to teal
- Height: `8px`
- Border-radius: `full`

**Icons:**
- Size: `24px` standard, `32px` for feature icons
- Color: Accent cyan or white
- Using Lucide React icons

---

## Part 2: Global Animations & Interactions

### Page Load Animation Sequence
- **Hero content**: Fade in + slide up (staggered)
  - Title: delay 0ms, duration 600ms
  - Subtitle: delay 150ms, duration 600ms
  - Description: delay 300ms, duration 600ms
  - CTA buttons: delay 450ms, duration 600ms
  - Profile image: delay 200ms, duration 800ms, scale from 0.9 to 1

### Smooth Scroll Behavior
- Native smooth scroll enabled
- Scroll-to-section on navigation click
- Duration: approximately 800ms ease-out

### Scroll-Triggered Reveal Animations
- **Fade In Up**: opacity 0→1, translateY 30px→0
- **Duration**: 600ms
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out)
- **Stagger**: 100ms between sibling elements
- **Trigger**: When element enters 80% of viewport

### Common Hover Patterns
- **Cards**: translateY -4px, border color brighten, duration 300ms
- **Buttons**: scale 1.02, brightness 1.1, duration 200ms
- **Links**: color transition to accent, duration 200ms
- **Images**: scale 1.05, duration 400ms

### Technical Specifications
- Use `transform` and `opacity` for animations (GPU accelerated)
- Add `will-change: transform, opacity` on animated elements
- Respect `prefers-reduced-motion` media query
- All transitions use ease-out or custom cubic-bezier

---

## Part 3: Content Sections

### Section: Navigation (Fixed Header)

**Layout & Style:**
- Fixed position at top
- Background: transparent initially, `#0f172a/95` with backdrop-blur on scroll
- Height: `72px`
- Logo on left, nav links on right
- Mobile: hamburger menu

**Interactions:**
- Background appears on scroll (after 50px)
- Transition: background 300ms ease
- Nav links hover: accent color, duration 200ms
- Mobile menu: slide in from right

**Content:**
- Logo: "MY" or "Muhammad Younis"
- Links: About, Skills, Experience, Education, Certifications, Contact

---

### Section: Hero

**Layout & Style:**
- Full viewport height (100vh minimum)
- Two-column layout: content left (60%), image right (40%)
- Background: gradient overlay on dark background
- Decorative: subtle grid pattern or gradient blobs

**Interactions:**
- **Profile image**: Subtle floating animation (translateY ±10px, 4s infinite)
- **CTA buttons**: Hover scale and glow effect
- **Social icons**: Hover color change to accent

**Content:**
- Greeting: "Hello, I'm"
- Name: "Muhammad Younis"
- Title: "IT Professional & Cloud Developer"
- Description: Professional summary
- CTAs: "View My Work" (primary), "Contact Me" (secondary)
- Social links: LinkedIn, GitHub, Email

**Images:**
- Profile photo: `/public/profile-photo.jpg`
- Shape: Circular with gradient border ring
- Size: 280px x 280px

---

### Section: About (Professional Summary)

**Layout & Style:**
- Single column, centered text
- Max-width: `800px`
- Background: `#0f172a`

**Interactions:**
- Fade in up on scroll
- Text reveals with slight delay

**Content:**
- Section title: "About Me"
- Full professional summary from CV
- Key highlights as small cards/badges

---

### Section: Technical Skills

**Layout & Style:**
- Grid layout: 2 columns on desktop, 1 on mobile
- Skill cards with progress bars
- Background: `#1e293b`

**Interactions:**
- Cards fade in up with stagger
- Progress bars animate from 0 to value on scroll
- Duration: 1000ms, easing: ease-out

**Content:**
- Python - Intermediate (70%)
- HTML/CSS/PHP - Proficient (85%)
- Huawei Cloud - Certified (90%)
- Cisco Networking - Intermediate (75%)
- VS Code & Dev Tools - Intermediate (70%)
- MS Office Suite - Advanced (90%)

---

### Section: Experience & Projects

**Layout & Style:**
- Timeline layout with cards
- Alternating left/right on desktop
- Vertical line connector
- Background: `#0f172a`

**Interactions:**
- Timeline cards fade in from sides
- Left cards: slide from left
- Right cards: slide from right
- Duration: 600ms, stagger 150ms

**Content:**
1. Enterprise Web Compute Service Deployment
2. Huawei Ecosystem Setup
3. University Network Architecture (Cisco Packet Tracer)
4. Calculator Application
5. Receptionist & Admin Coordinator (Laser Pain Clinic)
6. Volunteer Financial Coordinator (Free Street Children School)

---

### Section: Education

**Layout & Style:**
- Card grid: 2 columns
- Each card shows degree, institution, year, details
- Background: `#1e293b`

**Interactions:**
- Cards fade in up with stagger
- Hover: lift effect

**Content:**
1. BS Information Technology - NCBA&E (2023-2025) - CGPA 3.4/4.0
2. ADP (IT) - NCBA&E (2021-2023) - CGPA 3.1/4.0
3. FCS (Pre-Medical) - Emerson University (2019-2021)
4. Matriculation - Government Muslim High School (2017-2018)

---

### Section: Certifications

**Layout & Style:**
- Featured cards with badges/icons
- Highlight Huawei certification
- Background: `#0f172a`

**Interactions:**
- Cards scale in on scroll
- Hover: glow effect on Huawei card

**Content:**
1. Huawei Cloud Developer Certification (Nov 2025 - Nov 2028)
   - Certificate No: HWENDCTEDA145391
   - Corvit System Multan
2. Freelancing - DigiSkills.pk (Nov 2022 - Jan 2023)
3. Video Editing, Animation & Vlogging - DigiSkills.pk (Ongoing)

---

### Section: Languages

**Layout & Style:**
- Small section, horizontal pills/tags
- Background: `#1e293b`

**Content:**
- English - Professional
- Urdu - Native
- Saraiki - Native
- Punjabi - Fluent
- Arabic - Reading

---

### Section: Contact / Footer

**Layout & Style:**
- Two columns: contact info left, form right
- Background: gradient from primary to darker
- Footer with copyright

**Interactions:**
- Form inputs focus: border accent color
- Submit button: hover glow
- Social icons: hover scale and color change

**Content:**
- Email: younisameen1@gmail.com
- Phone: +92 318 6493019, +92 307 8116816
- LinkedIn: linkedin.com/in/younis-amin
- GitHub: github.com/oyeeyounis
- Contact form (optional)
- Copyright notice

---

## Part 4: Responsive Breakpoints

- **Desktop**: 1024px+ (full layouts)
- **Tablet**: 768px - 1023px (2 columns → 1 column)
- **Mobile**: < 768px (single column, stacked)

## Part 5: Assets

**Images:**
- Profile photo: `/public/profile-photo.jpg` (already copied)

**Icons:**
- Using Lucide React icons throughout
- Cloud, Code, Network, Award, Mail, Phone, Linkedin, Github, etc.
