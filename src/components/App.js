import React, { useState } from "react";

import "../styles/App.css";

const searchArray = [
  "Newton",
  "School",
  "Newton School",
  "React",
  "Preact",
  "Node",
  "Mongoose",
  "Angular",
  "Vue",
  "Apple",
  "Microsoft",
  "Netflix",
  "Meta"
];
const App = () => {
  const [search, setSearch] = useState("");

  const [change, setChange] = useState([]);

  const same = (e) => {};

  return (
    <div id="main">
      <input
        type="text"
        id="search-input"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setChange([...change, search]);
        }}
      />
      <p>Results</p>
      <ul>
        {searchArray.map((item, ind) => {
          return <li key={ind}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
