import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/NavBar/navbar";
import { news } from "../../Datas.js";

export default function Home() {
  return (
    <>
      <Navbar />
      {news.map((item, index) => {
        return <Card key={index} news={item} />;
      })}
    </>
  );
}
