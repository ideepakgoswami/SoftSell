import WhyChooseCards from "../ui/WhyChooseCards";

const WhyChooseUs = () => {
  return (
    <section className="bg-cloud/80 dark:bg-primary/90 px-4 py-16">
      {/* Text */}
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-primary dark:text-cloud font-space mb-4 tracking-tight">
          Why Choose Us?
        </h2>
        <p className="text-primary/70 dark:text-cloud/70 text-lg mb-12">
          We simplify the resale of unused software — safe, fast, and
          user-focused.
        </p>
      </div>

      {/* Cards */}
      <WhyChooseCards />
    </section>
  );
};

export default WhyChooseUs;
