import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen text-white mb-20"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/bf/65/d5/bf65d51f34b1bf193ec947f3c0c3f3e0.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Flavor Verse</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            veritatis reiciendis id. Repellat, molestias eum, dolorem deserunt,
            commodi earum corrupti fugiat beatae asperiores consequuntur quos
            possimus est autem dignissimos sequi.
          </p>
          <Link to="/recipes">
            <button className="btn btn-primary mr-5">See Recipes</button>
          </Link>
          <Link to="/add-recipe">
            <button className="btn btn-primary">Add Recipe</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
