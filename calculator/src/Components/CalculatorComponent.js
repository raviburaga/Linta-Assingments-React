import React, { useState } from "react";

function Calculator() {
  const [input, setinput] = useState("");
  const getInput = (button) => {
    if (button === "C") {
      setinput("");
    } else if (button === "=") {
      try {
        setinput(eval(input));
      } catch (error) {
        setinput("Invalid");
      }
    } else if (button === "BS") {
      if(input === "Invalid"){
        setinput("");
      }
      else{
        setinput((previnput) => previnput.slice(0, -1));
      }
      
    } else if (input === "Invalid") {
      setinput(button);
    } 
    else {
      setinput((previnput) => previnput + button);
    }
  };

  const buttons = [
    "(",
    ")",
    "/",
    "C",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
  ];
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gradient-to-tr from-[#FFB996] to-[#D9EDBF] flex-wrap border-2">
      <div className="rounded-xl leading-9 p-5 h-[80%] w-[30%] md:w-[60%] sm:w-[80%]  sm:bg-[#D9EDBF] bg-gradient-to-tr from-[#FFB996] to-[#D9EDBF] shadow-xl backdrop-blur-xl border-2">
      <div className="flex items-center justify-center text-3xl sm:xl ">
        <h1 className="mb-2 font-semibold drop-shadow-2xl tracking-wider font-serif text-[#294B29] cursor-alias "> Calculator </h1>
        </div>
        <div className="flex items-center justify-center h-[30%] ">
        <input className="w-full border-2 cursor-not-allowed rounded-3xl h-[100%] text-2xl text-[#FFB534] text-center font-black shadow-md  bg-transparent" type="text" value={input} readOnly />
        </div>
        <br />
        <div className=" border-2  p-2 text-bold rounded-2xl  h-[55%] grid grid-cols-4 gap-4 shadow-md ">
        {buttons.map((button) => (
          <button className=" text-[#294B29] rounded-full  font-bold   shadow-inner  sm:rounded-full  hover:text-[#FFB534] hover:scale-110 hover:shadow-xl duration-500" onClick={() => getInput(button)}>{button}</button>
        ))}

        <button className=" rounded-full  font-black  sm:border-none  shadow-inner  sm:rounded-lg   hover:text-[#FFB534] hover:scale-110 hover:shadow-xl hover:border-2 duration-500" onClick={() => getInput("BS")}>&larr;</button>
        <button className=" rounded-full font-black  sm:border-none  shadow-inner  sm:rounded-lg   hover:text-[#FFB534] hover:scale-110 hover:shadow-xl hover:border-2 duration-500" onClick={() => getInput("=")}>=</button>

        </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;