import { Aldrich } from "next/font/google";
import "./globals.css";
import ReactQueryWrapper from "../components/ReactQueryWrapper"
import { ClerkProvider } from "@clerk/nextjs";
import HeaderNavigation from "../components/HeaderNavigation"
import { Toaster } from "react-hot-toast"
import Script from "next/script";


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
        <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
          <body
            className={`min-h-screen bg-primary  ${aldrich.variable} ${aldrich.variable} ${aldrich.className} antialiased  `}
          >
            <HeaderNavigation />
            <Toaster position="top-center" />
            <main className="max-md:pr-12">{children}</main>
          </body>
        </ClerkProvider>
      </ReactQueryWrapper>
    </html>
  );
}
