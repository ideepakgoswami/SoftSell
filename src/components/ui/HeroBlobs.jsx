import { motion } from "motion/react";

const HeroBlobs = () => {
  return (
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <div className="absolute w-[600px] h-[600px] bg-secondary/10 rounded-full -left-40 -top-40 blur-3xl"></div>
      <div className="absolute w-[600px] h-[600px] bg-secondary/10 rounded-full -bottom-40 -right-40 blur-3xl"></div>
      <div className="absolute w-[800px] h-[800px] bg-secondary/5 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
    </motion.div>
  );
};

export default HeroBlobs;
