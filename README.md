# Brain & Spine Physio Clinic - Premium Medical Website

A premium, modern physiotherapy clinic website built with Next.js, React, and Tailwind CSS. Features advanced UI elements including glassmorphism, gradient animations, and smooth interactions.

## ✨ Features

### Design Elements
- **Premium Blue-to-Teal Gradient**: Custom color palette inspired by luxury healthcare branding
- **Glassmorphism Effects**: Subtle frosted glass effects on hero section and cards
- **Animated Hover Effects**: Smooth scale, rotate, and color transitions on interactive elements
- **Gradient Animations**: Flowing gradient backgrounds that create visual depth
- **Modern Icons**: Lucide icons throughout for professional appearance
- **Responsive Design**: Mobile-first approach with breakpoints for all devices

### Sections
1. **Header** - Sticky navigation with smooth scrolling
2. **Hero Section** - Eye-catching intro with glassmorphism cards and CTA buttons
3. **About Clinic** - Clinic information with statistics cards
4. **Services** - 7 specialized physiotherapy services with icons
5. **Why Choose Us** - 4-column grid highlighting key benefits
6. **Expert Therapists** - Profile cards for physiotherapists
7. **Testimonials** - Patient reviews with star ratings
8. **FAQ Section** - Comprehensive physiotherapy Q&A with 8 questions
9. **Appointment Booking** - Full form for scheduling consultations
10. **Contact Section** - Multiple contact methods and quick links
11. **Footer** - Complete footer with social links and information

## 🛠️ Technical Stack

- **Framework**: Next.js 16+ (App Router)
- **Styling**: Tailwind CSS with custom theme
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animation**: Custom CSS keyframes + Tailwind classes
- **Forms**: HTML5 with React state management

## 🎨 Color System

The design uses exactly 3 colors to maintain premium aesthetics:
- **Primary Blue**: `oklch(0.45 0.21 261.5)` - Main brand color
- **Accent Teal**: `oklch(0.52 0.18 216)` - Complementary accent
- **Neutrals**: White, grays, and dark variants for balance

All colors support both light and dark modes.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All sections adapt beautifully across devices with mobile-first design.

## 🎭 Custom Animations

### Available Classes
- `.animate-gradient-flow` - Smooth gradient position animation (3s)
- `.animate-glass-shimmer` - Shimmer effect for glass elements (8s)
- `.animate-float-up` - Gentle floating motion (3s)
- `.animate-scale-in` - Entrance scale animation (0.3s)
- `.glass-morphism` - Frosted glass effect with backdrop blur

## 🔧 Component Structure

```
components/
├── header.tsx          # Sticky navigation
├── hero.tsx            # Hero section with glassmorphism
├── about.tsx           # Clinic information
├── services.tsx        # Service cards grid
├── why-choose-us.tsx   # Benefits section
├── therapists.tsx      # Team profiles
├── testimonials.tsx    # Patient reviews
├── faq.tsx             # FAQ accordion
├── appointment.tsx     # Booking form
├── contact.tsx         # Contact information
└── footer.tsx          # Footer with links
```

## 📋 FAQ Content

The FAQ section includes 8 comprehensive questions about:
- What is physiotherapy
- Session duration
- Treatment duration
- Referral requirements
- Chronic pain treatment
- Neuro physiotherapy conditions
- Post-surgical safety
- Home services availability

## 📞 Contact Information

- **Address**: Kumarapuram, Thiruvananthapuram, Kerala 695011
- **Phone**: +91 89 2123 4567
- **Email**: info@brainandspinephysio.com
- **Hours**: Mon-Sat 9 AM - 7 PM, Sun 10 AM - 4 PM
- **WhatsApp**: Available for quick inquiries

## 🚀 Getting Started

1. Clone or download the repository
2. Install dependencies: `pnpm install`
3. Run development server: `pnpm dev`
4. Open [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Update Clinic Information
Edit the following files with your clinic details:
- `components/contact.tsx` - Address, phone, hours
- `app/layout.tsx` - SEO metadata
- `components/footer.tsx` - Social links and copyright

### Modify Services
Update the services array in `components/services.tsx`

### Change Therapist Information
Edit the therapists array in `components/therapists.tsx`

### Update FAQ Content
Modify the faqs array in `components/faq.tsx`

## 🎯 SEO Features

- Semantic HTML structure
- Descriptive meta tags and descriptions
- Structured heading hierarchy
- Alt text for all images
- Mobile-friendly responsive design
- Fast load times with optimized images

## ♿ Accessibility

- Semantic HTML elements (main, header, section)
- ARIA labels where needed
- Keyboard navigation support
- High contrast text colors
- Screen reader friendly interactive elements
- Focus states on buttons and links

## 📦 Deployment

This site is ready to deploy on Vercel, Netlify, or any Node.js hosting:

1. Push to GitHub
2. Connect to Vercel/Netlify
3. Deploy with one click

## 📄 License

This project is created for Brain & Spine Physio Clinic.

## 🤝 Support

For questions or customizations, reach out through the contact form or directly via WhatsApp.
