import Header from "@/components/Header/Header";
import React from "react";
import { paragraphs } from "./constants";

const HomeSection = () => {
  return (
    <div className="pb-36">
      <Header />
      <section className="w-full max-w-4xl px-8 mx-auto">
        <h2 className="font-bold mt-[12vh] uppercase text-4xl text-center text-white">
          CAN I GET A LITTLE MUSHY FOR A MOMENT?
        </h2>
        <p className="mt-4 text-2xl text-center text-appGreen">
          Yes, I know. «Marta being all mushy? But she’s such a fighter!»
        </p>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mt-5 text-center text-white">
            {paragraph}
          </p>
        ))}
      </section>
    </div>
  );
};

export default HomeSection;
