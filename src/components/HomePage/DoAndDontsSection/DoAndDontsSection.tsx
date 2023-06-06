import Image from "next/image";
import { DESCRIPTION, TITLE, items } from "./constants";
import { CROWN_ICON } from "@/images";

const DoAndDontsSection = () => {
  return (
    <section className="w-full max-w-6xl px-8 pt-24 pb-24 mx-auto">
      <div className="flex flex-col items-center grid-cols-2 gap-16 md:grid">
        <div className="border-t-[22px] md:border-t-0 md:border-l-[22px] max-w-[450px] w-full pt-5 md:pt-0 md:pl-5 border-appBlue md:self-start">
          <h2 className="pt-4 text-4xl text-white uppercase">{TITLE}</h2>
          <p className="pb-4 mt-8 text-lg text-white">{DESCRIPTION}</p>
        </div>
        <div className="flex flex-col w-full gap-12 max-w-[500px]">
          {items.map(({ title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center sm:items-start sm:flex-row gap-4 max-w-[500px] w-full"
            >
              <Image src={CROWN_ICON} alt="crown" width={60} height={60} />
              <div>
                <h3 className="text-2xl text-center uppercase text-appBlue sm:text-start">
                  {title}
                </h3>
                <p className="mt-2 text-center text-white sm:text-start">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoAndDontsSection;
