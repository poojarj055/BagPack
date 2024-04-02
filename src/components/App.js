import { useState } from "react";
import { Form } from "./Form";
import { Logo } from "./Logo";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleRemove(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleToggelItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
   function HandleClearList(){
     const confirmed= window.confirm("Are you sure you want to clear this list?");
     if (confirmed) setItems([]);
   }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onRemove={handleRemove}
        onToggleItem={handleToggelItem}
        onClearList={HandleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

    
