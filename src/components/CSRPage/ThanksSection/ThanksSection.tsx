import Image from "next/image";
import { paragraphs } from "./constants";
import { THANKS_ICON } from "@/images";

const ThanksSection = () => {
  return (
    <section className="flex items-center justify-center min-h-screen py-8">
      <div className="flex flex-col items-center px-8 ">
        <div className="flex items-center gap-1 mt-12 xs:gap-4">
          <div className="h-[300px] w-[4px] bg-appGreen" />
          <div className="w-full max-w-3xl border-4 vision-gradient">
            <div className="flex flex-col items-center p-4 xs:p-14">
              <Image src={THANKS_ICON} alt="thanks" width={80} height={80} />
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="mt-4 text-center text-white">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="h-[300px] w-[4px] bg-appBlue" />
        </div>
      </div>
    </section>
  );
};

export default ThanksSection;
