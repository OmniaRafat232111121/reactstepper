import { useState } from 'react';
import './App.css';
import Stepper from './Component/Stepper';
import StepperControl from './Component/StepperControl';
import Account from './Component/steps/Account';
import Details from './Component/steps/Details';
import Final from './Component/steps/Final';
function App() {
  const [currentStep,setCurrentStep]=useState();
  const steps=[
    'Account information',
    'Personal Details',
    'Complete'
  ];
  const displaySteps=(step)=>{
    switch(step){
      case 1:
        return <Account/>
        case 2:
        return <Details/>
        case 3:
        return <Final/>
        default:
       
    }
  }
  return (
    <div className="md:w-1/2 mx-auto  rounded-md shadow-xl bg-white-300 pb-2 mt-5">
     {/*stepper*/}
    <div className='container horizontal mt-5'>
    <Stepper
    steps={steps} 
    currentStep={currentStep}
    />
    </div>
     {/*StepperCOntrol*/}
     <StepperControl/>
    </div>
  );
}

export default App;
