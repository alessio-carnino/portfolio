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
  descriptions: "Full Stack Developer Portfolio",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch.icon.png"],
  },
  manifest: "/site.webmanifest",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={raleway.className}>
      <body>
        <main className="app paragraph_M overflow-hidden">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
