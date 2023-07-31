import Contact from "./components/Contact";
import Wrapper from "./Wrapper";
//importing css
import "./styles/app.css";
import ContactAdder from "./components/ContactAdder";
import { useState } from "react";
import NavBar from "./components/NavBar";

const App = () => {
  const initialContacts = [
    // { name: "John", telephone: "9841000000", country: "Nepal" },
    // { name: "Dave", telephone: "9841000001", country: "China" },
    // { name: "Smith", telephone: "9841000002", country: "India" },
  ];

  const getAllContacts = JSON.parse(localStorage.getItem("contacts"));
  const [contacts, setContacts] = useState(
    getAllContacts ? getAllContacts : initialContacts
  );

  const addContactData = (contactData) => {
    console.log(contactData);
    //contacts.push(contactData);
    const allContacts = [...contacts, contactData];
    setContacts(allContacts);
    //setContacts([contactData, ...contacts]);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
    console.log(contacts);
  };

  const ClearAllContacts = () => {
    localStorage.clear();
  };

  const childFunctionHandler = () => {
    alert("Garent Parent was called");
    setContacts([]);
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="contact_adder">
        {/* Child to Parent Communication */}
        <ContactAdder
          onContactAdded={addContactData}
          ChildFunction={childFunctionHandler}
        />
      </div>
      <Wrapper>
        {/* Parent to Child Communication */}
        {contacts.map((data, index) => (
          <Contact key={index} data={data}></Contact>
        ))}
        {/* <Contact data={contacts[0]} />
        <Contact data={contacts[1]} />
        <Contact data={contacts[2]} /> */}
        {/* <Contact name="John" telephone="9841000000" country="Nepal" />
        <Contact name="Dave" telephone="9841000001" country="Nepal" />
        <Contact name="Smith" telephone="9841000002" country="Nepal" /> */}

        <button
          onClick={ClearAllContacts}
          style={{ background: "#f00", color: "#fff" }}
        >
          Clear All Contacts
        </button>
      </Wrapper>
    </>
  );
};

export default App;
