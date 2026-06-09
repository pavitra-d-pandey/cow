import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { org } from "./data/site";

export const metadata = {
  title: {
    default: `${org.acronym} — ${org.centreEn}`,
    template: `%s | ${org.acronym}`,
  },
  description:
    "देशी गौ-आधारित आजीविका एवं प्रौद्योगिकी केंद्र (CIC-BLT) — देशी गायों से किसानों के लिए आय-सृजक मॉडल, प्रशिक्षण और लोकल-टेक किट।",
  keywords: [
    "देशी गाय",
    "गौ आधारित आजीविका",
    "CIC-BLT",
    "पंचगव्य",
    "वर्मी कम्पोस्ट",
    "A2 दूध",
    "किसान प्रशिक्षण",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Hindi:ital@0;1&family=Noto+Sans:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="tricolor" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
