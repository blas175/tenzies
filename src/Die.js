import React from "react";

export default function Die(props) {
  // const [isHeld, setIsHeld] = React.useState(props.isHeld);
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  };

  return (
    <div className="die-face" style={styles} onClick={props.onClick}>
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}
