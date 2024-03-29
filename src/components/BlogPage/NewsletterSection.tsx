import useMounted from "@/hooks/useMounted";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

const NewsletterSection = () => {
  const isMedium = useMediaQuery({ query: "(min-width: 768px)" });
  const mounted = useMounted();

  if (!mounted) return null;
  return (
    <section className="w-full max-w-6xl px-8 pb-24 mx-auto">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/assets/sword.svg"
          alt="sword"
          width={isMedium ? 165 : 105}
          height={isMedium ? 165 : 105}
        />
        <h2 className="text-center mb-4 text-[1.875rem] font-bold text-white uppercase mt-[32px]">
          Do you want to know what I'm up to?
        </h2>
        <p className="max-w-2xl text-center text-white text-[1.5rem] font-[500]">
          If you like the articles on my blog and you want to know how my life
          as a developer is going, I would say that my monthly newsletter is
          going to be cool for you.
        </p>
        <button
          onClick={() =>
            window.open(
              "https://dashboard.mailerlite.com/forms/489036/91954844764472477/share",
              "_blank"
            )
          }
          className="max-w-[437px] w-full px-12 py-4 mt-8 transition bg-appGreen hover:bg-appBlue hover:text-white"
        >
          <h3 className="text-xl font-bold uppercase sm:text-2xl">
            Sign up here
          </h3>
        </button>
      </div>
    </section>
  );
};

export default NewsletterSection;
