# SMOS - Sales Management Operating System

A modern, responsive marketing and sales platform built with **React** and **Vite**. SMOS is a comprehensive Sales Management Operating System designed to track the entire sales lifecycle — from capturing field activities to measuring team efficiency and closing deals.

## 🎯 Project Overview

SMOS bridges the gap that traditional CRMs like Salesforce leave behind. While CRMs track leads, SMOS manages the entire sales lifecycle:

- **Activity Intelligence**: Automatically capture every call, visit, follow-up, and client interaction
- **Real-time Analytics**: Live dashboards with instant metrics and drill-down capabilities
- **Workflow Automation**: Automate lead assignments, follow-up sequences, and escalations
- **AI-Powered Insights**: Intelligent lead scoring, deal predictions, and next-best-action recommendations
- **Seamless Integrations**: Connect WhatsApp, email, SMS, payment gateways, and third-party tools
- **Lightning Data Sync**: Real-time bidirectional sync across web, mobile, and API

## 🚀 Live Demo

Visit the deployed application: [SMOS on Vercel](https://uponlytech.vercel.app)

## 💻 Tech Stack

- **Frontend Framework**: React 19.2.6
- **Build Tool**: Vite 8.0.12
- **Styling**: CSS3 with responsive design
- **Icons**: Lucide React 1.17.0
- **Email Service**: EmailJS 3.2.0
- **Linting**: ESLint 10.3.0

## 📋 Project Structure

```
uponlytech/
├── public/                    # Static assets
├── src/
│   ├── components/           # React components
│   │   ├── Header/          # Navigation header
│   │   ├── Hero/            # Hero section with animated text
│   │   ├── AboutSMOS/       # Product overview & features
│   │   ├── HowItWorks/      # Process explanation
│   │   ├── Capabilities/    # Feature showcase
│   │   ├── Impact/          # Results & social proof
│   │   └── BookDemo/        # Demo booking form
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   ├── App.css              # Global styles
│   └── index.css            # Base styles
├── package.json             # Dependencies & scripts
└── vite.config.js          # Vite configuration
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
The application will run at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🧹 Code Quality

Run ESLint to check code quality:
```bash
npm run lint
```

## 📦 Key Features Implemented

### 1. **Responsive Design**
   - Mobile-first approach
   - Adaptive layouts for all screen sizes
   - Smooth animations and transitions

### 2. **Interactive Components**
   - Animated hero section with rotating feature highlights
   - Dynamic company carousel
   - Email-based booking form integration
   - Activity tracking visualization

### 3. **Performance Optimized**
   - Fast HMR (Hot Module Replacement) with Vite
   - Optimized CSS and component structure
   - Efficient re-render patterns

### 4. **Accessibility**
   - Semantic HTML structure
   - ARIA labels where appropriate
   - Keyboard navigation support

## 🤝 Contributing

This is a production project deployed on Vercel. For contributions, please follow the existing code structure and style conventions.

## 📝 License

All rights reserved - SMOS Project
