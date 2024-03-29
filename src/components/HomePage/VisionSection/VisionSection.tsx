import Image from "next/image";
import { CARD_DESCRIPTION, CARD_TITLE, TEXT1, TITLE } from "./constants";
import { VISION_ICON } from "@/images";
import { useMediaQuery } from "react-responsive";
import useMounted from "@/hooks/useMounted";

const VisionSection = () => {
  const isMedium = useMediaQuery({ query: "(min-width: 768px)" });

  const mounted = useMounted();

  if (!mounted) return null;
  return (
    <section className="flex items-center justify-center pt-12 pb-24 sm:pb-48">
      <div className="flex flex-col items-center px-8 ">
        <span className="block mb-4 text-2xl text-center text-appGreen">
          {TEXT1}
        </span>
        <h2 className="text-[1.875rem] font-semibold text-center text-white uppercase">
          {TITLE}
        </h2>
        <div className="w-full max-w-3xl">
          <div className="flex flex-col items-center p-4 xs:p-14">
            <Image
              src={VISION_ICON}
              alt="vision"
              width={isMedium ? 165 : 141}
              height={isMedium ? 165 : 141}
            />
            <h3 className="mt-12 font-semibold text-center text-white uppercase text-[1.5rem]">
              {CARD_TITLE}
            </h3>
            <p className="mt-4 text-center text-white">{CARD_DESCRIPTION}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Old = () => {
  return (
    <section className="min-h-screen pt-24 background-fractal">
      <div className="flex flex-col items-center px-8 ">
        <span className="block mb-4 text-2xl text-center text-appGreen">
          {TEXT1}
        </span>
        <h2 className="text-4xl text-center text-white uppercase">{TITLE}</h2>
        <div className="flex items-center gap-1 mt-12 xs:gap-4">
          <div className="h-[300px] w-[4px] bg-appGreen" />
          <div className="w-full max-w-3xl border-4 vision-gradient">
            <div className="flex flex-col items-center p-4 xs:p-14">
              <Image src={VISION_ICON} alt="vision" width={80} height={80} />
              <h3 className="mt-12 text-xl text-center text-white uppercase xs:text-3xl">
                {CARD_TITLE}
              </h3>
              <p className="mt-4 text-sm text-center text-white xs:text-lg">
                {CARD_DESCRIPTION}
              </p>
            </div>
          </div>
          <div className="h-[300px] w-[4px] bg-appBlue" />
        </div>
      </div>
    </section>
  );
};
export default VisionSection;
