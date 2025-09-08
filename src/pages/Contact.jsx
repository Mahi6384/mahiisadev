import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "../components/Container";
import Card from "../components/Card";
import NeonButton from "../components/NeonButton";
import GradientText from "../components/GradientText";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message, try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="border-t border-white/5 py-16">
      <Container className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold text-white">
            <GradientText>CONTACT ME</GradientText>
          </h3>
          <p className="mt-4 text-white/80">Get in touch 💬</p>
          <div className="mt-6 space-y-3 text-white/80">
            {/* Email */}
            <div>
              <p className="text-sm uppercase tracking-widest text-white/50 flex items-center gap-2">
                Contact <FaEnvelope />
              </p>
              <a
                href="mailto:mahijaincodes@gmail.com"
                className="text-fuchsia-200/60 hover:underline"
              >
                mahijaincodes@gmail.com
              </a>
            </div>

            {/* Socials */}
            <div>
              <p className="text-sm uppercase tracking-widest text-white/50">
                Connect
              </p>
              <div className="flex gap-3 mt-1 text-fuchsia-200/60 text-lg">
                <a
                  href="https://github.com/Mahi6384"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/mahijain6384/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                {/* <a
                  href="https://twitter.com/YOUR_TWITTER_HANDLE"
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                {/* <FaTwitter />
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <Card>
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-0 placeholder:text-white/40 focus:border-sky-400/40"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-0 placeholder:text-white/40 focus:border-sky-400/40"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-0 placeholder:text-white/40 focus:border-sky-400/40"
            />
            <NeonButton className="w-full">
              {loading ? "SENDING..." : "SEND"}
            </NeonButton>
          </form>
        </Card>
      </Container>
    </section>
  );
}

export default Contact;
