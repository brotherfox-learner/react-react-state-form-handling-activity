import { useState } from "react";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("");
  const [textInput, setTextInput] = useState("");
  const handleInput = (event) => {
    setGreeting(event.target.value);
  };
  const handleAdd = () => {
    setTextInput(greeting);
    setGreeting("");
  };
  
  return (
    <div className="App">
      <h1>Simple Greeting Message App 2</h1>
      <div className="greeting-container">
        <h2>{textInput}</h2>
        <input type="text" onChange={handleInput} value={greeting} />
        <div className="buttons">
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
