SoftSell – Software License Marketplace
SoftSell is a single-page web app made with React and Vite. It is designed for a fictional startup where users can sell or resell unused software licenses.

Inspired by the clean and modern design of Acquire.com.

Live Demo
Hosted on Vercel

Features
Hero section with a clear message and CTA

Step-by-step “How It Works” process

“Why Choose Us” section with key benefits

Customer testimonials (mock content)

Contact form with validation (no backend)

AI chat widget (hardcoded Q&A, no real LLM)

Dark mode toggle (except for header and hero section)

Meta tags and custom favicon (made using SVG Makers)

Smooth UI animations with Framer Motion

Tech Stack
React + Vite – Frontend and build setup

Tailwind CSS – Styling

Framer Motion – Animations

React Icons – Icon system

React Scroll – Smooth navigation

Hooks – useState, useEffect for interactivity

UI Sections
Hero – Headline, subtext, and CTA

How It Works – Visual 3-step guide

Why Choose Us – Trust-building points

Testimonials – Static reviews

Contact – Validated input form

Chat Widget – Mock AI support

Design Highlights
Primary Color: #0f172a (Dark Blue)

Secondary Color: #3b82f6 (Bright Blue)

Font: Space Grotesk

Favicon: Custom-made SVG

Components
Clean card layouts with hover effects

Buttons with consistent styling and focus states

Sticky navbar with smooth scrolling

Chat UI with message bubbles

Validated forms for contact inputs

Project Structure
css
Copy
Edit
softsell/
├── public/
│ └── favicon.svg
├── src/
│ ├── components/
│ │ ├── layout/
│ │ │ ├── Hero.jsx
│ │ │ ├── HowItWorks.jsx
│ │ │ ├── WhyChooseUs.jsx
│ │ │ ├── Testimonials.jsx
│ │ │ ├── ContactForm.jsx
│ │ │ └── ChatWidget.jsx
│ │ └── ui/
│ │ ├── Navbar.jsx
│ │ ├── Button.jsx
│ │ ├── Card.jsx
│ │ ├── WhyChooseCards.jsx
│ │ ├── TestimonialCard.jsx
│ │ ├── HowItWorksCard.jsx
│ │ ├── ContactInput.jsx
│ │ ├── ChatMessage.jsx
│ │ └── ChatInput.jsx
│ ├── data/
│ │ └── data.jsx
│ ├── styles/
│ │ └── index.css
│ ├── App.jsx
│ └── main.jsx
Installation
Prerequisites
Node.js (18+ recommended)

npm or yarn

Steps
bash
Copy
Edit

# Clone the repository

git clone https://github.com/yourusername/softsell.git

# Go to the project folder

cd softsell

# Install dependencies

npm install

# Start the development server

npm run dev
Build for Production
bash
Copy
Edit
npm run build
Time Spent
Task Time
Planning and UI Setup 1 day
Development + Finishing 1 day
Total 2 days

License
This project is licensed under the MIT License.

Contributing
Open to suggestions. Feel free to fork or raise a pull request.

> > > > > > > 22a2bee (Complete Project)
