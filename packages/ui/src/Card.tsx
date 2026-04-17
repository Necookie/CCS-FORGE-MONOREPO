import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={`bg-[#252634] border border-white/5 rounded-2xl p-6 ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  );
};
