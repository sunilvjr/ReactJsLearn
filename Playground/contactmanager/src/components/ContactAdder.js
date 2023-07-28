const ContactAdder = () => {
  const onClickHandler = () => {
    console.log("clicked");
  };

  return (
    <>
      <button onClick={onClickHandler}>Add Contact</button>
    </>
  );
};

export default ContactAdder;
