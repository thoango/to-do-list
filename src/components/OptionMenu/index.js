import OptionItem from "../OptionItem";
import "./style.scss";
function OptionMenu({ itemId, onItemDelete }) {
  return (
    <div className="optionMenu_box">
      <ul className="optionMenu_list">
        <OptionItem
          itemId={itemId}
          onItemDelete={onItemDelete}
          itemText="Delete"
        ></OptionItem>
      </ul>
    </div>
  );
}
export default OptionMenu;
