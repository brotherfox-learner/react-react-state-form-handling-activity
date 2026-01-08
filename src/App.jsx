import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleInput = (event) => {
    setText(event.target.value);
  };

  const handleValidate = (event) => {
    event.preventDefault();
    setEmail(text);
    setText("");
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsValid(regex.test(text));
  };

  return (
    <div className="App">
      <h1>Email Validation App</h1>
      <form className="email-container" onSubmit={handleValidate}>
        {!email ? (
          <h2 style={{ color: "white" }}>Enter Your email</h2>
        ) : isValid ? (
          <h2 style={{ color: "green" }}>✅ {email}</h2>
        ) : (
          <h2 style={{ color: "red" }}>❌ Wrong Pattern</h2>
        )}
        <input
          type="text"
          placeholder="Enter your email"
          value={text}
          onChange={handleInput}
        />
        <div className="buttons">
          <button type="submit">Validate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
