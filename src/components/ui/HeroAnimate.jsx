import { motion } from "framer-motion";
import { SellerCard, BuyerCard } from "./HeroCards";
import { FiArrowDown } from "react-icons/fi";

const HeroAnimate = () => {
  return (
    <div className="flex flex-col gap-14">
      <SellerCard />
      <div className="flex items-center justify-center relative ">
        <div className="absolute h-28 w-1 bg-secondary/50" />
        <motion.div
          animate={{ y: [-80, 80] }}
          transition={{ repeat: Infinity, duration: 1.3 }}
          className="absolute top-0 ">
          <FiArrowDown className="text-3xl text-secondary/60" />
        </motion.div>
      </div>
      <BuyerCard />
    </div>
  );
};

export default HeroAnimate;
