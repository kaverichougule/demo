import React from "react";
import styles from "./Buttons.module.css";
function Buttons(props) {
    const buttonsDisplay=['C','1','2','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  return (
    <div className={styles.buttonContainer}>
      {buttonsDisplay.map((icon)=>{
        return <button className={styles.button}>{icon}</button>
      })}
    </div>
  );
}

export default Buttons;
