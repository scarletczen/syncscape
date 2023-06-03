import React, { forwardRef } from "react";

import * as Label from "@radix-ui/react-label";
import { cn } from "@utils/cn";

interface Props extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  prefix?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, className, error, prefix, ...props }, ref) => {
    return (
      <div className="flex flex-col flex-wrap items-start w-full gap-1">
        {/* LABEL */}
        <Label.Root
          className={cn(
            "text-sm font-medium leading-9 text-blackA",
            props.required && "after:content-['*'] after:text-red-400"
          )}
          htmlFor={label}
        >
          {label}{" "}
        </Label.Root>
        {/* INPUT WITH OPTIONAL PREFIX */}
        <div className="flex w-full">
          {prefix && (
            <div
              className={cn(
                "rounded-[4px] bg-violetA5 shadow-violetA9 inline-flex h-[35px] appearance-none items-center justify-center  px-[15px] text-[15px] leading-none  border border-r-0 rounded-r-none",
                error && "ring-1 ring-red-400"
              )}
            >
              {prefix}
            </div>
          )}
          <input
            id={label}
            ref={ref}
            className={cn(
              "bg-violetA5 shadow-violetA9 inline-flex h-[35px] w-full appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-violet border  outline-none focus:shadow-[0_0_0_2px_rgba(127,17,224,0.2)] selection:color-violet selection:bg-violetA9",
              prefix && "rounded-l-none rounded-r-[4px]",
              error && "ring-1 ring-red-400",
              className
            )}
            {...props}
          />
        </div>
        {/* ERROR */}
        {error && <span className="text-[12px] text-red-700">{error}</span>}
      </div>
    );
  }
);

export default Input;
