import Facility from "../components/Facility";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";

export default function Home() {
  return (
    <div className="bg-dark">
      <Hero />
      <Facility/>
      <HowItWorks/>
      <FAQ/>
      <FinalCTA/>
    </div>
  );
}
