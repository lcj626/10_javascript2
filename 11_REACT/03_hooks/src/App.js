import {useState} from "react";
import UseEffectBasic from "./01_useEffect/01_useEffect.basic";
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import UseEffectCleanUp from "./01_useEffect/04_useEffect-cleanup";
import { Container } from "./01_useEffect/05_useEffect-cleanup-example";
import Timer from "./01_useEffect/05_useEffect-cleanup-example";
import Quiz from "./01_useEffect/test";
import UseReducerBasic, { Counter } from "./02_useReducer/01_reducer-basic";
import ReducerFormControl, { Input } from "./02_useReducer/02_reducer-form-control";
import HardCalculator from "./03_useMemo/01_hard-caculator";
import ComplexCalculator from "./03_useMemo/02_complex-calculator";
import UseMemoComponent from "./03_useMemo/03_performance-optimization";
import LocationComponent from "./03_useMemo/04_object-type-problem";
import CallBackProblem from "./04_useCallback/01_problem";
import FunctionMemorization from "./04_useCallback/02_function-memorization";
import CallBackComponent from "./04_useCallback/03_composited-component";
import CounterRef from "./05_useRef/01_problem";
import UseRefCounter from "./05_useRef/02_resolve-as-useRef";
import LoginComponent from "./05_useRef/03_inputref";
import Header from "./06_useContext/01_props-drilling";
import Page from "./06_useContext/01_props-drilling";
import ContextContainer from "./06_useContext/02_useContext";
import CustomHooks from "./07_custom-hooks/02_custom-hook";


function App() {

  const [message, setMessage] = useState("안녕하세요");

  return (
      <>
        {/* <UseEffectBasic message={message}/> */}
        {/* <UseEffectMount/> */}
        {/* {<UseEffectUpdate/>} */}
        {/* <UseEffectCleanUp/> */}
        {/* <Timer /> */}
        {/* <Container /> */}
        {/* <Quiz/> */}
        {/* <Counter/> */}
        {/* <UseReducerBasic/> */}
        {/* <ReducerFormControl/>
        <br/>
        <Input/> */}
        {/* <HardCalculator/> */}
        {/* <ComplexCalculator/> */}
        {/* <UseMemoComponent/> */}
        {/* <LocationComponent/> */}
        {/* <CallBackProblem/> */}
        {/* <FunctionMemorization/> */}
        {/* <CallBackComponent/> */}
        {/* <CounterRef/> */}
        {/* <UseRefCounter/> */}
        {/* <LoginComponent/> */}
        {/* <Page/> */}
        {/* <ContextContainer/> */}
        <CustomHooks/>
      </>
  );
}

export default App;
