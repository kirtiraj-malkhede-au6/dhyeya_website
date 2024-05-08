import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dhyeya Educational Foundation",
  description:
    "Welcome to Dhyeya Educational Foundation – Empowering Dreams through Education.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="./output.css" rel="stylesheet"></link>
      </head>
      <script async src="//www.instagram.com/embed.js"></script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
