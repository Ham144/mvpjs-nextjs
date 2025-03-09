import { Aldrich } from "next/font/google";
import "./globals.css";
import ReactQueryWrapper from "../components/ReactQueryWrapper"
import { Toaster } from "react-hot-toast"
import Script from "next/script";
import Main from "../components/Main";
import SessionProviderWrapper from "../components/SessionProviderWrapper";
const aldrich = Aldrich({

  variable: "--font-aldrich",
  subsets: ["latin"],
  weight: "400"
});

export const metadata = {
  title: "Buat Title ayang disini",
  description: "ini adalah boilerplate lengkap untuk memulais MVP saas mu cepat, tidak pakai typescript dan eslint karena memperlambat compile dan juga typescript sangat memperlambat pekerjaan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://cdn.paddle.com/paddle/v2/paddle.js" />
      </head>
      <ReactQueryWrapper>
        <body
          className={`min-h-screen bg-primary  ${aldrich.variable} ${aldrich.variable} ${aldrich.className} antialiased  `}
        >
          <Toaster position="top-center" />
          <SessionProviderWrapper>
            <Main>
              {children}
            </Main>
          </SessionProviderWrapper>
        </body>
      </ReactQueryWrapper>
    </html>
  );
}
