import React from "react";
import "./prodotto.css";

function name(props) {
  return (
    <div className="prodotto">
      <img src={props.photo} alt="" />
      <div className="info">
        <p>{props.name}</p>
        <p>{props.prezzo}$</p>
      </div>
      <button>Scopri</button>
    </div>
  );
}

export default name;
