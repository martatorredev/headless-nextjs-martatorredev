import Image from "next/image";
import { LAST_PARAGRAPH, paragraphs } from "./constants";
import { THANKS_ICON } from "@/images";

const ThanksSection = () => {
  return (
    <section className="flex items-center justify-center min-h-screen py-8">
      <div className="flex flex-col items-center px-8 ">
        <div className="flex items-center gap-1 mt-12 xs:gap-4">
          <div className="w-full max-w-3xl">
            <div className="flex flex-col items-center p-4 xs:p-14">
              <Image
                src="/assets/heart.svg"
                alt="thanks"
                width={200}
                height={200}
              />
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="mt-4 text-center text-white">
                  {paragraph}
                </p>
              ))}
              <p className="mt-4 text-center text-appGreen">{LAST_PARAGRAPH}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThanksSection;
