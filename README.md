# Portfolio Website - Harsh Marthak

A modern, fully responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, elegant design with cool color tones (teal, blue, lavender gradients), and an animated background.

## 🚀 Features

- **Modern Stack**: Built with React 19, Vite 7, and Tailwind CSS 3
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Animated Background**: Floating particles and gradient waves
- **Responsive Design**: Fully responsive across all devices
- **Smooth Scrolling**: Native smooth scroll navigation between sections
- **Interactive Modals**: Animated modals for project and experience details
- **Beautiful UI**: Modern gradient designs with teal, blue, and lavender color scheme
- **Performance**: Optimized for fast loading and smooth interactions

## 📦 Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Icons** - Additional icon library

## 🛠️ Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
my-portfolio-2025/
├── public/                    # Static assets
├── src/
│   ├── components/           # React components
│   │   ├── AnimatedBackground.jsx  # Animated background with particles
│   │   ├── Navbar.jsx        # Sticky navigation header
│   │   ├── Footer.jsx        # Footer with social links
│   │   ├── Hero.jsx          # Hero/Landing section
│   │   ├── About.jsx         # About section with profile picture
│   │   ├── Experience.jsx    # Experience section with modal cards
│   │   ├── Skills.jsx        # Skills section with animated grid
│   │   ├── Projects.jsx      # Projects section with detail modals
│   │   ├── Testimonials.jsx   # Testimonials carousel with modals
│   │   ├── Contact.jsx       # Contact form and information
│   │   └── Modal.jsx         # Reusable modal component
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles with Tailwind
├── index.html                # HTML template
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Sections

1. **Hero Section**: Fullscreen banner with animated heading and scroll indicator
2. **About Section**: Personal introduction with profile picture and glow effect
3. **Experience Section**: Professional experience cards that open detailed modals
4. **Skills Section**: Categorized skills with animated progress bars
5. **Projects Section**: Project showcase with detail modals and live demo links
6. **Testimonials Section**: Client testimonials with carousel navigation
7. **Contact Section**: Contact form with phone number and social links

## 🎨 Customization

### Update Personal Information

1. **Hero Component** (`src/components/Hero.jsx`):
   - Change name and title
   - Update description text

2. **About Component** (`src/components/About.jsx`):
   - Update personal story
   - Replace profile picture placeholder

3. **Experience Component** (`src/components/Experience.jsx`):
   - Replace experience data with your own
   - Update images, descriptions, and technologies

4. **Skills Component** (`src/components/Skills.jsx`):
   - Add/remove skills
   - Adjust skill levels (percentages)

5. **Projects Component** (`src/components/Projects.jsx`):
   - Replace project data with your own projects
   - Update images, links, and technologies

6. **Testimonials Component** (`src/components/Testimonials.jsx`):
   - Update testimonial data
   - Replace client images and information

7. **Contact Component** (`src/components/Contact.jsx`):
   - Update phone number: `+971 525734548`
   - Update email address
   - Modify social media links
   - **EmailJS Setup** (see below)

8. **Footer Component** (`src/components/Footer.jsx`):
   - Update social media links

### Styling

- **Colors**: Modify `tailwind.config.js` to change the color scheme (teal, blue, lavender)
- **Fonts**: Update font imports in `index.html` and `tailwind.config.js`
- **Animations**: Adjust animation properties in components using Framer Motion
- **Background**: Customize animated background in `AnimatedBackground.jsx`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📧 EmailJS Setup (Contact Form)

The contact form uses EmailJS to send emails. Follow these steps to set it up:

1. **Sign up for EmailJS**:
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Create a free account

2. **Create an Email Service**:
   - Go to Email Services in the dashboard
   - Add a new service (Gmail, Outlook, etc.)
   - Follow the setup instructions for your email provider
   - Copy the **Service ID**

3. **Create an Email Template**:
   - Go to Email Templates in the dashboard
   - Create a new template
   - Use these template variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_email}}` - Your email (harshmarthak63@gmail.com)
   - Copy the **Template ID**

4. **Get your Public Key**:
   - Go to Account > API Keys
   - Copy your **Public Key**

5. **Configure Environment Variables**:
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id_here
     VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
     VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
     ```
   - Replace the placeholder values with your actual IDs and key

6. **Restart the development server**:
   ```bash
   npm run dev
   ```

**Note**: The `.env` file should be added to `.gitignore` to keep your keys secure. For production deployment, add these environment variables in your hosting platform's settings (Vercel, Netlify, etc.).

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

The `dist` folder will contain the production-ready files.

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

## 🎯 Key Features Explained

- **Smooth Scrolling**: Navigation links use smooth scroll to sections
- **Animated Background**: Canvas-based particles with gradient overlays
- **Modal System**: Reusable modal component with backdrop blur
- **Responsive Design**: Mobile-first approach with breakpoints
- **Performance**: Optimized animations and lazy loading
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ using React, Vite, Tailwind CSS, and Framer Motion
