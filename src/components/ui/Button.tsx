import React from "react";

import { cn } from "@/lib/utils/twMerge";
interface ButtonProps {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  loader?: boolean;
  type?: "button" | "submit" | "reset"; 
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  loader,
  type = "button",
  onClick,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        disabled={loader}
        className={cn(
          " fill w-full py-2 px-2  flex justify-center items-center font-inter rounded-[40px] border border-[#FFFFFF] bg-gradient-to-tr from-[#154454] to-[#000000] text-[16px] font-bold leading-[25.5px] text-[#FFFFFF] ",
          className
        )}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
