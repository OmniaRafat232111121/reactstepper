
import './App.css';
import Stepper from './Component/Stepper';
import StepperControl from './Component/StepperControl';

function App() {
  return (
    <div className="md:w-1/2 mx-auto bg-white rounded-md sha">
     {/*stepper*/}
     <Stepper/>
     {/*StepperCOntrol*/}
     <StepperControl/>
    </div>
  );
}

export default App;
