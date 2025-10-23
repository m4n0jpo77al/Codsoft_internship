# Personal Portfolio Website

A comprehensive, responsive personal portfolio website built with HTML, CSS, and JavaScript. Features modern design, smooth animations, and dynamic interactions.

## 🎯 Features

### ✨ Core Sections
- **Header**: Fixed navigation with logo and smooth scrolling
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About**: Personal bio with professional image
- **Skills**: Categorized technical competencies with interactive tags
- **Projects**: Dynamic project showcase with filtering capabilities
- **Resume**: Downloadable PDF resume section
- **Contact**: Contact information and interactive contact form
- **Footer**: Additional links and copyright information

### 🚀 Dynamic Features
- **Responsive Design**: Works perfectly on all device sizes
- **Smooth Animations**: Fade-in effects and hover animations
- **Interactive Navigation**: Active section highlighting
- **Project Filtering**: Filter projects by category
- **Form Validation**: Real-time form validation with visual feedback
- **Theme Toggle**: Dark/light mode switching
- **Loading Screen**: Professional loading animation
- **Parallax Effects**: Subtle scrolling animations
- **Particle Effects**: Animated background elements

### 🛠️ Technical Features
- **Modern CSS**: CSS Grid, Flexbox, and custom properties
- **JavaScript Classes**: Object-oriented programming approach
- **Performance Monitoring**: Built-in performance tracking
- **Accessibility**: Keyboard navigation and screen reader support
- **SEO Optimized**: Semantic HTML structure
- **Cross-browser Compatible**: Works on all modern browsers

## 📁 File Structure

```
portfolio/
├── portfolio.html          # Main HTML file
├── portfolio.js           # Advanced JavaScript functionality
└── README.md              # Documentation
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue (#2563eb)
- **Secondary**: Dark Blue (#1e40af)
- **Accent**: Light Blue (#3b82f6)
- **Text**: Dark Gray (#1f2937)
- **Background**: White/Light Gray

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300-900 for visual hierarchy
- **Responsive**: Scales appropriately on all devices

### Animations
- **Fade-in**: Staggered section animations
- **Hover Effects**: Interactive element feedback
- **Smooth Scrolling**: Native CSS scroll behavior
- **Loading States**: Visual feedback for interactions

## 🚀 Getting Started

### Quick Start
1. **Download** the portfolio files
2. **Open** `portfolio.html` in any modern web browser
3. **Customize** the content with your information

### Customization Guide

#### 1. Personal Information
Update the following in `portfolio.html`:
```html
<!-- Header Logo -->
<a href="#" class="logo">Your Name</a>

<!-- Hero Section -->
<h1>Your Name</h1>
<p class="tagline">Your Professional Title</p>

<!-- About Section -->
<h3>Hello, I'm Your Name</h3>
```

#### 2. Contact Information
Update contact details in the Contact section:
```html
<p>your.email@domain.com</p>
<p>+1 (555) 123-4567</p>
<p>Your City, State</p>
```

#### 3. Skills
Modify the skills in the Skills section:
```html
<span class="skill-tag">Your Skill</span>
```

#### 4. Projects
Update the `portfolioData.projects` array in the JavaScript:
```javascript
const portfolioData = {
    projects: [
        {
            id: 1,
            title: "Your Project Title",
            description: "Project description...",
            image: "🛒", // Emoji or icon
            technologies: ["React", "Node.js"],
            liveUrl: "https://your-project.com",
            githubUrl: "https://github.com/yourusername/project"
        }
    ]
};
```

#### 5. Resume
Replace the resume download link with your actual PDF:
```javascript
link.href = 'path/to/your/resume.pdf';
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Features
- Collapsible navigation menu
- Touch-friendly buttons
- Optimized layouts
- Swipe gestures support

## 🎯 JavaScript Functionality

### Core Classes

#### PortfolioManager
- Navigation handling
- Scroll effects
- Form validation
- Theme management

#### ProjectFilter
- Project categorization
- Dynamic filtering
- Search functionality

#### PerformanceMonitor
- Page load tracking
- Scroll performance
- Resource monitoring

### Key Features
- **Smooth Scrolling**: Native CSS with JavaScript enhancement
- **Active Navigation**: Highlights current section
- **Form Validation**: Real-time input validation
- **Theme Toggle**: Dark/light mode switching
- **Animation Control**: Intersection Observer API
- **Performance Tracking**: Built-in monitoring

## 🎨 Customization Options

### Colors
Update CSS custom properties:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
}
```

### Fonts
Replace Google Fonts import:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### Animations
Modify animation durations:
```css
--transition: all 0.3s ease; /* Change timing */
```

## 🔧 Browser Support

- **Chrome**: 60+
- **Firefox**: 60+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile Browsers**: iOS Safari 12+, Chrome Mobile 60+

## 📈 Performance Features

- **Optimized Images**: WebP format support
- **Lazy Loading**: Images load as needed
- **Minimal Dependencies**: Lightweight bundle
- **CSS Variables**: Efficient theming
- **Modern JavaScript**: ES6+ features

## 🚀 Deployment Options

### Static Hosting
- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **Firebase Hosting**: Google's hosting platform

### Traditional Hosting
- Upload files to any web server
- No server-side requirements
- Works with any hosting provider

## 📞 Support

For questions or customization help:
- Check the code comments for implementation details
- Review the CSS custom properties for styling options
- Modify the JavaScript data arrays for content updates

## 📄 License

This portfolio template is free to use and modify for personal and commercial projects.

---

**Built with ❤️ using HTML, CSS & JavaScript**
