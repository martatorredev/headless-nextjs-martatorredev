import Image from "next/image";
import {
  AFROFEMINAS_IMAGE,
  CANTABRIA_CONBICI_IMAGE,
  COLABORATION_ICON,
  CRITERIA_IMAGE,
  CRUZ_ROJA_IMAGE,
  INTERMON_IMAGE,
  MEDECINS_IMAGE,
  OPENARMS_IMAGE,
  WORDPRESS_IMAGE,
} from "@/images";

const CollaboratorsSection = () => {
  return (
    <section className="w-full max-w-6xl px-8 pb-4 mx-auto">
      <div className="flex flex-col items-center">
        <p className="max-w-md mt-8 text-2xl text-center text-appGreen">
          These are some of the organizations I am currently collaborating with
        </p>
        <h2 className="mt-24 text-3xl font-bold text-center text-white uppercase">
          Free support for development, website maintenance, and consulting
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <Image
            src={CANTABRIA_CONBICI_IMAGE}
            alt="cantabria"
            width={120}
            height={120}
          />
          <Image
            src={AFROFEMINAS_IMAGE}
            alt="afrofeminas"
            className="invert"
            width={230}
            height={100}
          />
          <Image src={CRITERIA_IMAGE} alt="criteria" width={180} height={100} />
          <Image
            src={WORDPRESS_IMAGE}
            alt="wordpress"
            width={290}
            height={100}
          />
        </div>
        <h2 className="mt-24 text-3xl font-bold text-center text-white uppercase">
          Financial contribution and volunteering
        </h2>
        <div className="flex flex-wrap justify-center max-w-3xl gap-8 mt-8">
          <Image src={CRUZ_ROJA_IMAGE} alt="cruzroja" width={150} height={90} />
          <Image src={MEDECINS_IMAGE} alt="medecins" width={150} height={70} />
          <Image src={INTERMON_IMAGE} alt="intermon" width={190} height={60} />
          <Image src={OPENARMS_IMAGE} alt="intermon" width={150} height={60} />
        </div>
      </div>
    </section>
  );
};

export default CollaboratorsSection;
