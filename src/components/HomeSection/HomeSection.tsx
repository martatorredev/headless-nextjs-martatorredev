import Header from "../Header/Header";
import { DESCRIPTION, SUBTITLE, TITLE } from "./constants";

const HomeSection = () => {
  return (
    <section className="min-h-screen background-home">
      <Header />
      <div className="max-w-5xl px-8 mx-auto mt-[10vh] lg:mt-[20vh]">
        <h1 className="text-4xl text-center text-white uppercase md:text-6xl">
          {TITLE}
        </h1>
        <p className="mt-6 text-2xl text-center sm:text-3xl text-appGreen md:text-4xl">
          {SUBTITLE}
        </p>
        <p className="mt-6 text-lg text-center text-white sm:text-xl md:text-2xl">
          {DESCRIPTION}
        </p>
      </div>
    </section>
  );
};

export default HomeSection;
