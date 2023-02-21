
import './App.css';
import Stepper from './Component/Stepper';
import StepperControl from './Component/StepperControl';
function App() {
  return (
    <div className="md:w-1/2 mx-auto  rounded-md shadow-xl bg-fuchsia-400 pb-2 mt-5">
     {/*stepper*/}
    <div className='container'>
    <Stepper/>
    </div>
     {/*StepperCOntrol*/}
     <StepperControl/>
    </div>
  );
}

export default App;
