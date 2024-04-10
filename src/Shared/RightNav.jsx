import {
  BsFacebook,
  BsGithub,
  BsGoogle,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import qZone1 from '../assets/qZone1.png'
import qZone2 from '../assets/qZone2.png'
import qZone3 from '../assets/qZone3.png'
import banner from '../assets/banner.png'

const RightNav = () => {
  return (
    <div>
      <div className="p-4 bg-slate-100">
        <h2 className="text-xl font-bold mb-2">Login With</h2>
        <button className="btn btn-outline my-2 w-56 text-blue-500">
          <BsGoogle /> Login with Google
        </button>
        <button className="btn btn-outline w-56 text-green-500">
          <BsGithub /> Login with Github
        </button>
      </div>
      <div className="p-4 my-6">
        <h2 className="text-xl font-semibold mb-2">Find Us On</h2>
        <a
          className="flex items-center gap-2 text-lg border p-4 rounded-t-lg"
          href=""
        >
          <BsFacebook />
          Facebook
        </a>
        <a className="flex items-center gap-2 text-lg border p-4" href="">
          <BsTwitter />
          Twitter
        </a>
        <a
          className="flex items-center gap-2 text-lg border p-4 rounded-b-lg"
          href=""
        >
          <BsInstagram />
          Instagram
        </a>
      </div>
      <div className="p-4 bg-slate-100 mb-6">
        <h2 className="text-xl font-bold mb-2">Q Zone</h2>
        <img src={qZone1} />
        <img src={qZone2} />
        <img src={qZone3} />        
      </div>
      <div>
        <img src={banner} />
      </div>
    </div>
  );
};

export default RightNav;
