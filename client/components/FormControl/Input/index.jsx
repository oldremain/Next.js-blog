import PropTypes from "prop-types";

const Input = ({ name, type, register, ...rest }) => {
  return <input id={name} type={type} {...register(name)} {...rest} />;
};

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};
