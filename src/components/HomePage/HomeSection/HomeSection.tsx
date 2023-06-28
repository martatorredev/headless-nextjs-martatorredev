import Header from "../../Header/Header";
import { DESCRIPTION, SUBTITLE, TITLE } from "./constants";

const HomeSection = () => {
  return (
    <section>
      <Header />
      <div className="max-w-5xl px-8 mx-auto mt-[10vh] lg:mt-[15vh]">
        <h1 className="text-[2.5rem] font-bold text-center text-white uppercase ">
          {TITLE}
        </h1>
        <p className="mt-6 text-center sm:text-3xl text-appGreen text-[2rem]">
          {SUBTITLE}
        </p>
        <p className="mt-6 text-center text-white">{DESCRIPTION}</p>
      </div>
    </section>
  );
};

export default HomeSection;
