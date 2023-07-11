import React from "react";
import "./index.css";
function App() {
  let currentDate = new Date(2020, 5, 2, 15);
  currentDate = currentDate.getHours();
  let greeting = "";
  const cssStyle = {};

  if (currentDate >= 1 && currentDate < 12) {
    greeting = 'GOOD MORNING';
    cssStyle.color = '#00b894';
  } else if (currentDate >= 12 && currentDate < 20) {
    greeting = "GOOD AFTERNOON";
    cssStyle.color = "orange";
  } else {
    greeting = "GOOD NIGHT";
    cssStyle.color = "blue";
  }

  return (
    <>
      <div>
        <h1>
          Hello Sir, <span style={cssStyle}>{greeting}</span>
        </h1>
      </div>
    </>
  );
}

export default App;
