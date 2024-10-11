import PropTypes from "prop-types";
import { useState } from "react";
import "./style.css";
function Autocomplete({ options, value, onChange }) {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const filterOnInput = (event) => {
    if (event.target.value.length === 0) setFilteredOptions([]);
    else
      setFilteredOptions(
        options.filter((option) => option.text.includes(event.target.value))
      );
  };
  const applyInputValue = (event) => {
    onChange({ target: { value: event.target.innerHTML } });
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={value}
          onChange={onChange}
          onInput={filterOnInput}
          onBlur={() => {
            setIsFocused(false);
          }}
          onFocus={() => {
            setIsFocused(true);
          }}
        />
        <div>
          <ul className={isFocused ? "" : "hidden"}>
            {filteredOptions.map((option) => (
              <li onMouseDown={applyInputValue} key={option.id}>
                {option.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

Autocomplete.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Autocomplete;
