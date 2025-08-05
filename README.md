<div align="center">

# 🚀 Omar Temsah - Developer Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.1.0-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="Material UI" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" alt="PRs Welcome" />
  <img src="https://img.shields.io/badge/Maintained-Yes-green.svg?style=for-the-badge" alt="Maintained" />
</p>

<p align="center">
  <strong>A modern, responsive portfolio website built with Next.js 15, featuring dynamic theming, email integration, and a robust content management system.</strong>
</p>

<p align="center">
  <a href="#-demo">Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-usage">Usage</a> •
  <a href="#-deployment">Deployment</a>
</p>

</div>

---

## 🌟 Demo

<div align="center">
  <a href="https://omar-temsah-dev-portfolio.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/🌐%20Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=vercel" alt="Live Demo" />
  </a>
</div>

## ✨ Features

<table>
<tr>
<td>

### 🎨 **Design & UX**
- ✅ Responsive design for all devices
- ✅ Dark/Light theme toggle with system preference
- ✅ Smooth animations and transitions
- ✅ Modern glassmorphism UI effects
- ✅ TypeScript for type safety

</td>
<td>

### 🚀 **Performance**
- ✅ Next.js 15 App Router
- ✅ Server-side rendering (SSR)
- ✅ Image optimization
- ✅ SEO optimized
- ✅ Lighthouse score 95+

</td>
</tr>
<tr>
<td>

### 📧 **Contact System**
- ✅ Production-ready email integration
- ✅ Gmail OAuth2 authentication
- ✅ Form validation with Zod
- ✅ Rate limiting protection
- ✅ Email templates (HTML/Text)

</td>
<td>

### 🛠️ **Content Management**
- ✅ Dynamic project showcase
- ✅ Skills categorization
- ✅ Database-driven content
- ✅ Admin API routes
- ✅ Real-time data updates

</td>
</tr>
</table>

## 🛠️ Tech Stack

<div align="center">

### **Frontend**
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="Material UI" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />

### **Backend & Database**
<img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma" />
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
<img src="https://img.shields.io/badge/Nodemailer-339933?style=for-the-badge&logo=nodemailer&logoColor=white" alt="Nodemailer" />

### **Form & Validation**
<img src="https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hook Form" />
<img src="https://img.shields.io/badge/Zod-000000?style=for-the-badge&logo=zod&logoColor=3068B7" alt="Zod" />
<img src="https://img.shields.io/badge/React%20Hot%20Toast-FF6B6B?style=for-the-badge" alt="React Hot Toast" />

### **Deployment**
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />

</div>

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.17.0 or later)
- **npm** or **yarn** or **pnpm**
- **MongoDB** database (local or cloud)
- **Gmail account** (for email functionality)

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/OmarTemsah99/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Gmail OAuth2 (for contact form)
GMAIL_CLIENT_ID=your_gmail_client_id
GMAIL_CLIENT_SECRET=your_gmail_client_secret
GMAIL_REFRESH_TOKEN=your_gmail_refresh_token
GMAIL_USER=your_email@gmail.com

# Environment
NODE_ENV=development
```

### 4. Gmail OAuth2 Setup

<details>
<summary><strong>📧 Click to expand Gmail setup instructions</strong></summary>

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Gmail API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `https://developers.google.com/oauthplayground`
6. Go to [OAuth Playground](https://developers.google.com/oauthplayground)
7. Select Gmail API v1 → `https://mail.google.com`
8. Authorize and get refresh token
9. Add credentials to `.env.local`

</details>

### 5. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push
```

### 6. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Usage

### **Adding Projects**

```typescript
// POST /api/projects
{
  "title": "Project Name",
  "description": "Project description",
  "image": "image-url",
  "tags": ["React", "Node.js"],
  "demoUrl": "demo-url",
  "githubUrl": "github-url",
  "liveUrl": "live-url"
}
```

### **Adding Skills**

```typescript
// POST /api/skills
{
  "title": "Frontend Development",
  "skills": [
    { "name": "React", "level": 90 },
    { "name": "TypeScript", "level": 85 }
  ]
}
```

### **Contact Form**

The contact form automatically handles:
- ✅ Form validation
- ✅ Rate limiting (5 requests per 10 minutes)
- ✅ Email sending with templates
- ✅ Error handling and user feedback

## 🚨 Common Issues & Solutions

### **Material UI Theme Flickering (SSR)**

<details>
<summary><strong>🔧 Solution for theme flickering</strong></summary>

The app uses `InitColorSchemeScript` to prevent theme flickering:

```tsx
// app/layout.tsx
<InitColorSchemeScript attribute="class" />
```

**Key points:**
- Always use `useMounted()` hook before accessing theme
- Show loading state until client hydration
- Use `suppressHydrationWarning` on `<html>` tag

</details>

### **Environment Variables Not Working**

<details>
<summary><strong>🔧 Environment troubleshooting</strong></summary>

1. Ensure `.env.local` is in root directory
2. Restart development server after changes
3. For Vercel deployment, add env vars in dashboard
4. Use `NEXT_PUBLIC_` prefix for client-side variables

</details>

### **Prisma Connection Issues**

<details>
<summary><strong>🔧 Database troubleshooting</strong></summary>

```bash
# Clear Prisma cache
npx prisma generate --force

# Reset database (development only)
npx prisma db push --force-reset

# View data
npx prisma studio
```

</details>

## 🚀 Deployment

### **Deploy to Vercel**

<div align="center">
  <a href="https://vercel.com/new/clone?repository-url=https://github.com/your-username/portfolio">
    <img src="https://vercel.com/button" alt="Deploy with Vercel"/>
  </a>
</div>

1. **Connect Repository** to Vercel
2. **Add Environment Variables** in Vercel dashboard
3. **Deploy** - automatic builds on push

### **Environment Variables for Production**

Add these in Vercel dashboard → Settings → Environment Variables:

```
MONGODB_URI=your_production_mongodb_uri
GMAIL_CLIENT_ID=your_gmail_client_id
GMAIL_CLIENT_SECRET=your_gmail_client_secret
GMAIL_REFRESH_TOKEN=your_gmail_refresh_token
GMAIL_USER=your_email@gmail.com
NODE_ENV=production
```

### **Gmail OAuth2 for Production**

Don't forget to add your Vercel domain to Google Cloud Console:
- `your-app.vercel.app`
- `vercel.app` (for preview deployments)

## 📁 Project Structure

```
├── app/
│   ├── api/                 # API routes
│   │   ├── email/          # Contact form endpoint
│   │   └── skills/         # Skills CRUD
│   ├── components/         # Reusable components
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   └── layout.tsx         # Root layout
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── client.ts          # Prisma client
└── public/                # Static assets
```

## 🔧 Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npx prisma generate  # Generate Prisma client
npx prisma db push   # Push schema changes
npx prisma studio    # Open Prisma Studio
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Author

<div align="center">

**Omar Temsah**

<a href="https://github.com/OmarTemsah99">
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
</a>
<a href="https://tinyurl.com/O-T-T-Linkedin">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
</a>
<a href="mailto:omartemsah99@gmail.com">
  <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
</a>

</div>

---

<div align="center">

### 🌟 If you found this project helpful, please give it a star! ⭐

**Made with ❤️ and lots of ☕**

</div>
