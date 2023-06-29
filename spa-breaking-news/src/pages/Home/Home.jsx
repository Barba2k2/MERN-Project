import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/NavBar/navbar";
import { news } from "../../Datas.js";
import { HomeBody } from "./HomeStyled";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeBody>
        {news.map((item, index) => (
          <Card key={index} news={item} />
        ))}
      </HomeBody>
    </>
  );
}
