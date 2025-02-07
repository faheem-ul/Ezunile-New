import React from "react";

import { cn } from "@/lib/utils/twMerge";
interface ButtonProps {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  loader?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  loader,
  onClick,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        type="submit"
        disabled={loader}
        className={cn(
          " fill w-full py-3 px-2  flex justify-center items-center font-inter rounded-[40px] border border-[#FFFFFF] bg-gradient-to-tr from-[#154454] to-[#000000] text-[16px] font-bold leading-[25.5px] text-[#FFFFFF]",
          className
        )}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
