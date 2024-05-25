const CustomInput = ({ name, placeholder, type }) => {
  return (
    <input
      className="py-2 px-5 mt-5 focus:outline-primary border-primary border rounded-lg w-full"
      name={name}
      placeholder={placeholder}
      type={type}
      required
    />
  );
};

export default CustomInput;
