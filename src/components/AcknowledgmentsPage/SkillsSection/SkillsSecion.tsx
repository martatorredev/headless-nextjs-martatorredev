import React from "react";

const SkillsSecion = () => {
  return (
    <section className="w-full max-w-5xl px-8 mx-auto pb-36">
      <div className="flex flex-wrap justify-center gap-24">
        <div>
          <h2 className="text-3xl text-center uppercase text-appSky">
            Image Bank
          </h2>
          <ul className="mt-2 text-lg text-center text-white">
            <li className="mt-2">Shutterstock</li>
            <li className="mt-2">Unsplash</li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl text-center uppercase text-appSky">
            Web technology
          </h2>
          <ul className="mt-2 text-lg text-center text-white">
            <li className="mt-2">WordPress</li>
            <li className="mt-2">Gravity Forms</li>
            <li className="mt-2">Twenty Twenty-Three theme</li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl text-center uppercase text-appSky">Tools</h2>
          <ul className="mt-2 text-lg text-center text-white">
            <li className="mt-2">Cal</li>
            <li className="mt-2">KomodoDecks</li>
            <li className="mt-2">Sustainable hosting by ADW</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSecion;
