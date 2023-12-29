import "./App.css";
import {useState} from "react";
function App() {
  const [count, setcount]= useState(0);
  function decreaseHandler(){
    setcount(count-1);
  }
  function increaseHandler(){
    setcount(count+1);
  }
  function resetHandler(){
    setcount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[white] font-medium text-2xl">Increment & Decrement</div>
      <div className="bg-[white] flex justify-center  rounded-sm text-[#344151] ">
        <button onClick={decreaseHandler} className="w-[60px]  text-[3rem] text-center border-[1px] border-[black]">-</button>
        <div className="w-[200px] text-[3rem] text-center border-[1px] border-[black]">{count}</div>
        <button onClick={increaseHandler} className="w-[60px] text-[3rem] text-center border-[1px] border-[black]">+</button>
      </div>
      <button onClick={resetHandler} className="bg-[white] p-[10px] rounded-[10px] w-[80px]">Reset</button>
    </div>
  );
}

export default App;
