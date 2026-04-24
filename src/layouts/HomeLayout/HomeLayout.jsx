import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router";
import LatestNews from "../../components/LatestNews/LatestNews";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <section className="w-11/12 mx-auto">
        <LatestNews></LatestNews>
      </section>
      <main>
        <section className="left_nav"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="right_nav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
