import Header from "@/components/Header/Header";
import "./globals.scss";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/ClientComponents/Theme-ui";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/fonts/InvestifydFonts/ARLRDBD.woff",
  // display: "swap",
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
