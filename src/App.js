import "./App.css";
import Card from "./components/Card";
import contacts from "./data/contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My contacts</h1>
      {contacts.map((contact, index) => {
        return (
          <Card
            key={index}
            name={contact.name}
            url={contact.url}
            alternate={contact.alternate}
            tel={contact.tel}
            email={contact.email}
          />
        );
      })}
    </div>
  );
}

export default App;
