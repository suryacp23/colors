import { useState } from "react";

const Form = ({ items,setItems }) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, { name: input, purchased: false }]);
    console.log(items);
    setInput("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-primary h-16 w-1/2 p-3 rounded-full"
    >
      <input
        type="text"
        placeholder="add items to purchase"
        value={input}
        onChange={handleChange}
        className="h-full w-5/6 p-2 rounded-s-full"
      />
      <button className="bg-accent h-full w-1/6 rounded-e-full">
        add item
      </button>
    </form>
  );
};

export default Form;
