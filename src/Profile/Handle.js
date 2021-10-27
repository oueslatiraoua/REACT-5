import React from "react";
import PropTypes from "prop-types";

export const Handle = (props) => {
  function clickHandler() {
    alert(props.Name);
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default Handle;
