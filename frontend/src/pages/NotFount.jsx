import errorImage from "../assets/error.jpg";
import Button from "../shared/Button";
import { Link } from "react-router";

const NotFount = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-6 min-h-screen px-4">
      {/* Error Image */}
      <img
        src={errorImage}
        alt="404 Error"
        className="max-w-sm w-full object-contain"
      />

      {/* Title */}
      <h1 className="text-2xl sm:text-4xl md:text-6xl font-semibold">
        Oops! That page can’t be found.
      </h1>

      {/* Button */}
      <Link to={"/"}>
        <Button>Back Home</Button>
      </Link>
    </div>
  );
};

export default NotFount;
