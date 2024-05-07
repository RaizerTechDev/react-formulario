import React from "react";
import Register from "../Register";
//import Button from "../Button";
import "./index.css";

function UIComponents() {
    return (
    <div className="container">
      <h1 className="title">Contato</h1>

      {/*vai receber o componente*/}
      <Register />    
    </div>
  );
}

export default UIComponents;
