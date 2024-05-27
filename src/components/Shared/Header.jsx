import { Link } from "react-router-dom";
import googleLogo from "../../assets/Google_logo.png";
import {
  useAuthState,
  useSignInWithGoogle,
  useSignOut,
} from "react-firebase-hooks/auth";
import auth from "../../utils/firebase.init";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Header = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [user, loading, error] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  // signup funtion
  const handleGoogleSignUp = async () => {
    const isSignup = await signInWithGoogle();

    if (isSignup.user) {
      const { displayName, email, photoURL } = isSignup.user;
      const userInfo = {
        displayName: displayName,
        photoURL: photoURL,
        email: email,
        coin: 50,
      };

      //user data send to backend
      fetch("https://recipe-system-backend.onrender.com/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((addUser) => console.log(addUser));
    }
  };

  return (
    <div className=" bg-primary text-white">
      <div className="navbar container  mx-auto">
        <div className="navbar-start">
          <div className="dropdown text-secondary">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/recipes">Recipes</Link>
              </li>
              <li>
                <Link to="/add-recipe">Add Recipe</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-xl">
            Flavor Verse
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
            <li>
              <Link to="/add-recipe">Add Recipe</Link>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <span className="mr-5">
              <img
                className="rounded-full w-10 h-10"
                src={user.photoURL}
                alt="user photo"
              />
            </span>
          )}
          {user ? (
            <button
              onClick={() => signOut()}
              className=" rounded-full bg-transparent p-0 my-auto text-3xl font-bold focus:border-none "
            >
              <RiLogoutCircleRLine />
            </button>
          ) : (
            <button
              onClick={handleGoogleSignUp}
              className=" rounded-full bg-transparent p-0 my-auto  focus:border-none"
            >
              <img className=" h-7 w-7" src={googleLogo} alt="logo" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
