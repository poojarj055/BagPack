export function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start Adding items to your packing list 🚀</em>
      </footer>
    );

  const numItem = items.length;
  const numpacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numpacked / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you have everything to go! ✈️"
          : `You have ${numItem} items on your list, and you already packed ${numpacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
