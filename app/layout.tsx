import "./globals.css";
import React from "react";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <Header />

          {children}

          {modal}

          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}