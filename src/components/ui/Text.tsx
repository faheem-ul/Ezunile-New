import React, { forwardRef } from "react";

import { cn } from "@/lib/utils/twMerge";

interface Props {
  children: React.ReactNode;
  className?: string;
  as?: string;
  onClick?: (
    event: React.MouseEvent<HTMLHeadingElement | HTMLParagraphElement>
  ) => void;
  id?: string;
}

const Text = forwardRef<HTMLHeadingElement | HTMLParagraphElement, Props>(
  (props, ref) => {
    const { children, className, as, onClick, id = "" } = props;

    if (as === "h1") {
      return (
        <h1
          ref={ref}
          className={cn(
            "font-semibold text-[70px] leading-[88px] text-white font-inter",
            className
          )}
          onClick={onClick}
          id={id}
        >
          {children}
        </h1>
      );
    }

    if (as === "h2") {
      return (
        <h2
          ref={ref}
          className={cn(
            "text-[40px] font-inter leading-[43.2px] text-white",
            className
          )}
          id={id}
          onClick={onClick}
        >
          {children}
        </h2>
      );
    }

    return (
      <p
        ref={ref}
        className={cn(
          "text-white text-[24px] font-normal leading-[22.4px] font-inter",
          className
        )}
        onClick={onClick}
        id={id}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";

export default Text;
