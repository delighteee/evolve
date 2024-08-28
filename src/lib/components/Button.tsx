import React from "react";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button
      className="evolve-button"
      style={{
        backgroundColor: "red",
        fontSize: "24px",
        border: "none",
        padding: "24",
        borderRadius: "8px",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
