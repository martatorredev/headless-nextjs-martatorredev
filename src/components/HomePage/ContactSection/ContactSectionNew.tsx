import Image from "next/image";

const ContactSectionNew = () => {
  return (
    <section className="max-h-[130vh] md:max-h-[100vh] pt-24">
      <div className="background-home h-[550px] w-full" />
      <div className="w-full max-w-6xl px-8 mx-auto">
        <div
          id="contact"
          className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center relative -top-[23rem]"
        >
          <Image
            src="/assets/logo-nombre.svg"
            alt="logo"
            width={400}
            height={200}
          />

          <h2 className="mt-16 text-4xl uppercase text-appGreen">
            What are you waiting for to launch the development of your website?
          </h2>
          <p className="mt-4 text-xl text-white">
            Tell me what’s on your mind. I help you find the solution that best
            suits your project.
          </p>
          <button className="px-12 py-4 mt-24 transition bg-appGreen hover:bg-appBlue hover:text-white">
            <h3 className="text-xl font-bold uppercase sm:text-2xl">
              Book a free session
            </h3>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionNew;
