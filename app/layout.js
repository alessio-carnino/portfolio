import "@/styles/globals.css";
import { Maven_Pro, Raleway } from "next/font/google";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const maven_pro = Maven_Pro({
  subsets: ["latin"],
  variable: "--font-maven_pro",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Alessio Carnino Portfolio",
  descriptions: `Hi 👋, My name is Alessio Carnino and I am a Full-stack Developer`,
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch.icon.png"],
  },
  manifest: "/site.webmanifest",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={maven_pro.className}>
      <body>
        <main className="app text-sm md:text-lg overflow-hidden">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
