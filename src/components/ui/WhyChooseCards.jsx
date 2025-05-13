import { features } from "../../data/data";

const WhyChooseCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
      {features.map((item, index) => {
        return (
          <div className="bg-cloud dark:bg-gradient-to-br dark:from-primary/90 dark:to-secondary/60 px-2 py-8 rounded-xl shadow-xl space-y-3">
            <div className="flex items-center justify-center">{item.icon}</div>
            <h3 className="font-bold text-primary dark:text-cloud text-lg text-center">
              {item.title}
            </h3>
            <p className="text-primary/70 dark:text-cloud/70  text-sm text-center">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default WhyChooseCards;
