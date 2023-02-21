
import './App.css';
import Stepper from './Component/Stepper';
import StepperControl from './Component/StepperControl';
function App() {
  
  return (
    <div className="md:w-1/2 mx-auto  rounded-md shadow-xl bg-gray-600 pb-2 mt-5">
     {/*stepper*/}
    <div className='container horizontal mt-5'>
    <Stepper/>
    </div>
     {/*StepperCOntrol*/}
     <StepperControl/>
    </div>
  );
}

export default App;
