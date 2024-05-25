import notFound from "../assets/notFound.png";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center">
      <img className="max-w-[50%]" src={notFound} alt="img" />
    </div>
  );
};

export default NotFound;
