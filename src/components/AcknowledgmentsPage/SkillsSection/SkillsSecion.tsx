import React from "react";

const SkillsSecion = () => {
  return (
    <section className="w-full px-8 mx-auto max-w-7xl pb-36">
      <div className="grid grid-cols-1 gap-24 lg:grid-cols-3">
        <div>
          <h2 className="text-3xl font-semibold text-center uppercase text-appSky">
            Image Bank
          </h2>
          <ul className="mt-2 text-2xl text-center text-white">
            <li className="mt-4">Shutterstock</li>
            <li className="mt-2">Unsplash</li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-center uppercase text-appSky">
            Web technology
          </h2>
          <ul className="mt-2 text-2xl text-center text-white">
            <li className="mt-4">WordPress</li>
            <li className="mt-4">NextJS</li>
            <li className="mt-2">TailwindCSS</li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-center uppercase text-appSky">
            Tools
          </h2>
          <ul className="mt-2 text-2xl text-center text-white">
            <li className="mt-4">Cal</li>
            <li className="mt-2">KomodoDecks</li>
            <li className="mt-2">Sustainable hosting by ADW</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSecion;
