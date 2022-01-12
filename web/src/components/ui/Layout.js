import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Outlet />
    </header>
  );
}

export default Layout;
