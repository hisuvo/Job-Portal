import { Link } from "react-router";
import { handleFacebookLogin, handleGooleLigin } from "../auth/authentication";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <h2 className="text-2xl font-semibold">Welcome Back, Please Login!</h2>

      <div className="max-w-lg mx-auto w-full">
        {/* ------- Login Form Start --------- */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-lg border p-4 md:p-8">
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />

          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>

        {/* ------- Login Form End --------- */}

        <div className="py-4 text-center space-x-2 space-y-2">
          <button onClick={handleGooleLigin} className="btn btn-secondary">
            Google
          </button>
          <button className="btn btn-secondary">GitHub</button>
          <button onClick={handleFacebookLogin} className="btn btn-secondary">
            Facebook
          </button>
          <button className="btn btn-secondary">Twitter</button>
        </div>
      </div>

      <Link to={"/auth/register"}>Regist-</Link>
    </div>
  );
};

export default Login;
