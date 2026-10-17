import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { org } from "./data/site";

export const metadata = {
  title: {
    default: `${org.name} — Indigenous Cow-Based Livelihood & Research`,
    template: `%s | ${org.acronym}`,
  },
  description:
    "Gau Amrit Vigyan Anusandhan Sansthan — a non-profit, charitable and scientific research institution building income models, training and local-tech kits for farmers based on indigenous cows.",
  keywords: [
    "indigenous cow",
    "gau based livelihood",
    "Gau Amrit Vigyan Anusandhan Sansthan",
    "Panchgavya",
    "vermicompost",
    "A2 milk",
    "farmer training",
    "Prayagraj",
    "Uttar Pradesh",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
