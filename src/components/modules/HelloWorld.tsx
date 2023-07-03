import React, { useState } from "react";

import reactLogo from "@/assets/images/icons/react.svg";

const HelloWorld = (): React.ReactElement => {
  //  #region State

  const [count, setCount] = useState(0);

  //  #endregion

  //  #region Handlers

  //  #endregion

  //  #region Effects

  //  #endregion

  //  #region Conditional Components

  //  #endregion

  //  #region Render

  return (
    <div style={{ margin: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more + some</p>
    </div>
  );

  //  #endregion
};

export default HelloWorld;
