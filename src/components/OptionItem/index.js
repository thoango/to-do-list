function OptionItem({ itemId, itemText, onItemDelete }) {
  return (
    <li className="optionMenu_item" onClick={() => onItemDelete(itemId)}>
      <span>{itemText}</span>
    </li>
  );
}
export default OptionItem;
