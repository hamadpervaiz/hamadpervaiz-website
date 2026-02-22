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
import { fetchContent, fetchMemos, fetchVerdicts } from "@/lib/cms";

export default async function Home() {
  const [content, verdicts, memos] = await Promise.all([
    fetchContent("home"),
    fetchVerdicts(),
    fetchMemos(),
  ]);

  return (
    <main className="min-h-full overflow-x-hidden">
      <Header />
      <Hero cms={content} />
      <Stats cms={content} />
      <SilentFlex />
      <Doctrine />
      <Ventures />
      <SignalVsNoise />
      <Verdicts items={verdicts} />
      <TheMemos cmsMemos={memos} />
      <Instagram />
      <ConnectCTA />
      <Footer />
    </main>
  );
}
