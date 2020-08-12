import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
