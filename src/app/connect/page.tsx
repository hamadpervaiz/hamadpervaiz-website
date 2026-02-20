import type { Metadata } from "next";
import GateKeeper from "@/components/GateKeeper";

export const metadata: Metadata = {
  title: "The Gate — Hamad Pervaiz",
  description:
    "State your objective clearly. Only asymmetric opportunities, high-leverage problems, and contrarian founders.",
};

export default function ConnectPage() {
  return <GateKeeper />;
}
