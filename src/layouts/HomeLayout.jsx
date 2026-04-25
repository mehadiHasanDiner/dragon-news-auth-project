import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeLayout/LeftAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <section className="w-11/12 mx-auto">
        <LatestNews></LatestNews>
      </section>
      <nav className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </nav>
      <main>
        <aside>
          <LeftAside></LeftAside>
        </aside>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="right_nav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
