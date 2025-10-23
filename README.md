# VogueThread - Fashion Brand Landing Page

A modern, responsive landing page for a fashion brand built with React, HTML, CSS, and JavaScript. Features product lookbooks, collection highlights, influencer testimonials, and interactive shopping functionality.

## 🎨 Features

### ✨ Core Features
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, elegant design with smooth animations
- **Interactive Elements**: Shopping cart, wishlist, search functionality
- **Product Showcase**: Dynamic collection highlights and lookbooks
- **Influencer Testimonials**: Social proof with ratings and follower counts
- **Newsletter Subscription**: Email capture for marketing

### 🛍️ Shopping Features
- **Add to Cart**: Interactive cart with item count badges
- **Wishlist**: Heart icon to save favorite items
- **Search Functionality**: Real-time search with feedback
- **Collection Filtering**: Browse by categories and styles
- **Price Display**: Clear pricing for all products

### 📱 Interactive Elements
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Hover Effects**: Enhanced visual feedback on interactions
- **Loading Animations**: Fade-in animations for better UX
- **Mobile Menu**: Collapsible navigation for mobile devices
- **Dynamic Header**: Changes appearance on scroll

## 🚀 Technologies Used

- **React 19.2.0**: Modern React with hooks
- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling with CSS variables
- **JavaScript ES6+**: Interactive functionality
- **Lucide React**: Beautiful icon library
- **Vite**: Fast development server

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── index.js          # UI components (Card, Button, Input)
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles and CSS variables
├── landingpage.jsx               # Main landing page component
├── index.html                    # Standalone HTML version
├── package.json                  # Dependencies and scripts
└── README.md                     # Project documentation
```

## 🎯 Sections

### 1. **Header**
- Sticky navigation with logo
- Desktop and mobile menu
- Cart and wishlist counters
- Sign in and shop buttons

### 2. **Hero Section**
- Compelling headline and description
- Call-to-action buttons
- High-quality hero image
- Gradient background

### 3. **Collection Highlights**
- Three featured collections
- Interactive cards with hover effects
- Add to cart and wishlist functionality
- Product tags and pricing

### 4. **Lookbook Showcase**
- Styled outfit presentations
- Hover overlays with actions
- "Shop This Look" functionality
- Professional photography

### 5. **Influencer Testimonials**
- Social proof from fashion influencers
- Star ratings and follower counts
- Instagram integration links
- Professional headshots

### 6. **Shop CTA**
- Search functionality
- Newsletter signup
- Clear call-to-action

### 7. **Footer**
- Company information
- Quick links navigation
- Social media links
- Newsletter subscription

## 🎨 Design Features

### Color Scheme
- **Primary**: Dark charcoal (#222.2 47.4% 11.2%)
- **Secondary**: Light gray (#210 40% 96%)
- **Accent**: Blue tones for highlights
- **Background**: Clean white with subtle gradients

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300-900 for hierarchy
- **Responsive**: Scales appropriately on all devices

### Animations
- **Fade-in**: Staggered animations for sections
- **Hover Effects**: Scale and color transitions
- **Smooth Scrolling**: Native CSS scroll behavior
- **Loading States**: Visual feedback for interactions

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Codsoft_tasks
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Alternative: Standalone HTML
For a quick preview without React setup:
```bash
# Open index.html in any modern browser
open index.html
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Features
- Collapsible navigation menu
- Touch-friendly buttons
- Optimized image sizes
- Stacked layouts

## 🎯 Interactive Features

### Shopping Cart
- Add items with visual feedback
- Cart count badge in header
- Persistent state management

### Wishlist
- Heart icon toggle
- Visual state indication
- Item count display

### Search
- Real-time input handling
- Search feedback messages
- Enter key support

### Newsletter
- Email validation
- Subscription confirmation
- Keyboard navigation

## 🔧 Customization

### Colors
Update CSS variables in `src/index.css`:
```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96%;
  /* ... other variables */
}
```

### Content
Modify data arrays in `landingpage.jsx`:
- `collections`: Update collection information
- `lookbooks`: Change lookbook data
- `testimonials`: Modify influencer testimonials

### Styling
- Global styles in `src/index.css`
- Component-specific styles in JSX
- Responsive utilities included

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect GitHub repository
- **Netlify**: Drag and drop dist folder
- **GitHub Pages**: Use GitHub Actions
- **Traditional Hosting**: Upload built files

## 📈 Performance Features

- **Optimized Images**: WebP format support
- **Lazy Loading**: Images load as needed
- **Minimal Dependencies**: Lightweight bundle
- **CSS Variables**: Efficient theming
- **Modern JavaScript**: ES6+ features

## 🎨 Brand Customization

### Logo
Replace "VogueThread" in header with your brand name

### Colors
Update CSS variables to match your brand palette

### Content
- Update collection names and descriptions
- Replace images with your product photos
- Modify testimonials with real customer reviews

### Social Links
Update footer social media links to your accounts

## 📞 Support

For questions or issues:
- Check the code comments for implementation details
- Review the CSS variables for styling options
- Modify the data arrays for content updates

## 📄 License

This project is created for educational purposes. Feel free to use and modify for your own fashion brand landing page.

---

**Built with ❤️ for modern fashion brands**
