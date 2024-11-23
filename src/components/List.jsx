import React from "react";

const List = ({ items, setItems }) => {
  const handleToggle = (index) => {
    setItems(
      items.map((item, i) => {
        return i === index ? { ...item, purchased: !item.purchased } : item;
      })
    );
  };
  return (
    <ul className="flex flex-col gap-2 p-2 w-full">
      {items.map((item, i) => (
        <li
          key={i}
          className={`${
            item?.purchased ? "bg-primary" : "bg-accent"
          } w-1/2 h-16 rounded-full flex justify-center items-center`}
          onClick={() => handleToggle(i)}
        >
          {item?.name}
        </li>
      ))}
    </ul>
  );
};

export default List;
