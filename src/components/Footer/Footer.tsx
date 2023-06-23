import { GREENWEB_IMAGE, LOGO_ICON, SELLO_COMPENSA_IMAGE } from "@/images";
import Image from "next/image";
import { useRouter } from "next/router";
import Script from "next/script";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import {
  FaLinkedin,
  FaMastodon,
  FaTwitter,
  FaWordpressSimple,
} from "react-icons/fa";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="min-h-screen">
      <div className="flex flex-col items-center px-8 pt-48 pb-12">
        <div className="flex flex-wrap justify-center w-full max-w-xl gap-12 mx-auto xs:justify-between">
          <div className="flex flex-col items-center gap-5">
            <a
              onClick={() => router.push("/blog")}
              className="text-white underline transition cursor-pointer hover:text-appGreen"
            >
              Marta Torre's Blog
            </a>
            <a
              onClick={() => router.push("/corporate-social-responsibility")}
              className="text-white underline transition cursor-pointer hover:text-appGreen"
            >
              Corporate Social Responsibility.
            </a>
            <a
              href="https://martatorre.dev/"
              target="_blank"
              className="text-white underline transition cursor-pointer hover:text-appGreen"
            >
              Spanish version
            </a>
            <div className="flex gap-10">
              <AiOutlineInstagram
                href="https://www.instagram.com/martatorredev/"
                target="_blank"
                className="w-6 h-6 text-white transition cursor-pointer hover:text-appGreen hover:scale-110"
              />
              <AiOutlineGithub
                href="https://github.com/MartaTorredev"
                target="_blank"
                className="w-6 h-6 text-white transition cursor-pointer hover:text-appGreen hover:scale-110"
              />
              <FaWordpressSimple
                href="https://profiles.wordpress.org/martatorre/"
                target="_blank"
                className="w-6 h-6 text-white transition cursor-pointer hover:text-appGreen hover:scale-110"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-5">
            <a
              onClick={() => router.push("/#contact")}
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
            <div className="flex gap-10">
              <FaTwitter
                href="https://twitter.com/martatorredev"
                target="_blank"
                className="w-6 h-6 text-white transition cursor-pointer hover:text-appGreen hover:scale-110"
              />
              <FaMastodon
                href="https://wptoots.social/@martatorredev"
                target="_blank"
                className="w-6 h-6 text-white transition cursor-pointer hover:text-appGreen hover:scale-110"
              />
              <FaLinkedin
                href="https://www.linkedin.com/in/martatorredev/"
                target="_blank"
                className="w-6 h-6 text-white transition cursor-pointer hover:text-appGreen hover:scale-110"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-16">
          <Image
            src="/assets/logo-footer.svg"
            alt="logo"
            width={400}
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
          <p className="mt-4 text-center text-white ">
            Code is Poetry ❤️ by WordPress
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
          <Image
            src={SELLO_COMPENSA_IMAGE}
            alt="sello-compensa"
            width={150}
            height={150}
          />
          <div>
            <Script
              src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js"
              defer
            />
            <div id="wcb" className="carbonbadge wcb-d"></div>
          </div>
          <Image
            src={GREENWEB_IMAGE}
            alt="green-web"
            width={300}
            height={150}
          />
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <a
            onClick={() => router.push("/privacy-policy")}
            className="text-white underline cursor-pointer"
          >
            Privacy Policy
          </a>
          <a
            onClick={() => router.push("/legal-notice")}
            className="text-white underline cursor-pointer"
          >
            Legal Notice
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
