import Contact from "./components/Contact";
import Wrapper from "./Wrapper";
//importing css
import "./styles/app.css";
import ContactAdder from "./components/ContactAdder";
import { useState } from "react";

const App = () => {
  const initialContacts = [
    { name: "John", telephone: "9841000000", country: "Nepal" },
    { name: "Dave", telephone: "9841000001", country: "China" },
    { name: "Smith", telephone: "9841000002", country: "India" },
  ];

  const [contacts, setContacts] = useState(initialContacts);

  const addContactData = (contactData) => {
    console.log(contactData);
    //contacts.push(contactData);
    setContacts([...contacts, contactData]);
    //setContacts([contactData, ...contacts]);
    console.log(contacts);
  };

  const childFunctionHandler = () => {
    alert("Garent Parent was called");
  };

  return (
    <>
      <div className="contact_adder">
        {/* Child to Parent Communication */}
        <ContactAdder
          onContactAdded={addContactData}
          ChildFunction={childFunctionHandler}
        />
      </div>
      <Wrapper>
        {/* Parent to Child Communication */}
        {contacts.map((data) => (
          <Contact data={data}></Contact>
        ))}
        {/* <Contact data={contacts[0]} />
        <Contact data={contacts[1]} />
        <Contact data={contacts[2]} /> */}
        {/* <Contact name="John" telephone="9841000000" country="Nepal" />
        <Contact name="Dave" telephone="9841000001" country="Nepal" />
        <Contact name="Smith" telephone="9841000002" country="Nepal" /> */}
      </Wrapper>
    </>
  );
};

export default App;
