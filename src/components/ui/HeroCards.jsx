import { motion } from "framer-motion";
import { FiUser, FiDollarSign } from "react-icons/fi";

export const SellerCard = () => {
  return (
    //   main div
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: "spring" }}
      className="bg-cloud pl-5 pr-32 py-4 rounded-xl relative z-20">
      {/* icon + name  */}
      <div className="flex items-center gap-3 mb-3">
        <FiUser className="text-4xl text-secondary bg-secondary/20 rounded-full p-2" />
        <div>
          <div className="font-semibold text-primary">Your Software</div>
          <div className="text-xs text-primary/60">License: Office 365</div>
        </div>
      </div>
      {/* price */}
      <div className="text-2xl font-bold text-primary mb-1">$1,200</div>
      <div className="text-xs text-primary/60 mb-4">Estimated Value</div>

      {/* buttons  */}
      <div className="flex gap-5">
        <button className="bg-secondary text-cloud px-3 py-1 text-xs font-medium rounded-full">
          Sell Now
        </button>
        <button className=" text-primary text-xs font-medium rounded-full">
          Details
        </button>
      </div>
    </motion.div>
  );
};

export const BuyerCard = () => {
  return (
    //   main div
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: "spring" }}
      className="bg-cloud pl-5 pr-32 py-4 rounded-xl relative z-20">
      {/* icon + name  */}
      <div className="flex items-center gap-3 mb-3">
        <FiDollarSign className="text-4xl text-primary bg-primary/20 rounded-full p-2" />
        <div>
          <div className="font-semibold text-primary">Buyer Offer</div>
          <div className="text-xs text-primary/60">Verified Buyer</div>
        </div>
      </div>
      {/* price */}
      <div className="text-2xl font-bold text-primary mb-1">$1,200</div>
      <div className="text-xs text-primary/60 mb-4">Estimated Value</div>

      {/* buttons  */}
      <div className="flex gap-5">
        <button className="bg-primary text-cloud px-3 py-1 text-xs font-medium rounded-full">
          Buy Now
        </button>
        <button className=" text-primary text-xs font-medium rounded-full">
          Negotiate
        </button>
      </div>
    </motion.div>
  );
};
