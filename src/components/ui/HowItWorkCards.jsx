import { motion } from "motion/react";
import { steps } from "../../data/data";

const HowItWorkCards = () => {
  return (
    <motion.div
      animate={{ y: [0, 2, 0] }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex gap-32">
      {/* TIMELINE  */}
      <div className="flex flex-col items-center">
        <div className="w-1 h-full bg-gradient-to-b from-secondary to-secondary/50 rounded-full"></div>
      </div>
      {/* CARDS  */}
      <div className="flex flex-col gap-14">
        {steps.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-cloud dark:bg-gradient-to-br dark:from-primary/90 dark:to-secondary/60 text-center rounded-lg sm:py-6 py-4 sm:px-20 px-5 space-y-3 shadow-xl relative 
                transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-white">
              <div className="absolute top-1/2 -translate-y-1/2 -left-28 text-secondary flex items-center space-x-4">
                {/* connecting line */}
                <span className="absolute sm:w-10 w-6 h-1 -left-5 bg-secondary block"></span>
                {/* number */}
                <span className="bg-secondary text-white py-1 px-3 rounded-full font-bold">
                  {index + 1}
                </span>
                {/* icon */}
                <div className=" bg-cloud dark:bg-cloud/70  p-2 rounded-full shadow-md">
                  {item.icon}
                </div>
              </div>
              {/* title */}
              <h3 className="sm:text-xl text-lg text-primary font-bold">
                {item.title}
              </h3>
              {/* description */}
              <p className="text-primary/70 sm:text-base text-sm max-w-md mx-auto">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default HowItWorkCards;
