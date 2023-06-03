import * as CheckboxRadix from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

const Checkbox = () => (
  <CheckboxRadix.Root
    className="border hover:bg-violet3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white  outline-none focus:ring-2 focus:ring-violet11"
    defaultChecked
    id="c1"
  >
    <CheckboxRadix.Indicator className="text-violet11">
      <CheckIcon />
    </CheckboxRadix.Indicator>
  </CheckboxRadix.Root>
);

export default Checkbox;
