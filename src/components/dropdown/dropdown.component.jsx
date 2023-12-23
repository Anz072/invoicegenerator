import { useState } from "react";
import "./dropdown.styles.css";

const DropdownExample = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <select
        className="dropdown-select"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};

export default DropdownExample;
