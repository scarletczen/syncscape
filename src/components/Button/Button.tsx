import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { cn } from "@utils/cn";

const buttonVariants = cva(
  [
    "text-[13px] py-2 px-4 rounded-md hover:opacity-90 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-violet11 text-mauve1"],
        outline: [
          "text-violet11 bg-transparent border border-violet11 hover:bg-violet3",
        ],
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
  isLoading?: boolean;
}

const Button = ({
  children,
  variant,
  className,
  isLoading,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={cn(
        buttonVariants(variant),
        className,
        isLoading && "opacity-60 pointer-events-none"
      )}
    >
      {isLoading && <AiOutlineLoading className="w-4 h-auto animate-spin" />}
      {children}
    </button>
  );
};

export default Button;
