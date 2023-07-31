import { useState } from "react";
//import Dummy from "./Dummy";
// import { Chris, Dave, John } from "./Person";

const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [country, setCountry] = useState("");

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    //console.log("clicked");

    //const contactData = { name: name, telephone: telephone, country: country };
    const contactData = { id: Math.random(), name, telephone, country };
    //console.log(contactData);
    //setName("Chris");
    if (name.length < 1 || telephone.length < 1 || country < 1) {
      alert("Please fill all the fields");
    } else {
      props.onContactAdded(contactData);
      //Clearing the input fields
      setName("");
      setTelephone("");
      setCountry("");
    }
  };

  // const dummyClickHandler = () => {
  //   //alert("Parent was called");
  //   props.ChildFunction();
  // };

  // let resultCard;
  // if (name === "John") {
  //   resultCard = <John></John>;
  // } else if (name === "Dave") {
  //   resultCard = <Dave></Dave>;
  // } else if (name === "Chris") {
  //   resultCard = <Chris></Chris>;
  // }
  return (
    <>
      <div className="simpleAdder">
        <div>
          <h3>Add Contact</h3>
        </div>
        <form onSubmit={onFormSubmitHandler}>
          <input
            type="text"
            value={name}
            placeholder="Contact Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={telephone}
            placeholder="Telephone"
            onChange={(e) => setTelephone(e.target.value)}
          />
          <input
            type="text"
            value={country}
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
          />
          <br />
          <br />
          <button>Add Contact</button>
          <div>{/* My name is {name}.{resultCard} */}</div>
        </form>
      </div>
      {/* <Dummy onDumyClicked={dummyClickHandler} /> */}
    </>
  );
};

export default ContactAdder;
