import React from "react";
import { paragraphs } from "./constants";
import classNames from "classnames";

const AboutSection = () => {
  return (
    <section>
      <div className="background-home h-[550px] w-full" />

      <div className="w-full max-w-6xl min-h-[80vh] px-8 mx-auto relative -top-[15rem]">
        <div className="relative -top-[10rem] sm:-top-[5rem]">
          <div className="flex justify-center lg2:absolute -top-[8rem] left-0 self-start p-4 sm:p-32">
            <div className="w-[250px] h-[250px] xs:w-[300px] xs:h-[300px] md:w-[400px] md:h-[400px] rounded-full background-marta-csr" />
          </div>
          <div className="flex flex-col mx-auto lg2:mx-0 gap-4 max-w-[500px] w-full lg2:absolute right-0 lg2:top-40">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={classNames(
                  index === paragraphs.length - 1
                    ? "text-appBlue text-xl"
                    : "text-white"
                )}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
