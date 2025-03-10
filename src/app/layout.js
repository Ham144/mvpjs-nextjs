import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryWrapper from "../components/ReactQueryWrapper"
import { Toaster } from "react-hot-toast"
import Script from "next/script";
import Main from "../components/Main";
import SessionProviderWrapper from "../components/SessionProviderWrapper";
import HeaderNavigation from "../components/HeaderNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aplikasi Saya",
  description: "Aplikasi dengan autentikasi magic link",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <Script src="https://cdn.paddle.com/paddle/v2/paddle.js" />
      </head>
      <ReactQueryWrapper>
        <body className={inter.className}>
          <Toaster position="top-center" />
          <SessionProviderWrapper>
            <HeaderNavigation />
            <Main>
              {children}
            </Main>
          </SessionProviderWrapper>
        </body>
      </ReactQueryWrapper>
    </html>
  );
}
