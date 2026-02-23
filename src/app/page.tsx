import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import SilentFlex from "@/components/SilentFlex";
import Doctrine from "@/components/Doctrine";
import Ventures from "@/components/Ventures";
import SignalVsNoise from "@/components/SignalVsNoise";
import Verdicts from "@/components/Verdicts";
import TheMemos from "@/components/TheMemos";
import Instagram from "@/components/Instagram";
import ConnectCTA from "@/components/ConnectCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-full overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <SilentFlex />
      <Doctrine />
      <Ventures />
      <SignalVsNoise />
      <Verdicts />
      <TheMemos />
      <Instagram />
      <ConnectCTA />
      <Footer />
    </main>
  );
}
