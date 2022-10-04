import PropTypes from "prop-types";

const TextArea = ({ name, placeholder, value, onChange, ...rest }) => {
  return (
    <>
      <textarea
        value={value}
        name={name}
        onChange={onChange}
        {...rest}
      ></textarea>
    </>
  );
};

export default TextArea;

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
