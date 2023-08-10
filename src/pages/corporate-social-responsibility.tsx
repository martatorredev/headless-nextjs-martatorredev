import HomeSection from "@/components/CSRPage/HomeSection/HomeSection";
import AboutSection from "@/components/CSRPage/AboutSection/AboutSection";
import Footer from "@/components/Footer/Footer";
import CollaboratorsSection from "@/components/CSRPage/CollaboratorsSection/CollaboratorsSection";
import ThanksSection from "@/components/CSRPage/ThanksSection/ThanksSection";

export default function Page() {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <CollaboratorsSection />
      <ThanksSection />
      <Footer />
    </main>
  );
}
