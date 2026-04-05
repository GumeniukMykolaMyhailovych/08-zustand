import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <Header />
          {children}
          {modal} {/* 👈 ОБОВʼЯЗКОВО */}
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}