import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import { TRPCProvider } from "./_trpc/Provider";
import "./globals.css";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Pagzone", template: "%s | Pagzone" },
  description: "An e-commerce platform for tech enthusiasts",
  authors: [
    { name: "Pagzone", url: "https://github.com/pagzone" },
    { name: "Al-v Manda", url: "https://github.com/kaizouku14" },
    { name: "Renz Arias", url: "https://github.com/xyugen" },
  ],
  creator: "Pagzone",
  keywords: ["e-commerce", "tech"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <TRPCProvider>
          <Header />
          {children}
          <Footer />
        </TRPCProvider>
      </body>
    </html>
  );
}
