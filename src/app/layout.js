import localFont from "next/font/local";
import "./globals.css";
import { Merriweather, Poppins } from "next/font/google";

// Custom local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Google font
export const popins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

// Metadata for the page
 const metadata = {
  title: "Arjun | Portfolio",
  description: "Created to showcase Arjun's skills and experience",
  icons: {
    icon: "/logo.png",  
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
