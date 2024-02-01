import React from "react";

function Outline({
  length,
  password,
  passwordRef,
  setLength,
  NumbersAllowed,
  setNumbersAllowed,
  CharactersAllowed,
  setCharactersAllowed,
  copyPasswordToClipboard
}) {
  return (
    <>
      <h1 className="text-white text-6xl text-center font-mono">Password Generator</h1>
      <div className="flex-row items-center bg-gray-400 h-32 w-full rounded-full mt-9">
        <div className="flex align-top justify-center pt-3" >
          <input
            type="text"
            value={password}
            readOnly
            className="border px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-300 mb-10"
            ref={passwordRef} // this is used to copy reference of the password
            placeholder="Your password here"
          />
          <button onClick={copyPasswordToClipboard} className="border px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-300 mb-10 ml-5">
            Copy
          </button>
        </div>
        <div className="flex align-top justify-center">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
          <input
            type="checkbox"
            defaultChecked={NumbersAllowed}
            onChange={() => {
              setNumbersAllowed((prev) => !prev);
            }}
            className="ml-5"
            id="number"
          />
          <label htmlFor="number">Numbers</label>
          <input
            type="checkbox"
            defaultChecked={CharactersAllowed}
            onChange={() => {
              setCharactersAllowed((prev) => !prev);
            }}
            className="ml-5"
            id="character"
          />
          <label htmlFor="character">Characters</label>
        </div>
      </div>
    </>
  );
}

export default Outline;
