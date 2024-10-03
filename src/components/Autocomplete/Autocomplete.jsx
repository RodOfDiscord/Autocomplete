import PropTypes from "prop-types";
import { useState, useRef } from "react";
import "./style.css";
function Autocomplete(props) {
  const { options = [] } = props;
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const filterOnInput = (event) => {
    if (event.target.value.length === 0) setFilteredOptions([]);
    else
      setFilteredOptions(
        options.filter((option) => option.text.includes(event.target.value))
      );
  };
  const applyInputValue = (event) => {
    inputRef.current.value = event.target.innerHTML;
  };

  return (
    <>
      <div>
        <input
          ref={inputRef}
          type="text"
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
};

export default Autocomplete;
