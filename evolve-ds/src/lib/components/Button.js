
import React from "react";
import { flex } from "styled-system";

const Button = (props) => {
  return (
    <button
      className="dribbble-button"
      style={{
     
        display:  "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: '12px',
        gap: "8px",
        position: "absolute",
        width: "75px",
        height: "40px",
        left: "20px",
        top: "20px",
        backgroundColor: "#2C2C2C",
        border: "1px solid #2C2C2C",
        borderRadius: "8px",
        boxSizing: "border-box",
        color: "#F5F5F5",
        fontStyle: "normal",
        fontWeight: "400",
        fontFamily: 'Comic Sans MS',
        




      }}
    >
      {props.label}
    </button>
  );
};

export default Button;


