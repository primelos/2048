import React, { useState } from 'react'
import './App.css';
import Block from './components/Block'


function App() {
  const [data, setData] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
  return (
    <>
      <h1>Welcome to 2048</h1>

      <div
        style={{
          background: "#AD9D8F",
          width: "max-content",
          margin: "auto",
          padding: '5px',
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        {data.map((row, oneIndex) => {
          return (
            <div style={{ display: "flex" }} key={oneIndex}>
              {row.map((digit, index) => (
                <Block num={digit} key={index} />
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;


// npx create-react-app
// npm i lodash.clonedeep
