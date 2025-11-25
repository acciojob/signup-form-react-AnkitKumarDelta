import React, {Component, use, useState} from "react";
import '../styles/App.css';

const App = () => {

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[phone, setPhone] = useState("");
  const[pass, setPass] = useState("");
  const [gender, setGender] = useState("male");
  const[spantext, setSpantext] = useState("");

  const handleForm = (e)=>{
    e.preventDefault();
    
     if (!name || !email || !phone || !pass) {
      setSpantext("All fields are mandatory.");
      return;
    }

    const nameRegex = /^[a-zA-Z0-9 ]+$/;
    if(!nameRegex.test(name)){
      setSpantext(()=>'Name is not alphanumeric.');
      return;
    }

    if(!email.includes('@')){
      setSpantext(()=>'Email must contain @.');
      return;
    }

    if (!["male", "female", "other"].includes(gender)) {
      setSpantext("Please identify as male, female or others.");
      return;
    }

    if (!/^[0-9]+$/.test(phone)) {
      setSpantext("Phone Number must contain only numbers.");
      return;
    }

    if(pass.length < 6){
      setSpantext(()=>' Password must contain atleast 6 letters');
      return;
    }
    
    const username = email.split("@")[0];
    setSpantext(`Hello ${username}`);
  }

  return (
    <div id="main">

      <span>{spantext}</span>

       <form onSubmit={(e)=>handleForm(e)}>

        <label htmlFor="name">
          Name: 
          <input value={name} type="text" data-testid="name" id="name" onChange={(e)=>setName(e.target.value)} required/>
        </label>

        <label htmlFor="email">
          Email: 
          <input value={email} type="email" data-testid="email" id="email" onChange={(e)=>setEmail(e.target.value)} required/>
        </label>

        <label htmlFor="gender">
          Gender: 
          <select data-testid="gender" id="gender" value={gender} onChange={(e)=>setGender(e.target.value)}>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
        </label>

        <label htmlFor="phoneNumber">
          Phone Number: 
          <input value={phone} type="text" data-testid="phoneNumber" id="phoneNumber" onChange={(e)=>setPhone(e.target.value)} required/>
        </label>

        <label htmlFor="password">
          Password: 
          <input value={pass} type="password" onChange={(e)=>setPass(e.target.value)} data-testid="password" id="password" required/>
        </label>

        <label htmlFor="submit">
          Submit button: 
          <input type="submit" data-testid="submit" id="submit"/>
        </label>
       </form>
    </div>
  )
}


export default App;
