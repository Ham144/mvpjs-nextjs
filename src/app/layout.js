import { Aldrich } from "next/font/google";
import "./globals.css";
import ReactQueryWrapper from "../components/ReactQueryWrapper"
import { ClerkProvider } from "@clerk/nextjs";
import HeaderNavigation from "../components/HeaderNavigation"
import { Toaster } from "react-hot-toast"


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
      <ReactQueryWrapper>
        <ClerkProvider>
          <body
            className={`${aldrich.variable} antialiased`}
            publishablekey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
          >
            <HeaderNavigation />
            <Toaster position="top-center" />
            {children}
          </body>
        </ClerkProvider>
      </ReactQueryWrapper>
    </html>
  );
}
