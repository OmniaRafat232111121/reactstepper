import { useState } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Stepper from "./Component/Stepper";
import StepperControl from "./Component/StepperControl";

import Account from "./Component/steps/Account";
import Details from "./Component/steps/Details";
import Payment from "./Component/steps/Payment";
import Final from "./Component/steps/Final";
import { UseContextProvider } from "./contexts/StepperContext";

import './App.css';
import { setLanguage } from './store/actions/app'
import { withTranslation } from './withTranslation';
import { isRTL, getLocalizedSteps } from './App.helper';

function App({ ...props }) {
  const { localization, language } = props;
  const [currentStep, setCurrentStep] = useState(1);

  const steps = getLocalizedSteps(localization);

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account localization={localization} />;
      case 2:
        return <Details localization={localization} />;
      case 3:
        return <Payment localization={localization} />;
      case 4:
        return <Final localization={localization} />;
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
    <div className={isRTL(language) && 'rtl'}>
      <div>
        <div id="language-container">
          <div className="language-item" onClick={() => props.setLanguage('ar')}>
            <p>{localization.arabic}</p>
          </div>
          <div className="language-item" onClick={() => props.setLanguage('en')}>
          <p>{localization.english}</p>
        </div>
        </div>
      </div>
      <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper 
          steps={steps}
          currentStep={currentStep}
          localization={localization}
        />
        <div className="my-10 p-10">
        <UseContextProvider>
        {displayStep(currentStep)}
        </UseContextProvider>
        </div>

    
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
          localization={localization}
        />
        
      )}
    </div>
    </div>
    
  );
}

const mapStateToProps = state => ({
  language: state.app.language,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
        setLanguage,
    },
    dispatch,
  );

  export default withTranslation(connect(mapStateToProps, mapDispatchToProps)(App));