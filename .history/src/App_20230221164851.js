
import './App.css';
import Stepper from './Component/Stepper';
import StepperControl from './Component/StepperControl';

function App() {
  return (
    <div className="md:w-1/2 mx-auto bg-white rounded-">
     {/*stepper*/}
     <Stepper/>
     {/*StepperCOntrol*/}
     <StepperControl/>
    </div>
  );
}

export default App;
