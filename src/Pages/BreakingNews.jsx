import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex p-2 my-4 bg-slate-100">
      <button className="btn btn-secondary mr-2">Breaking News</button>
      <Marquee pauseOnHover={true} speed={200}>
        <Link to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
