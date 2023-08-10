import Image from "next/image";
import ContactForm from "./ContactForm";
import { LOGO_ICON } from "@/images";

const ContactSection = () => {
  return (
    <section className="w-full max-w-6xl px-8 pt-24 pb-24 mx-auto">
      <div
        id="contact"
        className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center"
      >
        <Image src={LOGO_ICON} alt="logo" width={200} height={190} />

        <h2 className="mt-16 text-4xl uppercase text-appGreen">
          What are you waiting for to launch the development of your website?
        </h2>
        <p className="mt-4 text-xl text-white">
          Tell me what’s on your mind. I help you find the solution that best
          suits your project.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
