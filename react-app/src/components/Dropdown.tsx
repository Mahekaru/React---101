import React, { useState } from "react";
import "../components/css/Dropdown.css"; // Assuming you have a CSS file for styling
import { set } from "immer/dist/internal";
import ListGroup from "./css/ListGroup";

interface Props {
  items: string[];
  onSelectItem: (item: string) => void;
}

const Dropdown = ({ items, onSelectItem }: Props) => {
  const [IsShown, setIsShown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const toggle = () => {
    setIsShown(!IsShown);
  };

  return (
    <>
      <div className="dropdown">
        <button
          className="btn dropdown-toggle w-100"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={(e) => {
            toggle();
            console.log("Clicked", IsShown, e);
          }}
        >
          {selectedItem}
        </button>
        {IsShown ? (
          <ul className="list-group">
            {items.map((item, index) => (
              <li
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={item}
                onClick={() => {
                  setSelectedIndex(index);
                  setSelectedItem(item);
                  onSelectItem(item);
                  setIsShown(false); // Close the dropdown after selection
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Dropdown;
