import PropTypes from "prop-types";

const Label = ({ name, text, ...rest }) => {
  return (
    <label htmlFor={name} {...rest}>
      {text}
    </label>
  );
};

export default Label;

Label.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
