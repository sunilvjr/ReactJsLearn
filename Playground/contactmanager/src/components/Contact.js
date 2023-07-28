const Contact = (props) => {
  return (
    <>
      {/* <div className="contact">
        {props.name}
        <br />
        {props.telephone}
        <br />
        {props.country}
      </div> */}

      <div className="contact">
        {props.data.name}
        <br />
        {props.data.telephone}
        <br />
        {props.data.country}
      </div>
      <hr />
    </>
  );
};

export default Contact;
