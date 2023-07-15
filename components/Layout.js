import React from "react";
import Nav from "./ui/Nav";
import Footer from "./ui/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main className="tracking-wider">{children}</main>
    </div>
  );
};

export default Layout;
