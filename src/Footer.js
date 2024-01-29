export default function Footer({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your list 🚀</em>
      </footer>
    );
  } else {
    const packedItemsLength = items.filter((item) => item.packed).length;
    const packedItemsPct = Math.ceil((packedItemsLength / items.length) * 100);
    return (
      <footer className="stats">
        {packedItemsPct === 100 ? (
          <em>You got everything! Ready to go ✈️</em>
        ) : (
          <em>
            You have {items.length} items on your list, and you already packed{" "}
            {packedItemsLength} ({packedItemsPct}%)
          </em>
        )}
      </footer>
    );
  }
}
