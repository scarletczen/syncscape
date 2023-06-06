import { cn } from "@utils/cn";

interface StepperProps {
  currentStep: number;
}

function Stepper({ currentStep }: StepperProps) {
  return (
    <div className="flex flex-grow w-full gap-2 pb-5">
      <span
        className={cn(
          "flex-grow h-1 p-1 rounded-md bg-mauve4",
          currentStep >= 0 && "bg-violet11"
        )}
      />
      <span
        className={cn(
          "flex-grow h-1 p-1 rounded-md bg-mauve4",
          currentStep >= 1 && "bg-violet11"
        )}
      />
      <span
        className={cn(
          "flex-grow h-1 p-1 rounded-md bg-mauve4",
          currentStep >= 2 && "bg-violet11"
        )}
      />
    </div>
  );
}

export default Stepper;
