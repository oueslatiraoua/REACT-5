import React from "react";
import PropTypes from "prop-types";

function Presentation(props) {
  return (
    <div style={{ backgroundColor: "Khaki" }}>
      <h1 style={{ color: "IndianRed " }}>{props.Name}</h1>
      <h4>{props.Profession}</h4>
      <i style={{ border: "1px solid black", padding: "5px" }}>{props.Bio}</i>
      {props.children}
    </div>
  );
}
Presentation.defaultProps = {
  Name: "My name",
  Profession: "My profession",
  Bio: "Mybio",
};
Presentation.propTypes = {
  Name: PropTypes.string.isRequired,
  Profession: PropTypes.string.isRequired,
  Bio: PropTypes.string.isRequired,
};
export default Presentation;
