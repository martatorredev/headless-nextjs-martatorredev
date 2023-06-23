import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { BLOG_ICON, COMMENT_ICON, GO_EXIT_ICON } from "@/images";
import Image from "next/image";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };
  const handleGoBlog = () => {
    router.push("/blog");
  };
  const handleGoContact = () => {
    router.push("/#contact");
  };
  return (
    <main>
      <Header />
      <div className="px-8 mt-16">
        <div className="flex items-center justify-center w-full max-w-6xl pt-16 pb-24 mx-auto">
          <h1 className="max-w-3xl text-4xl text-center uppercase text-appRed sm:text-5xl">
            Looks like this isn't the page you're looking for...
          </h1>
        </div>
      </div>
      <section>
        <div className="background-home h-[550px] w-full" />
        <div className="flex flex-col items-center max-w-3xl px-8 mx-auto text-lg text-center text-white relative -top-[12rem]">
          <p className="mt-2">
            Alright, fair enough. I’m pretty sure this isn’t what you were
            expecting, unless you’re a bit of a troll and intentionally seeking
            out this error.
          </p>
          <p className="mt-4">But let’s make a deal.</p>
          <p className="mt-4">
            Instead of getting all worked up, going into intense mode, and
            bolting from my website like your pants are on fire, give me a
            second chance:
          </p>
        </div>
      </section>
      <div className="grid max-w-5xl grid-cols-1 gap-8 px-8 mx-auto mt-12 lg:grid-cols-3 justify-items-center">
        <div className="w-[250px] flex flex-col items-center">
          <Image src={GO_EXIT_ICON} alt="go exit" width={80} height={80} />
          <p className="my-4 text-xl text-center text-white uppercase">
            Go back to square one
          </p>
          <button
            onClick={handleGoHome}
            className="px-8 py-3 font-semibold uppercase transition bg-appGreen hover:bg-appBlue hover:text-white"
          >
            Go to homepage
          </button>
        </div>
        <div className="w-[250px] flex flex-col items-center">
          <Image src={BLOG_ICON} alt="go exit" width={80} height={80} />
          <p className="my-4 text-xl text-center text-white uppercase">
            Check out the latest posts
          </p>
          <button
            onClick={handleGoBlog}
            className="px-8 py-3 font-semibold uppercase transition bg-appGreen hover:bg-appBlue hover:text-white"
          >
            Go to blog
          </button>
        </div>
        <div className="w-[250px] flex flex-col items-center">
          <Image src={COMMENT_ICON} alt="go exit" width={80} height={80} />
          <p className="my-4 text-xl text-center text-white uppercase">
            Complain bitterly, it’s your right
          </p>
          <button
            onClick={handleGoContact}
            className="px-8 py-3 font-semibold uppercase transition bg-appGreen hover:bg-appBlue hover:text-white"
          >
            Go to contact
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center max-w-5xl px-8 pb-24 mx-auto">
        <div className="w-[2px] h-24 bg-appBlue my-14" />
        <p className="text-white">Alright, do we have a deal?</p>
        <p className="mt-4 text-white">...</p>
        <p className="mt-4 italic text-white">Crickets chirping</p>
        <p className="mt-4 text-white">...</p>
        <p className="mt-4 text-white">Is anyone there?</p>
        <p className="mt-4 text-white">Hey! You still with me?</p>
        <p className="mt-4 text-white">...</p>
        <p className="mt-4 text-white">🦗 🦗</p>
        <p className="mt-4 text-white">...</p>
        <p className="mt-4 text-white">Marta, stop it.</p>
        <p className="mt-4 text-white">You’re talking to yourself.</p>
        <p className="mt-4 text-white">🤪</p>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
