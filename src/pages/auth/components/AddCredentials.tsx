import Input from "@components/Input/Input";

function AddCredentials() {
  return (
    <div>
      <Input label="Your email address" placeholder="Enter your email" />
      <Input label="Choose a password" placeholder="Enter your password" />
    </div>
  );
}

export default AddCredentials;
