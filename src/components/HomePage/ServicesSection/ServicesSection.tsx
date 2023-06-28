import Image from "next/image";
import React from "react";
import { servicesItems } from "./constants";

const ServicesSection = () => {
  return (
    <section className="w-full max-w-6xl px-8 pt-24 pb-24 mx-auto text-center">
      <div className="flex flex-wrap justify-center gap-32" id="services">
        {servicesItems.map(({ title, description, iconPath, cta }) => (
          <div
            key={title}
            className="flex flex-col items-center  max-w-[410px] w-full"
          >
            <Image src={iconPath} alt={title} width={120} height={120} />
            <h3 className="mt-8 text-[1.875rem] font-bold text-white uppercase">
              {title}
            </h3>
            <div className="mt-4 text-center">
              {description.map((item) => (
                <p key={item} className="mb-4 text-white">
                  {item}
                </p>
              ))}
            </div>
            <a className="px-2 underline cursor-pointer text-appGreen hover:bg-appGreen hover:text-black">
              {cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
