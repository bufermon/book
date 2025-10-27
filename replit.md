# Casino Quest Book

## Overview

Casino Quest Book is a casino adventure gaming web application that combines casino-style gaming with quest-based trivia and storytelling. The project is a marketing website built with React and TypeScript, designed to showcase the mobile app and drive downloads. It features a dark, luxurious theme inspired by casino aesthetics and adventure quest atmospheres.

The application serves as a promotional landing page with information pages (About, Contact, Privacy Policy, Terms, EULA) and a sitemap. The backend is minimal, using Express.js as a simple server for the React SPA, with scaffolding for potential future user management features.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (no React Router dependency)
- Single Page Application (SPA) architecture with client-side routing

**UI Component System:**
- shadcn/ui component library (New York style variant) with Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Custom design system based on dark casino/adventure theme with specific color palette:
  - Deep Purple background (#1B0C26)
  - Warm Gold highlights (#FFD66B)
  - Emerald action buttons (#13B263)
  - Burnt Amber borders (#CC7A26)
  - Shadow Black overlays (#0E0711)

**State Management:**
- TanStack Query (React Query) for server state management
- React hooks for local component state
- No global state management library (Redux, Zustand, etc.) currently implemented

**Typography & Fonts:**
- Playfair Display for headings (serif, embedded as base64 data URI)
- Inter for body text (embedded as base64 data URI)
- Both fonts embedded inline to avoid external network requests

**Routing Structure:**
- `/` - Home page with hero, features, carousel, FAQ
- `/about` - About the app and mission
- `/contact` - Contact form (mailto link)
- `/privacy-policy` - Privacy policy
- `/terms` - Terms of service
- `/eula` - End User License Agreement
- `/sitemap` - Site navigation overview
- `/analytics.php` - Blank analytics page (not linked)

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript for minimal server-side logic
- HTTP server created via Node's built-in `http` module
- Development mode uses Vite middleware for HMR
- Production mode serves static built files

**Storage Layer:**
- In-memory storage implementation (`MemStorage`) for user management
- Interface-based storage design (`IStorage`) allows easy swapping to database
- User schema defined but not actively used in current implementation
- Drizzle ORM configured for PostgreSQL (via Neon serverless) but not yet integrated

**API Structure:**
- API routes prefixed with `/api`
- Minimal route implementation in current state
- Request/response logging middleware for API endpoints
- JSON body parsing with raw body preservation for webhooks

**Session Management:**
- Express-session configured with connect-pg-simple for PostgreSQL session store
- Session management scaffolded but not actively used

### Data Storage

**Database (Prepared but Unused):**
- PostgreSQL via Neon serverless driver
- Drizzle ORM for type-safe database queries
- Schema defined in `shared/schema.ts` with users table
- Migrations configured to output to `./migrations` directory
- Database URL required via environment variable `DATABASE_URL`

**Current State:**
- Application currently uses in-memory storage
- No active database queries in the codebase
- Storage interface allows seamless migration to PostgreSQL when needed

**Schema Design:**
- Users table with UUID primary key (PostgreSQL gen_random_uuid())
- Username (unique, required)
- Password (required, plain text - needs hashing implementation)
- Zod validation schemas using drizzle-zod

### External Dependencies

**UI & Component Libraries:**
- @radix-ui/* - Unstyled, accessible component primitives (accordion, dialog, dropdown, etc.)
- shadcn/ui - Pre-built components using Radix UI
- lucide-react - Icon library
- embla-carousel-react - Carousel/slider functionality
- cmdk - Command palette component
- class-variance-authority - Variant-based component styling
- tailwind-merge & clsx - CSS class name utilities

**Form Handling:**
- react-hook-form - Form state management
- @hookform/resolvers - Validation resolver utilities
- zod - Schema validation

**Data Fetching:**
- @tanstack/react-query - Async state management

**Date Utilities:**
- date-fns - Date formatting and manipulation

**Database & ORM:**
- drizzle-orm - Type-safe SQL query builder
- @neondatabase/serverless - Neon PostgreSQL driver
- drizzle-zod - Zod schema generation from Drizzle schemas
- connect-pg-simple - PostgreSQL session store for Express

**Development Tools:**
- @replit/vite-plugin-runtime-error-modal - Development error overlay
- @replit/vite-plugin-cartographer - Replit-specific development tool
- @replit/vite-plugin-dev-banner - Development environment banner

**External Services (Configured):**
- Neon PostgreSQL database (requires DATABASE_URL environment variable)
- Email contact via mailto: link (leonadrum2@hotmail.com)
- External download link placeholder (https://example.com/)

**Static Assets:**
- Image assets expected in `/public/images/` directory
- App icons, screenshots, onboarding screens, feature icons
- Assets referenced but not committed to repository