import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Providers from "@/components/TanStackProvider/Providers";
import { Roboto } from "next/font/google";
import type { Metadata } from "next"; 

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "NoteHub",
  description: "Manage your notes easily with NoteHub",
  openGraph: {
    title: "NoteHub",
    description: "Manage your notes easily with NoteHub",
    url: "https://notehub.com",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <Providers>
          <Header />
          {children}
          {modal}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}