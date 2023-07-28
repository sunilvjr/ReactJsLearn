const Wrapper = (props) => {
  const loggedIn = true;
  return (
    <>
      <div
        className="contact_list"
        style={{ color: loggedIn ? "green" : "red" }}
      >
        <h3>Contact List:</h3>
        {props.children}
      </div>
    </>
  );
};

export default Wrapper;
