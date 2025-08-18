# Sweet Dreams Bakery 🧁

A modern, aesthetic e-commerce website for a boutique bakery built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **Homepage** with hero section showcasing featured cakes and bakery items
- **Product listing page** with filtering and sorting capabilities
- **Product detail pages** with customer reviews, ratings, and "Add to Cart" functionality
- **Shopping cart** with quantity updates and checkout flow
- **Customer reviews** section with star ratings and comments
- **Responsive design** optimized for mobile and desktop
- **Elegant navigation** with Home, Shop, About Us, and Contact pages
- **Footer** with social media links, newsletter signup, and contact information

## 🎨 Design Theme

- **Soft, fluffy design** with pastel colors (pinks, creams, lavenders)
- **Elegant typography** combining Playfair Display (serif) and Inter (sans-serif)
- **Cozy, welcoming atmosphere** like walking into a boutique bakery
- **Smooth animations** and transitions using Framer Motion

## 🛠️ Tech Stack

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **React Context** for state management

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About Us page
│   ├── cart/           # Shopping cart page
│   ├── contact/        # Contact page
│   ├── products/[id]/  # Dynamic product detail pages
│   ├── shop/           # Product listing page
│   └── layout.tsx      # Root layout
├── components/         # Reusable components
│   ├── cart/           # Cart-related components
│   ├── home/           # Homepage sections
│   ├── layout/         # Navigation and Footer
│   ├── product/        # Product-related components
│   ├── shop/           # Shop page components
│   └── ui/             # UI components
├── context/            # React Context providers
├── data/               # Mock data for products and reviews
└── types/              # TypeScript type definitions
```

## 🎯 Key Components

### Homepage
- **Hero Section** with animated elements and call-to-action
- **Featured Products** showcase
- **About Section** with company story
- **Testimonials** from happy customers

### Shop
- **Product filtering** by category and price
- **Search functionality**
- **Sorting options** (featured, price, rating)
- **Responsive grid** layout

### Product Details
- **Image gallery** with thumbnails
- **Product information** with ratings and reviews
- **Quantity selector** and add to cart
- **Related products** suggestions
- **Customer reviews** with filtering and sorting

### Shopping Cart
- **Item management** (add, remove, update quantities)
- **Order summary** with pricing breakdown
- **Responsive design** with mobile optimization

## 🎨 Color Palette

- **Primary:** Soft pink (#fdf2f8, #fce7f3)
- **Secondary:** Lavender (#f3e8ff, #e9d5ff)
- **Accent:** Cream (#fefcf2, #faf8f1)
- **Text:** Warm brown (#78716c, #57534e)
- **Success:** Soft mint (#ecfdf5)

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Mock Data

The application uses dummy data for:
- **Products** (cakes, pastries, bread, cookies, seasonal items)
- **Customer reviews** with ratings and comments
- **Product categories** and filtering options

## 🎭 Animations

Smooth animations and transitions using Framer Motion:
- **Page transitions** and component mounting
- **Hover effects** on cards and buttons
- **Floating elements** and sparkle effects
- **Loading states** and micro-interactions

## 🛍️ E-commerce Features

- **Product catalog** with detailed information
- **Shopping cart** functionality
- **Customer reviews** and ratings system
- **Product filtering** and search
- **Responsive checkout** flow (UI only)

## 🎉 Future Enhancements

- Payment integration (Stripe, PayPal)
- User authentication and accounts
- Order history and tracking
- Inventory management
- Email notifications
- Blog/recipes section
- Multi-language support

---

Made with ❤️ and lots of flour by the Sweet Dreams Bakery team
