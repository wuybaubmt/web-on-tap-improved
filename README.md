# Hệ Thống Ôn Tập Trực Tuyến - Phiên Bản Cải Tiến

> Build with modern web standards, security best practices, and accessibility

## 🎯 Features

✅ **Authentication** - Google & Email login with Firebase Auth
✅ **Two Learning Modes** - Learning mode (instant feedback) & Exam mode (timed)
✅ **Security** - XSS protection, CORS, Firestore security rules
✅ **Performance** - Lazy loading, DOM optimization, caching
✅ **Accessibility** - WCAG 2.1 AA compliant, screen reader support
✅ **Offline Support** - LocalStorage caching, offline mode
✅ **Analytics** - Track user progress & performance
✅ **Responsive** - Mobile-first design

## 📦 Project Structure

```
src/
├── config/              # Configuration files
│   ├── firebase.config.js
│   └── syllabus.config.js
├── modules/             # Core modules
│   ├── auth.js
│   ├── quiz.js
│   ├── exam.js
│   ├── timer.js
│   ├── scoring.js
│   └── storage.js
├── utils/               # Utility functions
│   ├── dom.js
│   ├── validator.js
│   ├── shuffle.js
│   ├── logger.js
│   └── accessibility.js
├── services/            # API & DB services
│   ├── firestore.service.js
│   ├── api.service.js
│   └── cache.service.js
└── main.js             # Entry point

public/
├── index.html
├── styles/
│   ├── main.css
│   ├── navbar.css
│   ├── quiz.css
│   └── exam.css
└── assets/

tests/
├── quiz.test.js
├── exam.test.js
└── scoring.test.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- Firebase project

### Installation

```bash
# Clone repository
git clone https://github.com/wuybaubmt/web-on-tap-improved.git
cd web-on-tap-improved

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your Firebase credentials

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

## 🔐 Security Configuration

### Firebase Setup

1. **Enable Authentication**
   - Email/Password
   - Google Sign-in

2. **Firestore Security Rules** (see `firebase.rules`)
   ```
   - Users can only read their own data
   - Admins can write question data
   - Real-time sync enabled
   ```

3. **API Restrictions**
   - Restrict API key to specific domains
   - Enable billing to prevent abuse

## 🧪 Testing

```bash
# Run all tests
npm run test

# Watch mode
npm run test -- --watch

# Coverage report
npm run test:coverage
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## ♿ Accessibility

This project follows WCAG 2.1 Level AA standards:
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast (WCAG AA)
- Focus management

## 📊 Performance

- First Contentful Paint: < 1.5s
- Lighthouse Score: 90+
- Bundle size: < 150KB (gzipped)

## 🐛 Troubleshooting

### Firebase Connection Issues
```javascript
// Check firebase.config.js
// Verify .env variables
// Check browser console for errors
```

### Timer Not Working
```javascript
// Ensure browser allows timers
// Check for clearInterval calls
// Verify timer module initialization
```

## 📝 License

MIT License - see LICENSE file

## 👨‍💻 Contributing

See CONTRIBUTING.md for guidelines

## 📧 Support

For issues & questions: [GitHub Issues](https://github.com/wuybaubmt/web-on-tap-improved/issues)
