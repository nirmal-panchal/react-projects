import "./App.css";
import ContactForm from "./components/contact-form/ContactForm";
import ContactHeader from "./components/contact-header/ContactHeader";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <main className="mainContainer">
          <ContactHeader />
          <ContactForm />
        </main>
      </div>
    </>
  );
}

export default App;
