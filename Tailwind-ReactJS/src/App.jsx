import { useState } from "react";

function App() {
  const [color, setColor] = useState("#172554");
  const [count, setCount] = useState(1);

  const getRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
    setCount(count + 1);
  };

  return (
    <div
      style={{ backgroundColor: color }}
      className="w-screen h-screen flex justify-center relative overflow-hidden"
    >
      <div className="w-full text-center my-auto text-white">
        <h1 className="mb-2">Color Code: {color}</h1>
        <h2 className="font-bold text-2xl">Count: {count}</h2>
      </div>
      <div className="absolute bottom-0 flex items-center justify-center">
        <button
          onClick={() => {
            getRandomColor();
          }}
          className="text-white bg-gray-600 text-2xl marker:font-medium hover:bg-slate-950 hover:rounded-xl px-2 py-2 animate-move"
        >
          Random Color
        </button>
      </div>
    </div>
  );
}

export default App;
