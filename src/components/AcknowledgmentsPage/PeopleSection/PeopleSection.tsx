import { PEOPLE_ICON } from "@/images";
import Image from "next/image";

const PeopleSection = () => {
  return (
    <section>
      <div className="background-home h-[550px] w-full" />
      <div className="flex flex-col items-center w-full max-w-4xl px-8  mx-auto relative -top-[10rem]">
        <Image
          src="/assets/heart-card.svg"
          width={80}
          height={80}
          alt="people"
        />
        <h2 className="mt-4 text-3xl text-center uppercase text-appSky">
          Super skilled professionals
        </h2>
        <div className="text-center">
          <p className="mt-4 text-xl text-white">
            UX/UI Design:
            <a
              href="https://en.noraferreiros.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 underline cursor-pointer hover:no-underline hover:text-appGreen"
            >
              Nora Ferreirós
            </a>
          </p>
          <p className="mt-4 text-xl text-white">
            Copywriting:
            <a
              href="https://celigaroe.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 underline cursor-pointer hover:no-underline hover:text-appGreen"
            >
              Celi Garoe
            </a>
          </p>
          <p className="mt-4 text-xl text-white">
            SEO:
            <a
              href="https://seomsaez.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 underline cursor-pointer hover:no-underline hover:text-appGreen"
            >
              María Saez
            </a>
          </p>
          <p className="mt-4 text-xl text-white">
            Photography:
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 mr-1 underline cursor-pointer hover:no-underline hover:text-appGreen"
            >
              Eva Jimenez
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
