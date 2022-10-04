import PropTypes from "prop-types";

const Label = ({ text, ...rest }) => {
  return <label {...rest}>{text}</label>;
};

export default Label;

Label.propTypes = {
  text: PropTypes.string.isRequired,
};
