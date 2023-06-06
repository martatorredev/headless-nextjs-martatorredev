import Header from "@/components/Header/Header";

const HomeSection = () => {
  return (
    <section className="min-h-[80vh] background-csr">
      <Header />

      <div className="max-w-5xl px-8 mx-auto mt-[10vh] lg:mt-[20vh]">
        <h1 className="text-3xl text-center text-white uppercase md:text-5xl">
          Corporate social responsibility
        </h1>
        <p className="mt-6 text-2xl text-center sm:text-3xl text-appGreen md:text-4xl">
          Not all grains are made of sand.
        </p>
      </div>
    </section>
  );
};

export default HomeSection;
