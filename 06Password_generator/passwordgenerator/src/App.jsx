import React, { useCallback, useEffect, useRef, useState } from "react";
import Outline from "./Components/Outline";

function App() {
  let [length, setLength] = useState(8);
  let [NumbersAllowed, setNumbersAllowed] = useState(true);
  let [CharactersAllowed, setCharactersAllowed] = useState(true);
  let [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzasdfghjklpoiuytrewq";
    if (NumbersAllowed) str += "0123456789";
    if (CharactersAllowed) str += "`!@#$%^&*()_+=- {}[]|;:''?/><,.~";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, NumbersAllowed, CharactersAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
    // document.textContent = "Copied";
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, NumbersAllowed, CharactersAllowed, passwordGenerator]);

  return (
    <>
      <Outline
        length={length}
        password={password}
        passwordRef = {passwordRef}
        setLength={setLength}
        NumbersAllowed={NumbersAllowed}
        setNumbersAllowed={setNumbersAllowed}
        CharactersAllowed={CharactersAllowed}
        setCharactersAllowed={setCharactersAllowed}
        copyPasswordToClipboard = {copyPasswordToClipboard}
      />
    </>
  );
}

export default App;
