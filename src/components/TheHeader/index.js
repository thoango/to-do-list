import { useState } from "react";
import moreIcon from "../../images/icon-more.png";
import "./style.scss";
function TheHeader() {
  const [optionSelected, setOptionSelected] = useState(false);
  function showCompletedList() {
    setOptionSelected(!optionSelected);
  }
  return (
    <header className="header">
      <h1 className="header_title">TO-DO LIST</h1>
      <div className="header_more" onClick={showCompletedList}>
        <div className="header_moreImage">
          <img src={moreIcon} alt="more icon"></img>
        </div>
        {optionSelected ? (
          <div className="header_moreBox">
            <ul className="header_moreList">
              <li className="header_moreItem">
                <span className="">Show completed list</span>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default TheHeader;
