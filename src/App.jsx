import { useEffect, useState } from "react"


function App() {
  const [color, setColor] = useState(()=>{
    // Use local storage to return the previously selected color
    let storedColor = localStorage.getItem("selectedColor"); // the string selectedColor is connecting getItem & setItem. selectedColor is coming from the setItem
    return storedColor || ""; // Default to an empty string if no color is stored
  })
  useEffect(()=>{
    // Save the selected color to local storage whenever it changes
    localStorage.setItem("selectedColor", color); //selectedColor is the key (or name) under which the data will be stored.
  },[color]) 
   

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-sm">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-sm text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-sm text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-sm text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("LightSeaGreen")}
            style={{ backgroundColor: "LightSeaGreen" }}
            className="outline-none px-4 py-1 rounded-sm text-white shadow-lg"
          >
            LightSeaGreen
          </button>
          <button
            onClick={() => setColor("Magenta")}
            style={{ backgroundColor: "Magenta" }}
            className="outline-none px-4 py-1 rounded-sm text-white shadow-lg"
          >
            Magenta
          </button>
          <button
            onClick={() => setColor("Silver")}
            style={{ backgroundColor: "Silver" }}
            className="outline-none px-4 py-1 rounded-sm text-white shadow-lg"
          >
            Silver
          </button>
          <button
            onClick={() => setColor("ForestGreen")}
            style={{ backgroundColor: "ForestGreen" }}
            className="outline-none px-4 py-1 rounded-sm text-white shadow-lg"
          >
            ForestGreen
          </button>
          <button
            onClick={() => setColor("#B0C4DE")}
            style={{ backgroundColor: "#B0C4DE" }}
            className="outline-none px-4 py-1 rounded-sm text-white shadow-lg"
          >
            Lightsteel Blue
          </button>
          <button
            onClick={() => setColor("#4682B4")}
            style={{ backgroundColor: "#4682B4" }}
            className="outline-none px-4 py-1 rounded-sm text-white shadow-lg"
          >
            Steel Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
