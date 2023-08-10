import Header from "@/components/Header/Header";

const HomeSection = () => {
  return (
    <section className="pb-36">
      <Header />

      <div className="max-w-5xl px-8 mx-auto mt-[10vh] lg:mt-[15vh]">
        <h1 className="text-center text-white uppercase text-[2.5rem] font-bold">
          Corporate social responsibility
        </h1>
        <p className="mt-6 text-center sm:text-3xl text-appGreen text-[2rem]">
          Not all grains are made of sand.
        </p>
      </div>
    </section>
  );
};

export default HomeSection;
