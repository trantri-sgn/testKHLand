import React from "react";
import { Footer, Header } from "../Common";

export function Layouts({ children }) {
  return (
    <div className="default_layout ">
      <Header />
      <main className="layout_main">{children}</main>
      <Footer />
    </div>
  );
}
