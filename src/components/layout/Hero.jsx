import HeroAnimate from "../ui/HeroAnimate";
import Header from "./Header";
import HeroText from "../ui/HeroText";
import HeroBlobs from "../ui/HeroBlobs";

const Hero = () => {
  return (
    <section className="min-h-screen overflow-hidden relative pt-32">
      {/* HEADER */}
      <Header />

      {/* HERO */}
      {/* Background Blobs */}
      <HeroBlobs />

      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col flex-1 lg:flex-row gap-12 items-center">
          {/* Text Content */}
          <HeroText />

          {/* HeroAnimate */}
          <div className="flex-1 flex items-center justify-center lg:mt-0">
            <HeroAnimate />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
