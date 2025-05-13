import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { testimonials } from "../../data/data";

const Testimonials = () => {
  return (
    <section className="bg-cloud/80 px-5 py-16 dark:bg-primary/90">
      {/* Text */}
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-primary dark:text-cloud font-space mb-4 tracking-tight">
          Testimonials
        </h2>
        <p className="text-primary/70 dark:text-cloud/70 text-lg mb-12">
          Hear what our happy customers have to say.
        </p>
      </div>

      {/* TESTIMONIALS */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {testimonials.map((item) => {
          return (
            <SwiperSlide>
              <div className="bg-gradient-to-br from-secondary/20 via-primary/20 to-cloud/40 dark:from-secondary/20 dark:to-primary/30 rounded-3xl sm:p-20 p-10 shadow-xl hover:shadow-2xl transition-all duration-300 text-center flex flex-col items-center overflow-hidden gap-10">
                <p className="text-primary/70 sm:text-lg text-sm dark:text-cloud/70">
                  {item.quote}
                </p>
                <div>
                  <h3 className="text-primary dark:text-cloud font-bold">
                    {item.name}
                  </h3>
                  <p className="text-primary/70 font-bold sm:text-sm text-xs dark:text-cloud/70">
                    {item.role} at {item.company}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
