import React, {Component, use, useState} from "react";
import '../styles/App.css';

const App = () => {

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[phone, setPhone] = useState("");
  const[pass, setPass] = useState("");
  const[iserror, setIserror] = useState(false);
  const[spantext, setSpantext] = useState("");

  const handleForm = (e)=>{
    e.preventDefault();
    const nameRegex = /^[a-zA-Z0-9]+$/;
    if(!nameRegex.test(name)){
      setSpantext(()=>'Name is not alphanumeric.');
      setIserror(()=>true);
      return;
    }
    if(!email.includes('@')){
      setSpantext(()=>'Email must contain @.');
      setIserror(()=>true);
      return;
    }
    if(pass.length < 6){
      setSpantext(()=>' Password must contain atleast 6 letters');
      setIserror(()=>true);
      return;
    }
    setIserror(false);
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
          <select data-testid="gender" id="gender">
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
        </label>
        <label htmlFor="phone">
          Phone Number: 
          <input value={phone} type="number" data-testid="phoneNumber" id="phone" onChange={(e)=>setPhone(e.target.value)} required/>
        </label>
        <label htmlFor="pass">
          Password: 
          <input value={pass} type="password" onChange={(e)=>setPass(e.target.value)} data-testid="password" id="pass" required/>
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
