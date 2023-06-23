import Image from "next/image";
import React from "react";

const NewsletterSection = () => {
  return (
    <section className="w-full max-w-6xl px-8 pb-24 mx-auto">
      <div className="flex flex-col items-center justify-center">
        <Image src="/assets/sword.svg" alt="sword" width={200} height={200} />
        <h2 className="mb-4 text-3xl text-white uppercase">
          Do you want to know what I'm up to?
        </h2>
        <p className="max-w-2xl text-center text-white">
          If you like the articles on my blog and you want to know how my life
          as a developer is going, I would say that my monthly newsletter is
          going to be cool for you.
        </p>
        <button className="px-12 py-4 mt-8 transition bg-appGreen hover:bg-appBlue hover:text-white">
          <h3 className="text-xl font-bold uppercase sm:text-2xl">
            Sign up here
          </h3>
        </button>
      </div>
    </section>
  );
};

export default NewsletterSection;
