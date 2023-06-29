import { useEffect, useState } from "react";
import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/NavBar/navbar";

import { getAllPosts } from "../../services/postsServices";
import { HomeBody } from "./HomeStyled";

export default function Home() {
  const [news, setNews] = useState([]);

  async function findaAllPosts() {
    const response = await getAllPosts();
    setNews(response.data.results);
  }

  useEffect(() => {
    findaAllPosts();
  }, [news]);

  return (
    <>
      <Navbar />
      <HomeBody>
        {news.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes}
            comments={item.comments}
          />
        ))}
      </HomeBody>
    </>
  );
}
