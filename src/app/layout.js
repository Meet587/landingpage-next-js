import Header from "@/components/Header/Header";
import "./globals.scss";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/ClientComponents/Theme-ui";
import localFont from "next/font/local";
// import {ABeeZee} from 'next/font'

const myFont = localFont({
  src: "./fonts/InvestifydFonts/ARLRDBD.woff",
  // weight: ['400','500','700',]
});

export const metadata = {
  title: "Investifyd",
  description: "Your Trusted investment partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <ThemeProvider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
