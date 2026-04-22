# E-Commerce Platform Specification

## 1. Project Overview

**Project Name:** LuxeCart E-Commerce Platform
**Project Type:** Full-featured E-Commerce Web Application
**Core Functionality:** A modern, scalable online shopping platform with user authentication, product catalog, shopping cart, wishlist, checkout, and admin dashboard.
**Target Users:** Online shoppers and e-commerce administrators

---

## 2. UI/UX Specification

### 2.1 Layout Structure

#### Global Layout
- **Header:** Fixed navigation bar (height: 72px desktop, 60px mobile)
- **Main Content:** Flexible container with max-width: 1440px, centered
- **Footer:** Multi-column footer with newsletter signup
- **Sidebar:** Slide-out cart sidebar (400px width)
- **Modal Overlays:** Centered modals for auth, quick view

#### Responsive Breakpoints
- **Mobile:** 0 - 639px
- **Tablet:** 640px - 1023px
- **Desktop:** 1024px - 1439px
- **Large Desktop:** 1440px+

### 2.2 Visual Design

#### Color Palette

**Light Mode:**
| Role | Color | Hex Code |
|------|-------|----------|
| Primary | Deep Indigo | #4338CA |
| Primary Hover | Indigo 700 | #3730A3 |
| Secondary | Warm Coral | #F97316 |
| Secondary Hover | Orange 600 | #EA580C |
| Accent | Emerald | #10B981 |
| Background | Pearl White | #FAFAFA |
| Surface | Pure White | #FFFFFF |
| Text Primary | Charcoal | #1F2937 |
| Text Secondary | Slate Gray | #6B7280 |
| Text Muted | Light Gray | #9CA3AF |
| Border | Cool Gray | #E5E7EB |
| Error | Rose Red | #EF4444 |
| Success | Green | #22C55E |
| Warning | Amber | #F59E0B |

**Dark Mode:**
| Role | Color | Hex Code |
|------|-------|----------|
| Primary | Bright Indigo | #6366F1 |
| Primary Hover | Indigo 400 | #818CF8 |
| Secondary | Bright Coral | #FB923C |
| Accent | Emerald Light | #34D399 |
| Background | Deep Charcoal | #0F0F0F |
| Surface | Dark Gray | #1A1A1A |
| Surface Elevated | Slate | #262626 |
| Text Primary | Off White | #F9FAFB |
| Text Secondary | Gray | #D1D5DB |
| Border | Dark Border | #374151 |

#### Typography

**Font Families:**
- **Primary Font:** "DM Sans" (headings, UI elements)
- **Secondary Font:** "Playfair Display" (hero headings, special text)
- **Monospace:** "JetBrains Mono" (prices, codes)

**Font Sizes:**
| Element | Desktop | Mobile |
|---------|---------|--------|
| H1 (Hero) | 64px | 36px |
| H2 (Page Title) | 48px | 28px |
| H3 (Section) | 32px | 24px |
| H4 (Card Title) | 20px | 18px |
| Body Large | 18px | 16px |
| Body | 16px | 14px |
| Small | 14px | 12px |
| Caption | 12px | 11px |

**Font Weights:**
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

#### Spacing System (8px base)
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
- 4xl: 96px

#### Visual Effects
- **Border Radius:**
  - Small: 6px (buttons, inputs)
  - Medium: 12px (cards)
  - Large: 16px (modals)
  - Full: 9999px (pills, avatars)
- **Shadows (Light Mode):**
  - sm: 0 1px 2px rgba(0,0,0,0.05)
  - md: 0 4px 6px rgba(0,0,0,0.1)
  - lg: 0 10px 15px rgba(0,0,0,0.1)
  - xl: 0 20px 25px rgba(0,0,0,0.15)
- **Shadows (Dark Mode):**
  - sm: 0 1px 2px rgba(0,0,0,0.3)
  - md: 0 4px 6px rgba(0,0,0,0.4)
  - lg: 0 10px 15px rgba(0,0,0,0.5)
- **Animations:**
  - Default transition: 300ms ease
  - Page transitions: 400ms ease-out
  - Micro-interactions: 150ms ease

### 2.3 Components

#### Buttons
- **Primary Button:** Background #4338CA, text white, height 48px, padding 24px
  - Hover: #3730A3, scale(1.02)
  - Active: scale(0.98)
  - Disabled: opacity 0.5
- **Secondary Button:** Border 2px #4338CA, text #4338CA, transparent background
- **Ghost Button:** No border, text #4338CA
- **Icon Button:** 44px square, centered icon

