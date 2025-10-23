# Calculator Project

A modern, feature-rich calculator built with HTML, CSS, and JavaScript.

## Project Structure

```
calculator/
├── calculator.html      # Main HTML file
├── calculator.css       # Stylesheet file
└── calculator-README.md # Documentation
```

## Files Description

### 📄 `calculator.html`
- **Purpose**: Main HTML structure and JavaScript functionality
- **Features**: 
  - Semantic HTML5 structure
  - Embedded JavaScript for calculator logic
  - External CSS and font links
  - Responsive design elements

### 🎨 `calculator.css`
- **Purpose**: Complete stylesheet for calculator styling
- **Features**:
  - CSS Grid layout for button arrangement
  - CSS Custom Properties (variables) for theming
  - Responsive design with media queries
  - Dark mode support
  - Animations and transitions
  - Accessibility features

## CSS Features

### 🎯 **CSS Grid Implementation**
```css
.buttons-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
}
```

### 🎨 **CSS Variables for Theming**
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    --text-primary: #1f2937;
    --text-secondary: #6b7280;
    --bg-primary: #ffffff;
    --bg-secondary: #f8fafc;
    --bg-dark: #1f2937;
    --border-color: #e5e7eb;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}
```

### 🌙 **Dark Mode Support**
```css
.dark-mode {
    --bg-primary: #1f2937;
    --bg-secondary: #374151;
    --text-primary: #f9fafb;
    --text-secondary: #d1d5db;
    --border-color: #4b5563;
}
```

### 📱 **Responsive Design**
```css
@media (max-width: 480px) {
    body {
        padding: 1rem;
    }
    
    .calculator-container {
        padding: 1.5rem;
    }
    
    .display {
        font-size: 1.5rem;
        padding: 1rem;
    }
    
    .btn {
        padding: 0.75rem;
        font-size: 1rem;
        min-height: 50px;
    }
}
```

### ♿ **Accessibility Features**
```css
/* Focus styles for keyboard navigation */
.btn:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
    :root {
        --primary-color: #0000ff;
        --secondary-color: #000080;
        --text-primary: #000000;
        --text-secondary: #333333;
        --border-color: #000000;
    }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

## CSS Organization

### 📁 **File Structure**
1. **CSS Variables** - Color scheme and design tokens
2. **Reset & Base Styles** - Global styling and typography
3. **Layout Components** - Calculator container and grid
4. **Button Styles** - All button types and states
5. **Display Styles** - Calculator screen styling
6. **History Section** - Calculation history styling
7. **Error Handling** - Error message styling
8. **Animations** - Keyframes and transitions
9. **Responsive Design** - Mobile-first media queries
10. **Accessibility** - Focus states and contrast support
11. **Dark Mode** - Theme switching support
12. **Utility Classes** - Helper classes

### 🎨 **Design System**

#### **Color Palette**
- **Primary**: Blue (#2563eb) - Main actions and operators
- **Secondary**: Dark Blue (#1e40af) - Hover states
- **Accent**: Light Blue (#3b82f6) - Equals button
- **Success**: Green - For positive feedback
- **Warning**: Orange (#f59e0b) - Delete button
- **Error**: Red (#ef4444) - Clear button and errors

#### **Typography**
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Sizes**: Responsive scaling from 0.8rem to 2rem

#### **Spacing System**
- **Padding**: 0.5rem, 0.75rem, 1rem, 1.5rem, 2rem
- **Margins**: 0.5rem, 1rem, 1.5rem, 2rem
- **Gaps**: 0.5rem, 1rem (Grid gaps)

#### **Border Radius**
- **Small**: 0.5rem (History items, small buttons)
- **Medium**: 0.75rem (Main buttons)
- **Large**: 1rem (Display, history section)
- **Extra Large**: 2rem (Main container)

## Benefits of Separate CSS File

### ✅ **Advantages**
1. **Better Organization** - Styles are logically grouped and commented
2. **Easier Maintenance** - Update styles without touching HTML
3. **Faster Loading** - CSS can be cached by browsers
4. **Reusability** - CSS can be used across multiple pages
5. **Better Performance** - Smaller HTML file size
6. **Team Collaboration** - Designers can work on CSS independently
7. **Version Control** - Easier to track CSS changes
8. **Debugging** - Easier to debug styling issues

### 🔧 **Development Workflow**
1. **HTML Structure** - Define semantic markup
2. **CSS Styling** - Create visual design and layout
3. **JavaScript Logic** - Add interactive functionality
4. **Testing** - Ensure cross-browser compatibility
5. **Optimization** - Minify CSS for production

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Efficient CSS** - Optimized selectors and properties
- **Hardware Acceleration** - Transform and opacity animations
- **Minimal Repaints** - Efficient DOM manipulation
- **Cached Resources** - External CSS file caching
- **Responsive Images** - Optimized for different screen sizes

## Future Enhancements

### 🚀 **Potential Improvements**
- **CSS Modules** - Component-based styling
- **CSS-in-JS** - Dynamic styling with JavaScript
- **CSS Custom Properties** - More advanced theming
- **CSS Grid Subgrid** - Advanced layout capabilities
- **Container Queries** - Component-based responsive design
- **CSS Logical Properties** - Better internationalization support

---

**Built by**: Manoj Pottal  
**Technologies**: HTML5, CSS3, JavaScript ES6+  
**CSS Framework**: Custom CSS with CSS Grid  
**Date**: 2024
