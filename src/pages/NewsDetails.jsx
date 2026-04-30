import { useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/homeLayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";
import Navbar from "../components/Navbar";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  const newsDetails = data.find((singleNews) => singleNews.id === id);
  if (newsDetails && newsDetails !== news) {
    setNews(newsDetails);
  }

  console.log(news);
  return (
    <div>
      <header className="py-3">
        <Header></Header>
      </header>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
        <section className="col-span-9">
          <h2 className="font-bold mb-5">News Details</h2>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