#### Cards
- **Product Card:**
  - White background (dark: #1A1A1A)
  - Border radius 12px
  - Shadow md
  - Image container: 4:3 aspect ratio
  - Zoom on hover: scale(1.05)
  - Add to cart button slides up on hover
- **Category Card:**
  - Square aspect ratio
  - Dark overlay gradient on hover
  - Category name centered

#### Forms
- **Input Fields:**
  - Height: 48px
  - Border: 1px solid #E5E7EB
  - Border radius: 6px
  - Focus: border #4338CA, ring 3px #4338CA/20%
- **Select Dropdowns:** Same styling as inputs with chevron
- **Checkboxes/Radio:** Custom styled, 20px size

#### Navigation
- **Mobile Menu:** Full-screen overlay with staggered animation
- **Desktop Menu:** Horizontal with dropdowns
- **Cart Badge:** Circular, #F97316 background, white text

#### Modals
- **Backdrop:** rgba(0,0,0,0.5) with blur(4px)
- **Modal:** Max-width 500px, centered, border-radius 16px
- **Enter animation:** fade + scale from 0.95

---

## 3. Functionality Specification

### 3.1 User Authentication

#### Features
- Sign Up with email/password
- Login with email/password
- Forgot Password (reset email)
- JWT token management
- Protected routes
- Persistent session (localStorage)
- Logout functionality

#### User Data Model
```javascript
{
  id: string,
  email: string,
  name: string,
  avatar: string,
  role: 'user' | 'admin',
  createdAt: Date
}
```

### 3.2 Product Catalog

#### Product Listing Page
- Grid layout: 4 columns desktop, 3 tablet, 2 mobile
- Category filter sidebar
- Price range filter
- Sort options: Price (low-high, high-low), Name, Newest, Popular
- Search with debounced input (300ms)
- Pagination or infinite scroll
- Product Quick View modal

#### Product Details Page
- Image gallery with thumbnails
- Product title, price, original price (if discounted)
- Size/variant selection
- Color selection
- Quantity selector
- Add to Cart button
- Add to Wishlist button
- Product description tab
- Specifications tab
- Reviews section with rating breakdown

### 3.3 Shopping Cart

#### Features
- Add/remove items
- Update quantity
- Apply coupon codes
- Calculate shipping
- Order summary
- Persist cart in localStorage

#### Cart Data Model
```javascript
{
  items: [{
    productId: string,
    name: string,
    price: number,
    quantity: number,
    image: string,
    variant: string
  }],
  subtotal: number,
  discount: number,
  shipping: number,
  total: number
}
```

### 3.4 Wishlist

#### Features
- Add/remove products
- Move to cart
- Persistent in localStorage
- Empty state UI

### 3.5 Checkout Process

#### Steps
1. **Shipping Details:** Address form with validation
2. **Payment Method:** Card details (simulated)
3. **Order Review:** Final review
4. **Confirmation:** Order success with ID

### 3.6 Order Management

#### User Orders
- Order history list
- Order details view
- Order status tracking
- Order timeline

#### Order Statuses
- Processing
- Shipped
- Out for Delivery
- Delivered
- Cancelled

### 3.7 Admin Dashboard

#### Features
- Statistics cards (orders, revenue, users)
- Recent orders table
- Product management (CRUD)
- User management
- Sales chart
- Category management

### 3.8 Reviews & Ratings

#### Features
- Submit review with rating (1-5 stars)
- Review text
- Display average rating
- Rating breakdown chart
- Helpful votes

### 3.9 Coupons & Promotions

#### Features
- Apply coupon at checkout
- Percentage discounts
- Fixed amount discounts
- Minimum order requirements
- Expiry dates

### 3.10 Real-time Notifications

#### Features
- Toast notifications
- Order status updates
- Cart updates
- New product alerts

### 3.11 Dark/Light Mode

#### Features
- System preference detection
- Manual toggle
- Persistent preference
- Smooth transition

---

## 4. Technical Architecture

### 4.1 Tech Stack

- **Framework:** React 18 with Vite
- **State Management:** Redux Toolkit + React-Redux
- **Routing:** React Router v6
- **HTTP Client:** Axios
- **Styling:** CSS Modules + CSS Variables
- **Forms:** React Hook Form
- **Icons:** Lucide React
- **Animations:** Framer Motion

### 4.2 Project Structure

```
src/
├── assets/
│   └── images/
├── components/
│   ├── common/
│   ├── layout/
│   └── features/
├── contexts/
├── hooks/
├── pages/
├── redux/
│   ├── slices/
│   └── store.js
├── styles/
├── utils/
├── App.jsx
└── main.jsx
```

### 4.3 Performance Requirements

- Lazy loading for routes
- Code splitting per page
- Image optimization (WebP, lazy loading)
- Debounced search
- Memoized components
- Virtual lists for large data

### 4.4 API Endpoints (Mock)

- `GET /api/products`
- `GET /api/products/:id`
- `GET /api/categories`
- `POST /api/auth/login`
- `POST /api/auth/register`
- `POST /api/auth/forgot-password`
- `GET /api/orders`
- `POST /api/orders`
- `GET /api/coupons/:code`

---

## 5. Acceptance Criteria

### Visual Checkpoints
- [ ] Homepage displays hero banner, featured products, categories
- [ ] Product cards show image, name, price, rating
- [ ] Cart sidebar slides in from right
- [ ] Dark mode fully transforms all colors
- [ ] Animations are smooth at 60fps
- [ ] Mobile navigation is fully functional
- [ ] Forms show proper validation states

### Functional Checkpoints
- [ ] User can register and login
- [ ] Products can be filtered and sorted
- [ ] Products can be added to cart
- [ ] Cart persists on page reload
- [ ] Wishlist items persist
- [ ] Checkout flow completes
- [ ] Orders appear in history
- [ ] Admin can manage products

### Performance Checkpoints
- [ ] Initial load under 3 seconds
- [ ] Route transitions under 300ms
- [ ] No layout shifts on load
- [ ] Lighthouse score > 80

---

## 6. Deployment

### Environment Variables
```
VITE_API_URL=http://localhost:3000
VITE_STRIPE_KEY=pk_test_...
```

### Platform
- Vercel or Netlify
- GitHub integration