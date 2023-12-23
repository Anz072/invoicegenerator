import "./dropdown.styles.css";

const MainDropdown = ({ options, stateFunction , holder, label}) => {
  
  const handleSelectChange = (event) => {
    stateFunction(event.target.value)
  };

  return (
    <div className="dropdown-container">
      {label && <label className="input-label">{label}</label>}
      <select
        className="dropdown-select"
        value={holder}
        onChange={handleSelectChange}
      >
        {options &&
          options.map((elem) => {
            return (
              <option key={elem} value={elem}>
                {elem}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default MainDropdown;
