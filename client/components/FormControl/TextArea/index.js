const TextArea = ({ value, onChange, name, ...rest }) => {
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
