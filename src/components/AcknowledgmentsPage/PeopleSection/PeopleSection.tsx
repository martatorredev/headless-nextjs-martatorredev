import { PEOPLE_ICON } from "@/images";
import Image from "next/image";

const PeopleSection = () => {
  return (
    <section className="flex flex-col items-center w-full max-w-4xl px-8 pb-12 mx-auto mt-8">
      <Image src={PEOPLE_ICON} width={80} height={80} alt="people" />
      <h2 className="mt-4 text-3xl text-center uppercase text-appBlue">
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
        <p className="mt-4 text-xl text-white">
          Photography:
          <a
            href="https://www.flickr.com/photos/weikoatwordcamps/albums"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 mr-1 underline cursor-pointer hover:no-underline hover:text-appGreen"
          >
            Weiko
          </a>
          Nilo Vélez and Sara Cue
        </p>
        <p className="mt-4 text-xl text-white">
          Legal Texts:
          <a
            href="https://marinabrocca.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 underline cursor-pointer hover:no-underline hover:text-appGreen"
          >
            Marina Brocca
          </a>
        </p>
        <p className="mt-4 text-xl text-white">Development: Me 😎</p>
      </div>
    </section>
  );
};

export default PeopleSection;
