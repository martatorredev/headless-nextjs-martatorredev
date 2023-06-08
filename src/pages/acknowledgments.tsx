import PeopleSection from "@/components/AcknowledgmentsPage/PeopleSection/PeopleSection";
import Footer from "@/components/Footer/Footer";
import HomeSection from "@/components/AcknowledgmentsPage/HomeSection/HomeSection";
import SkillsSecion from "@/components/AcknowledgmentsPage/SkillsSection/SkillsSecion";

export default function Page() {
  return (
    <main>
      <HomeSection />
      <PeopleSection />
      <SkillsSecion />
      <Footer />
    </main>
  );
}
