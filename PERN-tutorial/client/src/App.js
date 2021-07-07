import "./App.css";
import React, { Fragment } from "react";

//COMPONENTS
import InputTodo from "./Components/InputTodo";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
      </div>
    </Fragment>
  );
}

export default App;
