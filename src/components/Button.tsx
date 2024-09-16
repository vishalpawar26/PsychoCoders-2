import React from "react";

interface ButtonProps {
  lable: string;
  variant?: "outline" | "filled";
  className?: string;
  onClick: () => void;
}

const Button = ({ lable, variant, onClick, className }: ButtonProps) => {
  variant = variant ? variant : "outline";
  return (
    <button
      onClick={onClick}
      className={`${variant === "outline" ? "border border-off-white hover:bg-off-white hover:text-eerie-black" : "bg-off-white text-eerie-black hover:bg-neutral-200"} rounded px-4 py-1 transition-colors duration-100 ${className}`}
    >
      {lable}
    </button>
  );
};

export default Button;
