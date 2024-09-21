import type { Metadata } from "next";
import { Lora, Raleway } from "next/font/google";
import { TRPCProvider } from "./_trpc/Provider";
import "./globals.css";


const raleway = Raleway({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "PAGZONE", template: "%s | PAGZONE" },
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
      <body className={raleway.className}>
        <TRPCProvider>
          {children}
        </TRPCProvider>
      </body>
    </html>
  );
}
