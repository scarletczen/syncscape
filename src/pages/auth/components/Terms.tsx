import Checkbox from "@components/Checkbox/Checkbox";

function Terms() {
  return (
    <div className="space-y-1">
      <div className="p-2 text-sm rounded-md bg-mauve2">
        The user agrees not to impersonate any person and/or other entity or
        communicate under a false name or a name the user is not entitled or
        authorized to use. SignUp.com has the right (but not the obligation) to
        remove, prohibit, edit or discontinue any content on the Site, including
        content that has been posted by users.
      </div>
      <div className="flex gap-2 text-sm font-semibold">
        <Checkbox />
        <label>I accept the terms and conditions</label>
      </div>
    </div>
  );
}

export default Terms;
