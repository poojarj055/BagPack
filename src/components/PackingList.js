import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onRemove, onToggleItem, onClearList }) {
  let sortedItems;
  const [sortBy, setSortBy] = useState("input");

  if (sortBy === "input")
    sortedItems = items;
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onRemove={onRemove}
            onToggleItem={() => onToggleItem(item.id)} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input"> Sort by input order! </option>
          <option value="description">Sort by description! </option>
          <option value="packed">Sort by packed status! </option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
