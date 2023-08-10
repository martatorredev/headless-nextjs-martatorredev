import useMounted from "@/hooks/useMounted";
import { useMediaQuery } from "react-responsive";
import {
  BUTTON_TEXT,
  ITEM1,
  ITEM2,
  ITEM3,
  ITEM4,
  ITEM5,
  ITEM6,
  TITLE,
} from "./constants";

export default function AboutSection() {
  const mounted = useMounted();

  const isMedium = useMediaQuery({
    query: "(min-width: 768px)",
  });

  if (!mounted) return null;

  return (
    <section className="pt-24">
      <div className="w-full h-[550px] background-home" />
      {isMedium ? <Desktop /> : <Mobile />}
    </section>
  );
}

const Desktop = () => {
  return (
    <div className="relative -top-[7rem] max-w-6xl px-8 mx-auto">
      <div className="relative flex items-center ">
        <div className="absolute z-50">
          <div className="flex w-full">
            <div className="mb-16  w-full  flex items-center  text-left pr-5 justify-end max-w-[300px]">
              <div className="text-right text-white">{ITEM1}</div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="mb-16  w-full  flex items-center  text-left pr-5 justify-end max-w-[300px]">
              <div className="text-right text-white">{ITEM2}</div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="mb-16  w-full  flex items-center  text-left pr-5 justify-end max-w-[300px]">
              <div className="text-right text-white">{ITEM3}</div>
            </div>
          </div>
        </div>

        <div
          id="about"
          className="w-[500px] h-[500px] rounded-full background-marta absolute left-[50%] -translate-x-1/2"
        />

        <div className="absolute right-0 z-50">
          <div className="flex w-full">
            <div className="mb-16  w-full  flex items-center  text-left pl-5 justify-end max-w-[300px]">
              <div className="text-white ">{ITEM4}</div>
            </div>
          </div>
          <div className="flex justify-end w-full">
            <div className="mb-16  w-full  flex items-center  text-left pl-5 justify-end max-w-[300px] text-white">
              {ITEM5}
            </div>
          </div>
          <div className="flex w-full">
            <div className="mb-16  w-full  flex items-center  text-left pl-5 justify-end max-w-[300px]">
              <div className="text-white ">{ITEM6}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-14">
        <h2 className="text-4xl font-semibold text-white uppercase">{TITLE}</h2>
        <button className="px-8 py-2 mt-12 text-lg font-bold uppercase bg-appGreen hover:bg-appBlue hover:text-white">
          {BUTTON_TEXT}
        </button>
      </div>
    </div>
  );
};

const Mobile = () => {
  return (
    <div className="relative -top-[8rem]">
      <div className="flex items-center justify-center max-w-6xl px-8 mx-auto ">
        <div
          id="about"
          className="w-[250px] h-[250px] xs:w-[360px] xs:h-[360px] rounded-full background-marta "
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="mt-5 mb-12 text-4xl font-semibold text-center text-white uppercase">
          {TITLE}
        </h2>
        <div className="grid-cols-2 px-8 mb-6 text-white xs:grid">
          <p className="border-appBlue mb-6 xs:mb-0 pr-5 text-right min-h-[130px] flex items-center">
            {ITEM1}
          </p>
          <p className="border-appBlue  pl-5 text-left min-h-[130px] flex items-center">
            {ITEM4}
          </p>
        </div>
        <div className="grid-cols-2 px-8 mb-6 text-white xs:grid">
          <p className="border-appBlue mb-6 xs:mb-0 pr-5 text-right min-h-[130px] flex items-center">
            {ITEM2}
          </p>
          <div className="border-appBlue  pl-5 text-left min-h-[130px] flex items-center flex-wrap">
            {ITEM5}
          </div>
        </div>
        <div className="grid-cols-2 px-8 text-white xs:grid">
          <p className="border-appBlue mb-6 xs:mb-0 pr-5 text-right min-h-[130px] flex items-center">
            {ITEM3}
          </p>
          <p className="border-appBlue  pl-5 text-left min-h-[130px] flex items-center">
            {ITEM6}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="px-6 py-3 text-lg font-bold uppercase mt-14 bg-appGreen hover:bg-appBlue hover:text-white">
          {BUTTON_TEXT}
        </button>
      </div>
    </div>
  );
};
