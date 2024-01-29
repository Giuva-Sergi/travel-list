import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import PackingList from "./PackingList";
import Footer from "./Footer";

export default function App() {
  const [items, setItems] = useState([]);
  const addItem = function (item) {
    setItems((prevItems) => [...prevItems, item]);
  };

  const deleteItem = function (item) {
    // setItems(items.filter((prevItem) => prevItem.id !== item.id)); ALSO A POSSIBILITY CAUSE FILTER RETURNS A SHALLOW COPY OF THE ORIGINAL ARRAY
    setItems((prevItems) =>
      prevItems.filter((prevItem) => prevItem.id !== item.id)
    );
  };

  const packItem = function (item) {
    // setItems(
    //   items.map((prevItem) =>
    //     prevItem.id === item.id
    //       ? { ...prevItem, packed: !prevItem.packed } ALSO A POSSIBILITY CAUSE MAP RETURNS A SHALLOW COPY OF THE ORIGINAL ARRAY
    //       : prevItem
    //   )
    // );
    setItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.id === item.id
          ? { ...prevItem, packed: !prevItem.packed }
          : prevItem
      )
    );
  };

  const clearItems = function () {
    const confirmed = window.confirm(
      "Are you sure you want to delete all the items in your list?"
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Header />
      <Form onAddItem={addItem} />
      <PackingList
        items={items}
        onDeleteItem={deleteItem}
        onPackItem={packItem}
        onClearItem={clearItems}
      />
      <Footer items={items} />
    </div>
  );
}
