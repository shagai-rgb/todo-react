export const Input = ({ handleChange, value }) => {
  return (
    <input
      className="inputTodo"
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
};
