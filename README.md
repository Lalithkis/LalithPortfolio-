# Portfolio Website

This is a modern portfolio website built with Next.js, React, and Tailwind CSS. It features a contact form that sends messages to your email using Nodemailer.

## Features
- Responsive and modern UI
- Animated hero section
- Portfolio, skills, about, and contact sections
- Contact form with email sending (via Gmail SMTP)
- Easy deployment to Vercel

## Getting Started

### 1. Clone the repository
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install dependencies
```sh
npm install
```

### 3. Configure environment variables
Create a `.env.local` file in the root directory:
```env
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=your_gmail@gmail.com
```
- **EMAIL_USER**: Your Gmail address
- **EMAIL_PASS**: [Gmail App Password](https://support.google.com/accounts/answer/185833?hl=en) (not your normal password)
- **EMAIL_TO**: The email address to receive contact form messages

### 4. Run the development server
```sh
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view your site.

## Deployment

### Deploy to Vercel
1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com), import your repo, and set the environment variables in the Vercel dashboard.
3. Deploy!

## Folder Structure
- `app/` - Next.js app directory (pages, API routes)
- `components/` - React components
- `public/` - Static files (images, resume PDF, etc.)

## Contact
For any questions, reach out via the contact form or email:lalithkishore325@gmail.com

---

**Note:** Never commit your `.env.local` file to GitHub. It should be in your `.gitignore`.
