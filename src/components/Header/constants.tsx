import { LOGO_ICON } from "@/images";
import Image from "next/image";

const navItemsDesktop = [
  {
    id: 1,
    content: "About",
    path: "/#about",
  },
  {
    id: 2,
    content: "Services",
    path: "/#services",
  },
  {
    id: 3,
    content: <Image src={LOGO_ICON} alt="Logo" width={75} height={75} />,
    path: "/",
  },
  {
    id: 4,
    content: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    content: "Contact",
    path: "/#contact",
  },
];

const navItemsMobile = navItemsDesktop.filter((item) => item.id !== 3);

export { navItemsDesktop, navItemsMobile };
