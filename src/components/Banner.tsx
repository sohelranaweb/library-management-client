import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="my-10">
      <div
        className="hero min-h-[550px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/FkKYzNrs/banner.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-3xl font-bold">
              Empower Your Reading Journey
            </h1>
            <p className="mb-5">
              Seamlessly manage books, track borrowings, and explore a world of
              knowledge — all in one place
            </p>
            <Link
              to="/books"
              className="bg-[#ff6163] text-white px-5 py-2 rounded-md hover:bg-yellow-600 transition"
            >
              See Books List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
