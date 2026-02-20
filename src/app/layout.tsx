import type { Metadata } from "next";
import { Inter, Playfair_Display, Roboto_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Hamad Pervaiz — Architect · Investor · Strategist",
  description:
    "I architect mission-critical software, invest in asymmetric opportunities, and build empires.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/lucide-static@latest/font/lucide.min.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${robotoMono.variable} ${montserrat.variable} ${poppins.variable} h-full bg-[var(--bg-primary)] text-[var(--text-primary)] font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
