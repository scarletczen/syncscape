import { cn } from "@utils/cn";
import { cloneElement } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineUser,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";

interface UserSelectorProps {
  value: "solo" | "team";
  onChange: (value: UserSelectorProps["value"]) => void;
}

const userOptions = [
  {
    icon: <AiOutlineUser />,
    title: "I'm a solo creator",
    description: "I'm setting up a storefront for myself.",
    value: "solo",
    id: "1",
  },
  {
    icon: <AiOutlineUsergroupAdd />,
    title: "I'm a team member",
    description: "I'm setting up a storefront for a team.",
    value: "team",
    id: "2",
  },
] as const;

function UserSelector({ value, onChange }: UserSelectorProps) {
  return (
    <div className="space-y-4">
      {userOptions.map((option) => (
        <div
          key={option.id}
          onClick={() => onChange(option.value)}
          className={cn(
            "relative flex gap-2 p-2 transition-all border rounded-md cursor-pointer hover:ring ring-violet11",
            value === option.value && "ring"
          )}
        >
          <div className="p-2 border rounded-lg">
            {cloneElement(option.icon, {
              className: "w-8 h-auto fill-mauve12",
            })}
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">{option.title}</h3>
            <p className="w-3/4 text-sm sm:w-full text-mauve10">
              {option.description}
            </p>
          </div>
          {value === option.value && (
            <AiOutlineCheckCircle className="absolute w-6 h-auto fill-violet11 top-5 right-2" />
          )}
        </div>
      ))}
    </div>
  );
}

export default UserSelector;
