import Contact from "./components/Contact";
import Wrapper from "./Wrapper";
//importing css
import "./styles/app.css";
import ContactAdder from "./components/ContactAdder";

const App = () => {
  const contacts = [
    { name: "John", telephone: "9841000000", country: "Nepal" },
    { name: "Dave", telephone: "9841000001", country: "China" },
    { name: "Smith", telephone: "9841000002", country: "India" },
  ];

  return (
    <>
      <div className="contact_adder">
        <ContactAdder />
      </div>
      <Wrapper>
        <Contact data={contacts[0]} />
        <Contact data={contacts[1]} />
        <Contact data={contacts[2]} />
        {/* <Contact name="John" telephone="9841000000" country="Nepal" />
        <Contact name="Dave" telephone="9841000001" country="Nepal" />
        <Contact name="Smith" telephone="9841000002" country="Nepal" /> */}
      </Wrapper>
    </>
  );
};

export default App;
