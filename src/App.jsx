import Hero from "./components/layout/Hero.jsx";
import HowItWorks from "./components/layout/HowItWorks.jsx";
import WhyChooseUs from "./components/layout/WhyChooseUs.jsx";
import Testimonials from "./components/layout/Testimonials.jsx";
import ContactForm from "./components/layout/ContactForm.jsx";
import ChatWidget from "./components/layout/ChatWidget.jsx";

export default function App() {
  return (
    <main className="bg-primary font-space">
      <section id="home">
        <Hero />
      </section>
      <section id="howitworks">
        <HowItWorks />
      </section>
      <section id="whychooseus">
        <WhyChooseUs />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <ChatWidget />
    </main>
  );
}
