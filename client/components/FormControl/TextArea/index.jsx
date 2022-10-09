import PropTypes from "prop-types";

const TextArea = ({ name, register, ...rest }) => {
  return (
    <>
      <textarea {...register(name)} {...rest}></textarea>
    </>
  );
};

export default TextArea;

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};
