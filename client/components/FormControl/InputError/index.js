const InputError = ({ errorMessage, ...rest }) => {
  return (
    <>
      {errorMessage && (
        <p {...rest}>
          <span>{errorMessage}</span>
        </p>
      )}
    </>
  );
};

export default InputError;
