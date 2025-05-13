import { motion } from "motion/react";
import { Link } from "react-scroll";
import { FiArrowUpRight } from "react-icons/fi";

const HeroText = () => {
  return (
    <div className="text-center lg:text-left space-y-5 relative z-10 lg:ml-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-block bg-secondary/10 rounded-full text-secondary text-sm font-medium px-4 py-2 mb-5">
        Sell Your Unused Software Licenses
      </motion.div>

      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative text-3xl sm:text-5xl lg:text-5xl text-cloud font-bold leading-tight">
        Turn Unused Software
        <span className="block text-secondary mt-1 md:mt-3">
          Into Cash Instantly
        </span>
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6 }}
          className="block w-32 h-1 bg-gradient-to-r from-secondary/50 to-primary/50 mt-6 mx-auto lg:mx-0"
        />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="relative text-lg text-cloud/80 mt-6 mx-auto lg:mx-0 max-w-xl">
        SoftSell helps you sell unused software licenses securely and get paid
        fast. Join thousands of satisfied sellers.
      </motion.p>

      <div className="flex justify-center lg:justify-start">
        <Link to="contact" smooth>
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative bg-secondary hover:bg-secondary/90 px-8 py-3 font-medium rounded-full flex items-center justify-center transition-all shadow-lg shadow-secondary/20 mt-6">
            Get Free Valuation <FiArrowUpRight className="text-lg" />
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default HeroText;
