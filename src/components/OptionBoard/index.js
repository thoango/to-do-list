import { useState } from "react";
import moreIcon from "../../images/icon-more.png";
import "./style.scss";
function OptionBoard({ itemId, onItemDelete }) {
  const [optionSelected, setOptionSelected] = useState(false);
  function showOption() {
    setOptionSelected(!optionSelected);
  }
  return (
    <div className="option_container" onClick={showOption}>
      <div className="option_imageWrap">
        <img src={moreIcon} alt="more icon"></img>
      </div>
      {optionSelected ? (
        <div className="option_box">
          <ul className="option_list">
            <li className="option_item" onClick={() => onItemDelete(itemId)}>
              <span>Delete</span>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
export default OptionBoard;
