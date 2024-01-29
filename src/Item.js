export default function Item({ item, onDeleteItem, onPackItem }) {
  const handleDelete = function () {
    onDeleteItem(item);
  };

  const handlePack = function (e) {
    onPackItem(item);
  };

  return (
    <li>
      <input type="checkbox" onChange={handlePack} />
      <span>
        {item.packed ? (
          <s>
            {item.quantity} {item.description}
          </s>
        ) : (
          <>
            {item.quantity} {item.description}
          </>
        )}
      </span>
      <button onClick={handleDelete}>❌</button>
    </li>
  );
}
