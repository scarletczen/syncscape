import Button from "@components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "@assets/logo.svg";
import UserSelector from "./components/UserSelector";
import { useState } from "react";
import useLoginMutation from "../../hooks/auth/useLoginMutation";
import AddCredentials from "./components/AddCredentials";
import { FcGoogle } from "react-icons/fc";
import Stepper from "./components/Stepper";
import Terms from "./components/Terms";

function Register() {
  const [creator, setCreator] = useState<"solo" | "team">("solo");
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const loginMutation = useLoginMutation();
  const handleContinue = async () => {
    if (currentStep === 2) {
      await loginMutation();
      navigate("/dashboard");
    } else setCurrentStep((prev) => prev + 1);
  };
  return (
    <main className="flex items-center justify-center w-full h-full sm:p-8">
      <div className="flex flex-col h-full sm:h-max w-full gap-8 p-4 sm:min-w-[375px] lg:min-w-[500px] max-w-[500px] rounded-md sm:p-8 sm:w-max">
        <div className="flex items-center justify-center w-full sm:hidden">
          <Logo className="w-24 h-auto" />
        </div>
        <hgroup className="space-y-4">
          <h1 className="w-full text-2xl font-semibold text-center text-mauve12 sm:text-left sm:text-3xl">
            {currentStep === 2 ? "Terms of Service" : "Get started"}
          </h1>
          <h6 className="text-sm text-mauve10">
            {currentStep === 2 ? (
              <>By clicking "Continue" you agree to our Terms of Service.</>
            ) : (
              <>
                Anyone can earn their first dollar online. Start with what you
                know, see what sticks, and get paid. It's that easy.
              </>
            )}
          </h6>
        </hgroup>
        {currentStep === 0 && <AddCredentials />}
        {currentStep === 1 && (
          <UserSelector value={creator} onChange={setCreator} />
        )}
        {currentStep === 2 && <Terms />}
        <div className="flex flex-col gap-4 justify-evenly">
          <Button onClick={handleContinue}>Continue</Button>
          {currentStep === 0 && (
            <>
              <div className="flex items-center gap-1">
                <span className="flex border-t grow border-mauve8/50" />
                <span className="mb-1 text-mauve10">or</span>
                <span className="flex border-t grow border-mauve8/50" />
              </div>
              <Button variant={{ intent: "outline" }}>
                {" "}
                <FcGoogle className="w-5 h-auto" />
                Sign up with Google
              </Button>
            </>
          )}
        </div>

        <span className="w-full h-full text-sm text-center">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="font-semibold text-violet11 hover:underline"
          >
            Sign in
          </Link>
        </span>

        <Stepper currentStep={currentStep} />
      </div>
    </main>
  );
}

export default Register;
