import { useState } from "react";

export default function Forms() {
  const [text, setText] = useState("");
  const [a, setA] = useState("");

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      Forms
      <input
        type="text"
        placeholder="Type here"
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-4">{a}</p>
      <button
        className="btn mt-4"
        onClick={() => {
          console.log(text);
          setA(text);
          setText("");
        }}
      >
        submit
      </button>
    </div>
  );
}
