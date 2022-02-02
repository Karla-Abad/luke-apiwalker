import { Router } from "@reach/router";
import "./App.css";
import Form from "./components/Form";
import People from "./components/People";
import Planets from "./components/Planets";

const App = () => {
  return (
    <div className="App">
      <Form />
      <Router>
        <People path="/people/:id" />
        <Planets path="/planets/:id" />
      </Router>
    </div>
  );
};

export default App;
