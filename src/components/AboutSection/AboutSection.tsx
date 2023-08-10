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
    <section className="py-8">{isMedium ? <Desktop /> : <Mobile />}</section>
  );
}

const Desktop = () => {
  return (
    <div className="max-w-6xl min-h-screen px-8 mx-auto background-about">
      <div className="relative flex pt-64">
        <div className="absolute z-50">
          <div className="flex w-full">
            <div className="mb-16  w-full border-appBlue min-h-[130px] flex items-center border-r-[22px] text-left pr-5 justify-end max-w-[350px]">
              <p className="text-right text-white">{ITEM1}</p>
            </div>
          </div>
          <div className="flex w-full">
            <div className="mb-16  w-full border-appBlue min-h-[130px] flex items-center border-r-[22px] text-left pr-5 justify-end max-w-[300px]">
              <p className="text-right text-white">{ITEM2}</p>
            </div>
          </div>
          <div className="flex w-full">
            <div className="mb-16  w-full border-appBlue min-h-[130px] flex items-center border-r-[22px] text-left pr-5 justify-end max-w-[350px]">
              <p className="text-right text-white">{ITEM3}</p>
            </div>
          </div>
        </div>

        <div
          id="about"
          className="w-[500px] h-[500px] rounded-full background-marta absolute left-[50%] -translate-x-1/2"
        />

        <div className="absolute right-0 z-50">
          <div className="flex w-full">
            <div className="mb-16  w-full border-appBlue min-h-[130px] flex items-center border-l-[22px] text-left pl-5 justify-end max-w-[350px]">
              <p className="text-white ">{ITEM4}</p>
            </div>
          </div>
          <div className="flex justify-end w-full">
            <div className="mb-16  w-full border-appBlue min-h-[130px] flex items-center border-l-[22px] text-left pl-5 justify-end max-w-[300px]">
              <p className="text-white ">{ITEM5}</p>
            </div>
          </div>
          <div className="flex w-full">
            <div className="mb-16  w-full border-appBlue min-h-[130px] flex items-center border-l-[22px] text-left pl-5 justify-end max-w-[350px]">
              <p className="text-white ">{ITEM6}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-14">
        <h2 className="text-4xl text-white uppercase">{TITLE}</h2>
        <button className="px-8 py-4 text-lg font-bold uppercase mt-14 bg-appGreen hover:bg-appBlue hover:text-white">
          {BUTTON_TEXT}
        </button>
      </div>
    </div>
  );
};

const Mobile = () => {
  return (
    <>
      <div className="flex items-center justify-center max-w-6xl px-8 mx-auto background-about pt-36">
        <div
          id="about"
          className="w-[250px] h-[250px] xs:w-[360px] xs:h-[360px] rounded-full background-marta "
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="mt-5 mb-12 text-4xl text-white uppercase">{TITLE}</h2>
        <div className="grid-cols-2 px-8 mb-12 text-white xs:grid">
          <p className="border-appBlue mb-12 xs:mb-0 border-r-[22px] xs:border-r-[11px] pr-5 text-right min-h-[130px] flex items-center">
            {ITEM1}
          </p>
          <p className="border-appBlue border-l-[22px] xs:border-l-[11px] pl-5 text-left min-h-[130px] flex items-center">
            {ITEM4}
          </p>
        </div>
        <div className="grid-cols-2 px-8 mb-12 text-white xs:grid">
          <p className="border-appBlue mb-12 xs:mb-0 border-r-[22px] xs:border-r-[11px] pr-5 text-right min-h-[130px] flex items-center">
            {ITEM2}
          </p>
          <div className="border-appBlue border-l-[22px] xs:border-l-[11px] pl-5 text-left min-h-[130px] flex items-center flex-wrap">
            {ITEM5}
          </div>
        </div>
        <div className="grid-cols-2 px-8 text-white xs:grid">
          <p className="border-appBlue mb-12 xs:mb-0 border-r-[22px] xs:border-r-[11px] pr-5 text-right min-h-[130px] flex items-center">
            {ITEM3}
          </p>
          <p className="border-appBlue border-l-[22px] xs:border-l-[11px] pl-5 text-left min-h-[130px] flex items-center">
            {ITEM6}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="px-8 py-4 text-lg font-bold uppercase mt-14 bg-appGreen hover:bg-appBlue hover:text-white">
          {BUTTON_TEXT}
        </button>
      </div>
    </>
  );
};
