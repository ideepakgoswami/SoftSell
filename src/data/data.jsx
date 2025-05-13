import {
  FaShieldAlt,
  FaBolt,
  FaHandshake,
  FaUserCheck,
  FaUpload,
  FaCalculator,
  FaMoneyCheckAlt,
} from "react-icons/fa";

// NAVBAR LINKS
export const navLinks = [
  "Home",
  "How It Works",
  "Why Choose Us",
  "Testimonials",
  "Contact",
];

// HOW IT WORKS STEPS
export const steps = [
  {
    icon: <FaUpload className="text-2xl text-secondary drop-shadow" />,
    title: "Upload License",
    description: "Provide your unused software license details securely.",
  },
  {
    icon: <FaCalculator className="text-2xl text-secondary drop-shadow" />,
    title: "Get Valuation",
    description: "We evaluate your license and provide a fair market price.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-2xl text-secondary drop-shadow" />,
    title: "Get Paid",
    description: "Accept the offer and receive instant payment directly.",
  },
];

// WHY CHOOSE US FEATURES
export const features = [
  {
    icon: (
      <FaShieldAlt className="w-12 h-12 bg-cloud/80 dark:bg-primary/80 bg-gradient-to-br from-secondary/10 via-primary/10 to-cloud/30 shadow-lg group-hover:scale-110 transition-transform p-3 rounded-full text-secondary drop-shadow " />
    ),
    title: "Secure Transactions",
    description: "Your data and payment are protected with strong encryption.",
  },
  {
    icon: (
      <FaBolt className="w-12 h-12 bg-cloud/80 dark:bg-primary/80  bg-gradient-to-br from-secondary/10 via-primary/10 to-cloud/30 shadow-lg group-hover:scale-110 transition-transform p-3 rounded-full text-secondary drop-shadow " />
    ),
    title: "Instant Payouts",
    description: "Fast payments with zero processing delays.",
  },
  {
    icon: (
      <FaHandshake className="w-12 h-12 bg-cloud/80 dark:bg-primary/80 bg-gradient-to-br from-secondary/10 via-primary/10 to-cloud/30 shadow-lg group-hover:scale-110 transition-transform p-3 rounded-full text-secondary drop-shadow " />
    ),
    title: "Trusted by Many",
    description: "Thousands have sold licenses safely through us.",
  },
  {
    icon: (
      <FaUserCheck className="w-12 h-12 bg-cloud/80 dark:bg-primary/80 bg-gradient-to-br from-secondary/10 via-primary/10 to-cloud/30 shadow-lg group-hover:scale-110 transition-transform p-3 rounded-full text-secondary drop-shadow " />
    ),
    title: "Hassle-Free",
    description: "No technical knowledge needed. Just upload and relax.",
  },
];

// TESTIMONIALS
export const testimonials = [
  {
    name: "Ankit Sharma",
    role: "IT Manager",
    company: "TechNova Pvt Ltd",
    quote:
      "Selling our unused licenses was seamless! Got paid quickly and the support team was super helpful. The platform made what seemed complicated, incredibly simple.",
  },
  {
    name: "Riya Patel",
    role: "Software Consultant",
    company: "CodeCraft Solutions",
    quote:
      "Great platform! I didn't know I could sell old licenses until I found this. The valuation was fair and the payment process was lightning fast. Highly recommend it!",
  },
  {
    name: "Vikram Singh",
    role: "CTO",
    company: "InnovateTech",
    quote:
      "As a tech company, we had several unused licenses. This platform helped us recover significant value. The team's expertise in software licensing is impressive.",
  },
];
