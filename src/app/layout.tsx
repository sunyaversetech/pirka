import type { Metadata } from "next";
import { Bagel_Fat_One, Bungee, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const bagelFatOne = Bagel_Fat_One({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const bungee = Bungee({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pirka Canberra | Coffee, Momo & More",
  description:
    "Pirka Canberra — coffee, matcha, momo, burgers and more near the heart of the city.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bagelFatOne.variable} ${bungee.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
