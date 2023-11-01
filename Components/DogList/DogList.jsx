
import React from "react";

export default function DogList(props) {
const {dogsList} =props
  return (
    <div className="shopping-cart">
      <h3 style={{ textAlign: "center" }}>
        Cute Dogs
        <span role="img">
          🐶
        </span>
      </h3>
      {dogsList.map((dog) => (
        <img src={dog} alt="" key={dog}/>
      ))}
    </div>
  );
}
