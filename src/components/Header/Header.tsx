import { useState } from "react";
import Image from "next/image";

import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
import useMounted from "@/hooks/useMounted";
import { navItemsDesktop, navItemsMobile } from "./constants";
import { AiOutlineMenu } from "react-icons/ai";
import { LOGO_ICON } from "@/images";

const Header = () => {
  const mounted = useMounted();

  const isMedium = useMediaQuery({
    query: "(min-width: 768px)",
  });

  if (!mounted) return null;

  return (
    <header className="pt-8">{isMedium ? <Desktop /> : <Mobile />}</header>
  );
};

const Desktop = () => {
  return (
    <nav className="w-full max-w-5xl mx-auto">
      <ul className="flex items-center justify-center gap-12">
        {navItemsDesktop.map(({ content, path, id }) => (
          <li key={id}>
            <a
              href={path}
              className="mb-1 font-semibold text-white uppercase cursor-pointer hover:text-appGreen hover:underline"
            >
              {content}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Mobile = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const handleMobileMenu = () => setToggleMobileMenu((prev) => !prev);

  return (
    <nav className="relative px-8">
      <div className="flex justify-between">
        <Image src={LOGO_ICON} alt="Logo" width={50} height={50} />
        <div
          className={classNames(
            "flex items-center gap-2 cursor-pointer",
            toggleMobileMenu ? "bg-appGreen text-black px-2" : "text-white"
          )}
          onClick={handleMobileMenu}
        >
          <span className="uppercase">Menu</span>
          <AiOutlineMenu className="w-8 h-8" />
        </div>
      </div>
      {toggleMobileMenu && (
        <div className="relative">
          <ul className="absolute w-full mt-4">
            {navItemsMobile.map(({ content, path, id }) => (
              <li key={id} className="w-full">
                <a
                  href={path}
                  className="block w-full p-3 mb-2 text-center text-white uppercase transition border cursor-pointer hover:bg-appGreen hover:text-black bg-appBlack border-appGreen"
                >
                  {content}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
