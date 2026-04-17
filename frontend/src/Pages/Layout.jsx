import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import ScrollToTop from "./ScrollToTop";

function Layout() {
  return (
    <>
      <ScrollToTop />
      <NavBar />

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
