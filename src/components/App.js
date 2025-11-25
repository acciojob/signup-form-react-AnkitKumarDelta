import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    // 1. Check empty fields (HIGHEST PRIORITY)
    if (!name || !email || !phone || !pass) {
      setMsg("All fields are mandatory");
      return;
    }

    // 2. Name validation (alphanumeric + space)
    const nameRegex = /^[a-zA-Z0-9 ]+$/;
    if (!nameRegex.test(name)) {
      setMsg("Name is not alphanumeric");
      return;
    }

    // 3. Email contains '@'
    if (!email.includes("@")) {
      setMsg("Email must contain @");
      return;
    }

    // 4. Gender validation
    if (!["male", "female", "other"].includes(gender)) {
      setMsg("Please identify as male, female or others");
      return;
    }

    // 5. Phone only numbers
    if (!/^[0-9]+$/.test(phone)) {
      setMsg("Phone Number must contain only numbers");
      return;
    }

    // 6. Password length
    if (pass.length < 6) {
      setMsg("Password must contain atleast 6 letters");
      return;
    }

    // SUCCESS
    const username = email.split("@")[0];
    setMsg(`Hello ${username}`);
  };

  return (
    <div id="main">
      <span>{msg}</span>

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
