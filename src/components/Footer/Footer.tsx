import { GREENWEB_IMAGE, SELLO_COMPENSA_IMAGE } from "@/images";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { FaMastodon, FaTwitter } from "react-icons/fa";
import { BsWordpress } from "react-icons/bs";
import Script from "next/script";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="pb-12">
      <div className="flex flex-col items-center px-8 pt-32 pb-8">
        <div className="flex flex-wrap justify-center w-full max-w-xl gap-12 mx-auto sm:justify-between">
          <div className="flex flex-col items-center gap-5">
            <a
              onClick={() => router.push("/blog")}
              className="text-white underline transition cursor-pointer hover:text-appGreen"
            >
              Marta Torre's Blog
            </a>
            <a
              onClick={() => router.push("/corporate-social-responsibility")}
              className="text-center text-white underline transition cursor-pointer hover:text-appGreen"
            >
              Corporate Social Responsibility
            </a>
            <a
              href="https://martatorre.dev/"
              target="_blank"
              className="text-white underline transition cursor-pointer hover:text-appGreen"
            >
              Spanish version
            </a>
            <div className="flex gap-6">
              <AiOutlineInstagram
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/martatorredev/",
                    "_blank"
                  )
                }
                className="w-6 h-6 text-white transition cursor-pointer hover:scale-110 hover:text-appGreen"
              />
              <svg
                onClick={() =>
                  window.open("https://github.com/MartaTorredev", "_blank")
                }
                viewBox="0 0 19 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 cursor-pointer hover:scale-110 fill-white hover:fill-appGreen"
              >
                <path d="M18.4452 18.1859C18.4452 18.3836 18.3666 18.5732 18.2268 18.713C18.087 18.8528 17.8974 18.9313 17.6997 18.9313C16.9097 18.9289 16.1527 18.614 15.5941 18.0553C15.0355 17.4967 14.7205 16.7397 14.7181 15.9497V15.2043C14.7181 14.8089 14.561 14.4297 14.2814 14.1501C14.0018 13.8705 13.6226 13.7134 13.2272 13.7134H12.1091V17.4405C12.1091 17.8359 12.2662 18.2151 12.5458 18.4947C12.8254 18.7743 13.2046 18.9313 13.5999 18.9313C13.7976 18.9313 13.9872 19.0099 14.127 19.1497C14.2668 19.2895 14.3454 19.4791 14.3454 19.6768C14.3454 19.8744 14.2668 20.064 14.127 20.2038C13.9872 20.3436 13.7976 20.4222 13.5999 20.4222C12.8099 20.4197 12.0529 20.1048 11.4943 19.5461C10.9357 18.9875 10.6207 18.2305 10.6183 17.4405V13.7134H8.38204V17.4405C8.37958 18.2305 8.06465 18.9875 7.50602 19.5461C6.94738 20.1048 6.19041 20.4197 5.40038 20.4222C5.20268 20.4222 5.01308 20.3436 4.87329 20.2038C4.7335 20.064 4.65496 19.8744 4.65496 19.6768C4.65496 19.4791 4.7335 19.2895 4.87329 19.1497C5.01308 19.0099 5.20268 18.9313 5.40038 18.9313C5.79577 18.9313 6.17497 18.7743 6.45455 18.4947C6.73414 18.2151 6.89121 17.8359 6.89121 17.4405V13.7134H5.77309C5.37769 13.7134 4.99849 13.8705 4.71891 14.1501C4.43932 14.4297 4.28225 14.8089 4.28225 15.2043V15.9497C4.2798 16.7397 3.96487 17.4967 3.40623 18.0553C2.84759 18.614 2.09062 18.9289 1.30059 18.9313C1.10289 18.9313 0.913296 18.8528 0.773503 18.713C0.633711 18.5732 0.555176 18.3836 0.555176 18.1859C0.555176 17.9882 0.633711 17.7986 0.773503 17.6588C0.913296 17.519 1.10289 17.4405 1.30059 17.4405C1.69598 17.4405 2.07518 17.2834 2.35477 17.0039C2.63435 16.7243 2.79142 16.3451 2.79142 15.9497V15.2043C2.79204 14.7029 2.91864 14.2098 3.15961 13.7702C3.40057 13.3306 3.74817 12.9587 4.17044 12.6885C3.51193 12.2055 2.97643 11.5742 2.60734 10.8458C2.23825 10.1173 2.04595 9.31215 2.04601 8.49552V7.7501C2.05531 6.82418 2.30236 5.91618 2.76347 5.11319C2.53631 4.37771 2.46375 3.60319 2.55034 2.83831C2.63693 2.07344 2.8808 1.33474 3.26662 0.668653C3.33034 0.554426 3.42369 0.459509 3.53685 0.393912C3.65 0.328315 3.77876 0.29447 3.90955 0.295945C4.77784 0.293762 5.6346 0.494877 6.41123 0.883193C7.18786 1.27151 7.86281 1.83624 8.38204 2.53219H10.6183C11.1375 1.83624 11.8125 1.27151 12.5891 0.883193C13.3657 0.494877 14.2225 0.293762 15.0908 0.295945C15.2216 0.29447 15.3503 0.328315 15.4635 0.393912C15.5766 0.459509 15.67 0.554426 15.7337 0.668653C16.1195 1.33474 16.3634 2.07344 16.45 2.83831C16.5366 3.60319 16.464 4.37771 16.2369 5.11319C16.698 5.91618 16.945 6.82418 16.9543 7.7501V8.49552C16.9544 9.31215 16.7621 10.1173 16.393 10.8458C16.0239 11.5742 15.4884 12.2055 14.8299 12.6885C15.2522 12.9587 15.5998 13.3306 15.8407 13.7702C16.0817 14.2098 16.2083 14.7029 16.2089 15.2043V15.9497C16.2089 16.3451 16.366 16.7243 16.6456 17.0039C16.9251 17.2834 17.3043 17.4405 17.6997 17.4405C17.8974 17.4405 18.087 17.519 18.2268 17.6588C18.3666 17.7986 18.4452 17.9882 18.4452 18.1859Z" />
              </svg>

              <BsWordpress
                onClick={() =>
                  window.open(
                    "https://profiles.wordpress.org/martatorre/",
                    "_blank"
                  )
                }
                className="w-6 h-6 text-white transition cursor-pointer hover:scale-110 hover:text-appGreen"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-5">
            <a
              onClick={() => router.push("/headless#contact")}
              className="text-white underline transition cursor-pointer hover:text-appGreen"
            >
              Contact me
            </a>
            <a
              href="mailto:hey@martatorre.dev"
              className="text-white underline transition cursor-pointer hover:text-appGreen"
            >
              hey@martatorre.dev
            </a>
            <a
              onClick={() => router.push("/my-code-of-ethics")}
              className="text-white underline transition cursor-pointer hover:text-appGreen"
            >
              Code of Ethics
            </a>
            <div className="flex gap-6">
              <FaTwitter
                onClick={() =>
                  window.open("https://twitter.com/martatorredev", "_blank")
                }
                className="w-6 h-6 text-white transition cursor-pointer hover:scale-110 hover:text-appGreen"
              />
              <FaMastodon
                onClick={() =>
                  window.open("https://wptoots.social/@martatorredev", "_blank")
                }
                className="w-6 h-6 text-white transition cursor-pointer hover:scale-110 hover:text-appGreen"
              />
              <AiOutlineLinkedin
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/martatorredev/",
                    "_blank"
                  )
                }
                className="w-6 h-6 text-white transition cursor-pointer hover:scale-110 hover:text-appGreen"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-16">
          <Image
            src="/headless/assets/logo-footer.svg"
            alt="logo"
            width={310}
            height={60}
          />
          <p className="mt-8 text-center text-white">
            © 2023 This site and its contents are by Marta Torre is licensed
            under
            <a
              href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1"
              target="_blank"
              className="ml-1 mr-1 underline transition cursor-pointer text-appGreen hover:bg-appGreen hover:text-black"
            >
              CC BY 4.0
            </a>
            |
            <a
              onClick={() => router.push("/acknowledgments")}
              className="ml-1 underline transition cursor-pointer text-appGreen hover:bg-appGreen hover:text-black"
            >
              Acknowledgments
            </a>
          </p>
          <p className="mt-4 font-semibold text-center text-white">
            Code is Poetry ❤️ by WordPress
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
          <Image
            onClick={() =>
              window.open(
                "https://martatorre.dev/wp-content/uploads/2023/01/sello-compensa.webp",
                "_blank"
              )
            }
            src={SELLO_COMPENSA_IMAGE}
            alt="sello-compensa"
            width={150}
            height={150}
            className="cursor-pointer"
          />
          <div>
            <Script
              src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js"
              defer
            />
            <div id="wcb" className="carbonbadge wcb-d"></div>
          </div>
          <Image
            onClick={() =>
              window.open("https://www.thegreenwebfoundation.org/", "_blank")
            }
            src={GREENWEB_IMAGE}
            alt="green-web"
            width={300}
            height={150}
            className="cursor-pointer"
          />
        </div>
        <div className="flex justify-center flex-wrap gap-8 sm:gap-16 mt-8 uppercase text-[0.875rem]">
          <a
            onClick={() => router.push("/privacy-policy")}
            className="text-white underline cursor-pointer hover:text-appGreen"
          >
            Privacy Policy
          </a>
          <a
            onClick={() => router.push("/legal-notice")}
            className="text-white underline cursor-pointer hover:text-appGreen"
          >
            Legal Notice
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
