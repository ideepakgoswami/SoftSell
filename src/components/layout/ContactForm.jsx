import { useState } from "react";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, company, licenseType, message } = data;
    if (!name) {
      alert("Name is required");
      return;
    }
    if (!email.includes("@")) {
      alert("Invalid email");
      return;
    }
    if (!company) {
      alert("Company is required");
      return;
    }
    if (!licenseType) {
      alert("License type is required");
      return;
    }
    if (message.length < 10) {
      alert("Message must be at least 10 characters");
      return;
    }
    alert("Form submitted successfully!");
  };

  return (
    <section
      className="bg-cloud/80 dark:bg-primary/90 px-5 py-16 transition-colors duration-300"
      id="contact">
      {/* Text */}
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-primary dark:text-cloud font-space mb-4 tracking-tight">
          Get in Touch
        </h2>
        <p className="text-primary/70 dark:text-cloud/70 text-lg mb-12">
          Have questions? We're here to help you sell your software licenses.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-gradient-to-br from-secondary/30 to-primary/40 dark:from-secondary/20 dark:to-primary/30 px-6 sm:px-12 py-12 rounded-xl shadow-2xl transition-colors duration-300">
        <div className="space-y-8">
          {/* Name and Email */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-primary dark:text-cloud font-bold text-lg block">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-lg bg-cloud/70 dark:bg-primary/70 p-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-primary dark:text-cloud placeholder-primary/50 dark:placeholder-cloud/50"
                onChange={handleChange}
                value={data.name}
              />
            </div>
            <div className="space-y-2">
              <label className="text-primary dark:text-cloud font-bold text-lg block">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-lg bg-cloud/70 dark:bg-primary/70 p-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-primary dark:text-cloud placeholder-primary/50 dark:placeholder-cloud/50"
                onChange={handleChange}
                value={data.email}
              />
            </div>
          </div>

          {/* Company and License Type */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-primary dark:text-cloud font-bold text-lg block">
                Company
              </label>
              <input
                type="text"
                name="company"
                required
                placeholder="Your company name"
                className="w-full rounded-lg bg-cloud/70 dark:bg-primary/70 p-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-primary dark:text-cloud placeholder-primary/50 dark:placeholder-cloud/50"
                onChange={handleChange}
                value={data.company}
              />
            </div>
            <div className="space-y-2">
              <label className="text-primary dark:text-cloud font-bold text-lg block">
                License Type
              </label>
              <select
                name="licenseType"
                required
                className="w-full rounded-lg bg-cloud/70 dark:bg-primary/70 p-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-primary dark:text-cloud"
                onChange={handleChange}
                value={data.licenseType}>
                <option value="">Select a type</option>
                <option value="Windows Server">Windows Server</option>
                <option value="Office 365">Office 365</option>
                <option value="Adobe">Adobe</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-primary dark:text-cloud font-bold text-lg block">
              Message
            </label>
            <textarea
              name="message"
              required
              placeholder="Tell us about your software license..."
              rows="4"
              className="w-full rounded-lg bg-cloud/70 dark:bg-primary/70 p-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none text-primary dark:text-cloud placeholder-primary/50 dark:placeholder-cloud/50"
              onChange={handleChange}
              value={data.message}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
