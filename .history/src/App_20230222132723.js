import { useState } from "react";
import Stepper from "./Component/Stepper";
import StepperControl from "./Component/StepperControl";

import Account from "./Component/steps/Account";
import Details from "./Component/steps/Details";
import Payment from "./Component/steps/Payment";
import Final from "./Component/steps/Final";
import { UseContextProvider } from "./contexts/StepperContext";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Account Information",
    "Personal Details",
    "Payment",
    "Complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Payment />;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper 
        steps={steps}
        currentStep={currentStep} />
        <div>
        <UseContextProvider>
        {}
        </UseContextProvider>
        </div>

    
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
        
      )}
    </div>
  );
}

export default App;