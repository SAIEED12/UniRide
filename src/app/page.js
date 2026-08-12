import Facility from "../components/Facility";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";

export default function Home() {
  return (
    <div className="bg-dark">
      <Hero />
      <Facility/>
      <HowItWorks/>
    </div>
  );
}
