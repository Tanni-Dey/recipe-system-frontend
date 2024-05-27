import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-secondary text-white rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link to="/" className="link link-hover">
          Home
        </Link>
        <Link to="/" className="link link-hover">
          Recipes
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to="https://github.com/Tanni-Dey/">
            <span className="text-2xl">
              <FaGithub />
            </span>
          </Link>
          <Link to="https://www.linkedin.com/in/tanni-rani-dey-06152019b/">
            <span className="text-2xl">
              <FaLinkedin />
            </span>
          </Link>
          <Link to="https://www.facebook.com/jp.dey.1">
            <span className="text-2xl">
              <FaFacebook />
            </span>
          </Link>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by Flavor Verse</p>
      </aside>
    </footer>
  );
};

export default Footer;
