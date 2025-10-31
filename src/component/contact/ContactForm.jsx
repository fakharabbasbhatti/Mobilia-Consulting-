import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16 pb-16 bg-linear-to-b from-[#468DE0] via-[#468DE1] to-[#2b6cb0] relative overflow-hidden">
      {/* 🔹 Glowing background lights (like Hero) */}
      <div className="absolute top-20 left-16 w-[400px] h-[400px] bg-[#468DE0] opacity-25 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-10 right-20 w-[300px] h-[300px] bg-[#1E3F73] opacity-30 blur-[120px] rounded-full"></div>

      {/* 🔹 Section Header */}
      <div
        data-aos="fade-down"
        className="text-center mb-12 z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Let’s <span className="text-[#ffde59]">Talk</span> About Your{" "}
          <span className="text-white">Next Project</span>
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Have a question, proposal, or project idea? I’m here to collaborate
          and turn your ideas into reality.
        </p>
      </div>

      {/* 🔹 Main Contact Section */}
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl z-10">
        {/* 📬 Contact Info */}
        <div data-aos="fade-right" className="flex-1 flex flex-col space-y-6">
          {[
            {
              icon: <Mail size={22} />,
              title: "Email",
              value: "example@email.com",
            },
            {
              icon: <Phone size={22} />,
              title: "Phone",
              value: "+00 123 4567890",
            },
            {
              icon: <MapPin size={22} />,
              title: "Location",
              value: "Lahore, Pakistan",
            },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 200}
              className="flex items-center gap-4 bg-[#10234D]/60 border border-[#ffffff22] shadow-[0_0_20px_rgba(70,141,224,0.2)] rounded-2xl p-5 hover:shadow-[0_0_25px_rgba(70,141,224,0.6)] transition-all duration-300 backdrop-blur-sm"
            >
              <div className="p-3 bg-linear-to-r from-[#468DE0] to-[#61A5F9] rounded-full text-white shadow-lg">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.value}</p>
              </div>
            </div>
          ))}

          {/* 🌍 Embedded Map */}
         <div
  data-aos="zoom-in"
  className="rounded-2xl overflow-hidden border border-[#ffffff22] shadow-lg hover:shadow-[0_0_25px_rgba(70,141,224,0.5)] transition-all duration-300 mt-2 w-full h-[180px] bg-[#10234D]/60"
>
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55617.85035178398!2d71.696384!3d29.396172800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1761911535553!5m2!1sen!2s"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>

        {/* ✉️ Contact Form */}
        <form
          data-aos="fade-left"
          onSubmit={(e) => e.preventDefault()}
          className="flex-1 bg-[#10234D]/60 border border-[#ffffff22] rounded-3xl shadow-lg p-8 md:p-10 backdrop-blur-md"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Send Me a Message
          </h3>

          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 bg-[#122a5c]/40 border border-[#ffffff33] text-white placeholder-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61A5F9] transition-all duration-300"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                className="w-full p-3 bg-[#122a5c]/40 border border-[#ffffff33] text-white placeholder-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61A5F9] transition-all duration-300"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 bg-[#122a5c]/40 border border-[#ffffff33] text-white placeholder-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61A5F9] transition-all duration-300"
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Your Company"
              className="w-full p-3 bg-[#122a5c]/40 border border-[#ffffff33] text-white placeholder-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61A5F9] transition-all duration-300"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 bg-[#122a5c]/40 border border-[#ffffff33] text-white placeholder-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61A5F9] resize-none transition-all duration-300"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-6 w-full py-3 rounded-lg bg-linear-to-r from-[#468DE0] to-[#61A5F9] text-white font-semibold tracking-wide hover:shadow-[0_0_25px_rgba(70,141,224,0.6)] hover:scale-[1.03] transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
