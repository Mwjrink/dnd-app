import React from "react";
import "./ExploreContainer.css";

interface ContainerProps {
  name: string;
}

function ExploreContainer({ name }: ContainerProps) {
  return (
    <div className="container">
      <strong>{name}</strong>
    </div>
  );
}

export default ExploreContainer;
