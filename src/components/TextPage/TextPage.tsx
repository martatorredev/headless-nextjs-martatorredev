import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type Props = {
  html: string | TrustedHTML;
  title: string;
};
const TextPage = ({ html, title }: Props) => {
  return (
    <section>
      <div className="background-neon min-h-[40vh]">
        <Header />
        <h2 className="mt-[10vh] uppercase text-5xl text-center text-white">
          {title}
        </h2>
      </div>
      <div className="py-24 bg-white">
        <section className="w-full max-w-4xl px-8 mx-auto">
          <div
            className="wp-page-content"
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          ></div>
        </section>
      </div>
      <Footer />
    </section>
  );
};

export default TextPage;
