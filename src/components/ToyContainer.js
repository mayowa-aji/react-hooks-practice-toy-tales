import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, setToys}) {
  const card = toys.map(toy => {
    return <ToyCard key={toy.id} {...toy} />
  })

  return (
    <div id="toy-collection">{card}</div>
  );
}

export default ToyContainer;
