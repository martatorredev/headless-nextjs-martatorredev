import { PEOPLE_ICON } from "@/images";
import Image from "next/image";

const PeopleSection = () => {
  return (
    <section>
      <div className="background-home h-[550px] w-full" />
      <div className="flex flex-col items-center w-full max-w-4xl px-8  mx-auto relative -top-[8rem]">
        <Image
          src="/headless/assets/heart-card.svg"
          width={80}
          height={80}
          alt="people"
        />
        <h2 className="mt-4 text-[1.625rem] font-bold text-center uppercase text-appSky">
          Super skilled professionals
        </h2>
        <div className="text-center">
          <p className="mt-4 text-2xl text-white">
            SEO:
            <a
              href="https://seomsaez.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 underline cursor-pointer hover:no-underline hover:text-appGreen"
            >
              María Sáez
            </a>
          </p>
          <p className="mt-4 text-2xl text-white">
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
          <p className="mt-4 text-2xl text-white">
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
          <p className="mt-4 text-2xl text-white">
            Branding:
            <a
              href="https://lllu.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 underline cursor-pointer hover:no-underline hover:text-appGreen"
            >
              Patricia Rueda
            </a>
          </p>
          <div className="flex flex-wrap justify-center mt-4 text-2xl text-white">
            Brand Adaptation:
            <div className="flex flex-wrap justify-center">
              <a
                href="https://elenatitos.com/es/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 mr-1 underline cursor-pointer hover:no-underline hover:text-appGreen"
              >
                Elena Titos
              </a>
              <span>and</span>
              <a
                href="https://treintametros.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 mr-1 underline cursor-pointer hover:no-underline hover:text-appGreen"
              >
                Virginia Oliete
              </a>
            </div>
          </div>

          <p className="mt-4 text-2xl text-white">
            Translation:
            <a
              href="https://www.smithdelafuente.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 underline cursor-pointer hover:no-underline hover:text-appGreen"
            >
              Carolina Smith
            </a>
          </p>

          <div className="flex flex-wrap justify-center mt-4 text-2xl text-white">
            Photography:
            <div className="flex flex-wrap justify-center">
              <a
                href="https://www.flickr.com/photos/weikoatwordcamps/albums"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 mr-1 underline cursor-pointer hover:no-underline hover:text-appGreen"
              >
                Weiko
              </a>
              <span>,</span>
              <a
                href="https://nilovelez.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 mr-1 underline cursor-pointer hover:no-underline hover:text-appGreen"
              >
                Nilo Vélez
              </a>
              <span>and</span>
              <a
                href="https://farutxo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 mr-1 underline cursor-pointer hover:no-underline hover:text-appGreen"
              >
                Farutxo
              </a>
            </div>
          </div>
          <p className="mt-4 text-2xl text-white">
            Legal Texts:
            <a
              href="https://anagavilan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 underline cursor-pointer hover:no-underline hover:text-appGreen"
            >
              Ana Gavilán
            </a>
          </p>
          <p className="mt-4 text-2xl text-white">Development: Me 😎</p>
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
