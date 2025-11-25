import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [greet, setGreet] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    setGreet("");

    if (!name || !email || !phone || !pass) {
      setError("All fields are mandatory");
      return;
    }

    const nameRegex = /^[a-zA-Z0-9 ]+$/;
    if (!nameRegex.test(name)) {
      setError("Name is not alphanumeric");
      return;
    }

    if (!email.includes("@")) {
      setError("Email must contain @");
      return;
    }

    if (!["male", "female", "other"].includes(gender)) {
        setError("Please identify as male, female or others");
        return;
       }


    if (!/^[0-9]+$/.test(phone)) {
      setError("Phone Number must contain only numbers");
      return;
    }

    if (pass.length < 6) {
      setError("Password must contain atleast 6 letters");
      return;
    }

    const username = email.split("@")[0].toUpperCase();
    setError("");
    setGreet(`Hello ${username}`);
  };

  return (
    <div id="main">
      <span>{error}</span>
      <h2>{greet}</h2>

      <form onSubmit={handleForm}>
        <label htmlFor="name">
          Name:
          <input
            data-testid="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            data-testid="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="gender">
          Gender:
          <select
           data-testid="gender"
           id="gender"
           value={gender}
           onChange={(e) => setGender(e.target.value)}
           >
           <option value="male">Male</option>
           <option value="female">Female</option>
           <option value="other">Other</option>
         </select>
        </label>

        <label htmlFor="phoneNumber">
          Phone Number:
          <input
            data-testid="phoneNumber"
            id="phoneNumber"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            data-testid="password"
            id="password"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </label>

        <label htmlFor="submit">
          Submit button:
          <input data-testid="submit" id="submit" type="submit" />
        </label>
      </form>
    </div>
  );
};

export default App;
