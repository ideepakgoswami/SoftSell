import HowItWorkCards from "../ui/HowItWorkCards";

const HowItWorks = () => {
  return (
    <section className="bg-cloud/80 dark:bg-primary/90 flex flex-col items-center justify-center px-4 py-16 ">
      {/* Text */}
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-primary dark:text-cloud font-space mb-4 tracking-tight">
          How It Works
        </h2>
        <p className="text-primary/70 dark:text-cloud/70 text-lg mb-12">
          Simple 3-step process to convert your unused software into real money.
        </p>
      </div>

      {/* Cards */}
      <HowItWorkCards />
    </section>
  );
};

export default HowItWorks;
