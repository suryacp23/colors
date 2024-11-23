import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
// add items to the list
// remove items from the list
// mark as purchased
// clear all items

const App = () => {
  const [items, setItems] = useState([]);

  return (
    <div className=" bg-background h-screen w-screen flex justify-center items-center flex-col">
      <Form items={items} setItems={setItems} />
      <List items={items} setItems={setItems} />
    </div>
  );
};

export default App;
