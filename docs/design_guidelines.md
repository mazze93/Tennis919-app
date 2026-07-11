# Tennis 919 Website Design Guidelines

## Design Approach
**Reference-Based Strategy**: Drawing inspiration from Outdoor Voices' inclusive community aesthetic, Allbirds' clean minimalism, and Everlane's authentic photography approach. The design balances retro-inspired elements with modern web standards, creating an accessible, welcoming experience that celebrates diversity in tennis.

## Brand Identity

### Color Palette
- **Primary**: #2E5C3E (Forest Green) - Logo color, navigation, primary CTAs
- **Secondary**: #F4A261 (Warm Coral) - Section accents, highlights
- **Accent**: #E76F51 (Bold Terracotta) - Interactive elements, secondary CTAs
- **Neutral**: #F7F7F2 (Warm White) - Backgrounds, cards
- **Text**: #264653 (Deep Teal) - Body copy, headings
- **Supporting**: #A8DADC (Soft Mint) - Subtle backgrounds, borders

### Typography System
**Fonts**: Inter (body), Poppins (headings) via Google Fonts CDN

**Hierarchy**:
- H1: Poppins Bold, 3.5rem (desktop) / 2.25rem (mobile)
- H2: Poppins SemiBold, 2.5rem (desktop) / 1.875rem (mobile)
- H3: Poppins Medium, 1.875rem (desktop) / 1.5rem (mobile)
- Body Large: Inter Regular, 1.125rem
- Body: Inter Regular, 1rem
- Small: Inter Regular, 0.875rem
- Button: Poppins SemiBold, 1rem

## Layout System

### Spacing Primitives
Use Tailwind units: **2, 4, 6, 8, 12, 16, 20, 24** for consistent rhythm
- Component spacing: p-6 to p-8
- Section padding: py-16 md:py-24 lg:py-32
- Element gaps: gap-4 to gap-8
- Container max-width: max-w-7xl

### Grid System
- Mobile: Single column (grid-cols-1)
- Tablet: 2 columns for features/products (md:grid-cols-2)
- Desktop: 3-4 columns for product grids (lg:grid-cols-3, xl:grid-cols-4)

## Page Structure & Components

### Homepage Sections (in order):

**1. Hero Section** (85vh)
- Full-width authentic community photo showcasing diverse players
- Centered headline: "Tennis Is For Everyone"
- Subheadline highlighting inclusive mission
- Dual CTAs: "Book a Lesson" (primary terracotta) + "Explore Merchandise" (secondary outline)
- Buttons with backdrop-blur for readability over images

**2. Mission Statement** (py-20)
- Two-column layout: Left (founder story + LGBTQ+ pride messaging), Right (community values)
- Include circular logo image
- Warm white background (#F7F7F2)

**3. Services Grid** (py-24)
- Three-column card layout: Private Lessons | Duos Coaching | Group Clinics
- Each card: Illustration/icon, title, description, pricing, booking CTA
- Cards elevated with subtle shadow, white background
- Forest green accent headers

**4. Winter Apparel Showcase** (py-24)
- "New Collection" badge in coral
- Retro-modern product grid (4 columns desktop, 2 tablet, 1 mobile)
- Product cards: Image, name, price, "Shop Now" button
- Incorporate vintage tennis aesthetic with modern clean lines

**5. Testimonials Carousel** (py-20)
- Three visible testimonials at desktop
- Customer photo, quote, name, rating
- Soft mint background (#A8DADC)
- Auto-rotate with manual controls

**6. Newsletter + CTA Combo** (py-24)
- Split section: Left (Newsletter signup with tennis tips preview), Right (Book Now CTA with session tracker teaser)
- Gradient background: forest green to deep teal

**7. Footer** (py-16)
- Four columns: About/Contact | Quick Links | Social | Newsletter
- Include location, hours, LGBTQ+ organization badge
- Social icons using Heroicons

### User Account/Playbook Dashboard

**Layout**:
- Sidebar navigation: Sessions | Progress | Profile | Skill Level
- Main content area with card-based modules
- Session history table with filtering
- Progress visualization: charts showing sessions over time
- Skill placement selector: Beginner/Intermediate/Advanced with descriptions

**Components**:
- Stats cards (sessions booked, hours played, current streak)
- Upcoming bookings list with Calendly integration embed
- Achievement badges for milestones
- Calendar view of past/future sessions

### Booking Pages

**Structure**:
- Hero with service-specific imagery
- Two-column: Left (service details, pricing tiers), Right (embedded Calendly widget)
- FAQ accordion below booking area
- Related services suggestion cards

### Merchandise Pages

**Product Listing**:
- Filter sidebar: Category, Size, Price, Color
- Product grid with hover zoom
- Retro-inspired product photography on neutral backgrounds
- Quick view modal for details

**Product Detail**:
- Large image gallery (left 60%), Product info (right 40%)
- Size selector, quantity, Add to Cart (terracotta button)
- Product description with retro-modern storytelling
- Related products carousel

## Component Library

### Navigation
- Sticky header with logo left, nav center, account/cart right
- Desktop: Horizontal menu
- Mobile: Hamburger with slide-out drawer
- Transparent on hero, white background on scroll

### Buttons
- Primary: Terracotta (#E76F51) background, white text, rounded-md
- Secondary: Outline with forest green border, transparent background
- Ghost: Text-only in deep teal
- Size variants: sm (px-4 py-2), md (px-6 py-3), lg (px-8 py-4)

### Cards
- White background, rounded-lg, shadow-sm
- Hover: shadow-md transition
- Padding: p-6
- Border: 1px solid warm white for subtle definition

### Forms
- Input fields: border-2 border-gray-200, focus:border-forest-green
- Labels: Inter Medium, deep teal
- Helper text: text-sm in gray
- Validation: Red for errors, green for success

### Icons
Use **Heroicons** via CDN for all interface icons (calendar, user, shopping cart, etc.)

## Images Strategy

### Required Photography
1. **Hero**: Full-width community action shot (diverse players, authentic Durham setting)
2. **About/Mission**: Founders Matthew & husband portrait, community group photos
3. **Services**: Action shots for each service type (private lesson, duo, group clinic)
4. **Testimonials**: Customer headshots
5. **Products**: Professional product photography with retro-modern styling on neutral backgrounds
6. **Lifestyle**: Players wearing apparel in action, showcasing winter collection

### Image Treatment
- Authentic, unposed community moments preferred
- Warm, natural lighting
- Diverse representation in all imagery
- Product photos: Clean, minimal backgrounds with subtle shadows
- Vintage-inspired color grading for retro feel while maintaining modern clarity

## Responsive Behavior
- **Mobile-first**: Design for 375px base, scale up
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Navigation collapses to hamburger < 768px
- Product grids: 1 col mobile, 2 col tablet, 3-4 col desktop
- Typography scales proportionally with viewport

## Accessibility
- WCAG AA contrast ratios maintained
- Focus states: 2px terracotta outline
- Keyboard navigation support
- Alt text for all images
- Semantic HTML structure
- Screen reader-friendly labels

## Animation Guidelines
**Minimal, purposeful motion**:
- Page transitions: Subtle fade-in (0.3s)
- Button hover: Scale 1.02, shadow increase (0.2s)
- Card hover: Lift effect via shadow (0.3s)
- No auto-playing animations except testimonial carousel (slow, pausable)
- Scroll-triggered fade-ins for sections (intersection observer)

This design creates a welcoming, inclusive experience that honors Tennis 919's community-focused mission while providing modern e-commerce and booking functionality with retro-inspired visual flair.