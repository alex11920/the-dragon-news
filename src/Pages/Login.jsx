import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

const Login = () => {
  const { signUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signUser(email, password)
      .then((result) => {
        console.log(result.user);

        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero">
        <div className="grid gap-6 mt-24">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-center">Login now!</h1>
          </div>
          <div className="card shrink-0 w-96 max-w-sm border">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-slate-500 text-white">Login</button>
              </div>
            </form>
          </div>
          <h2 className="text-center">
            New in here?{" "}
            <Link to="/register" className="text-blue-600 font-semibold pb-4">
              Register
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
