import { useEffect, useRef, useState } from "react";
import moreIcon from "../../images/icon-more.png";
import OptionMenu from "../OptionMenu";
import "./style.scss";
function OptionBoard({ itemId, onItemDelete }) {
  const containerRef = useRef(null);
  const [optionSelected, setOptionSelected] = useState(false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOptionSelected(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  function showOption() {
    setOptionSelected((prevState) => !prevState);
  }
  return (
    <div
      ref={containerRef}
      className={
        optionSelected ? "option_container showing" : "option_container"
      }
      onClick={showOption}
    >
      <div className="option_imageWrap">
        <img src={moreIcon} alt="more icon"></img>
      </div>
      {optionSelected && (
        <OptionMenu itemId={itemId} onItemDelete={onItemDelete}></OptionMenu>
      )}
    </div>
  );
}
export default OptionBoard;
