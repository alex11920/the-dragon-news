import { useParams } from "react-router-dom";
import Header from "../Shared/Header";
import RightNav from "../Shared/RightNav";
import Navbar from "../Shared/Navbar";

const NewsDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-5xl">News Detail</h2>
          <p>{id}</p>
        </div>
        <div>
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
