import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, SetNumberAllowed] = useState(false);
  const [charAllowed, SetCharAllowed] = useState(false);
  const [password, SetPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!" + "#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    SetPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const myCopy = () => {
    Swal.fire({
      text: "Copied successfully done",
      toast: true,
      timer: 1200,
      position: "top-center",
      showConfirmButton: false,
    });
  };

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    document.execCommand("copy");
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto my-[8vh] shadow-md bg-slate-50 py-4 px-2 rounded-lg">
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={() => {
            copyPasswordToClipboard();
            myCopy();
          }}
          className="outline-none bg-blue-700 hover:bg-blue-800 text-white px-3 py-.5 shrink-0"
        >
          Copy
        </button>
      </div>
      
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1 w-[240px]">
          <input
            type="range"
            min={6}
            max={32}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label> Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberAllowed"
            onChange={() => {
              SetNumberAllowed((prev) => !prev);
            }}
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={charAllowed}
            id="charAllowed"
            onChange={() => {
              SetCharAllowed((prev) => !prev);
            }}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
