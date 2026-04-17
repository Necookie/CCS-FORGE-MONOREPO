import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-[#00E5FF] text-[#1A1A24] font-bold rounded-full px-6 py-3 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};
