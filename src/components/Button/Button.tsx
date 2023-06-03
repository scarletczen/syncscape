import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

import { cn } from "@utils/cn";

const buttonVariants = cva(
  [
    "text-[13px] py-2 px-4 rounded-md hover:opacity-90 disabled:opacity-50 disabled:pointer-events-none",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-violet11 text-mauve1"],
        outline: ["text-violet11 bg-transparent border border-violet11"],
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {}

interface Props extends React.ComponentProps<"button"> {
  variant?: ButtonVariants;
}

const PrimaryButton = ({ children, variant, className, ...props }: Props) => {
  return (
    <button {...props} className={cn(buttonVariants(variant), className)}>
      {children}
    </button>
  );
};

export default PrimaryButton;
