import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header";
import LeftNav from "../Shared/LeftNav";
import Navbar from "../Shared/Navbar";
import RightNav from "../Shared/RightNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div>
          <LeftNav></LeftNav>
        </div>
        {/* news container */}
        <div className="grid md:col-span-2 gap-4">
          {news.map((aNews) => (
            <NewsCard key={aNews._id} news={aNews}></NewsCard>
          ))}
        </div>
        <div>
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
