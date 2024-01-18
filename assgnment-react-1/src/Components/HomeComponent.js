import React, {useState, useEffect} from "react";
import NavbarComponent from "./NavbarComponent";

function HomeComponent (){
  const[count, setCount ] = useState(0);
  const fruits = ["Mango","Apple","Jack","Guava","Grapes"] ;
  const jSon = {
     "Mango": 20 , 
     "Apple":30 , 
     "Jack":40 , 
     "Guava" :90 ,
     "Grapes": 100
  };

  console.log(count);
  const btnClk = ()=> {
    setCount(count + 1)
  };


    return(
        <>
             <section className=' flex-column items-center justify-center h-screen'>
        <NavbarComponent />
        <div className='items-center flex justify-center border w-200 h-100 m-10 p-8  bg-red-500 rounded-xl '  >
          <img className='rounded-xl w-200 h-100 hover:shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-101  duration-300' src='https://static.vecteezy.com/system/resources/previews/000/539/121/original/vector-vintage-lettering-illustration-of-welcome.jpg' alt='This Is Welcome post'></img>
        </div>
        {/* <div className="items-center flex justify-center border w-200 h-100 m-10 p-8  bg-green-500 rounded-xl ">
          <h1 className="">
            Counter 
          </h1>
          <p>
            {count}
          </p>{" "}
          <button className="bg-black text-red-500 rounded-full p-2 " onClick={btnClk}>
          count
          </button>
        </div>
        <div className="items-center flex justify-center border w-200 h-100 m-10 p-8  bg-red-500 rounded-xl ">
          <ol>
            {
              Object.entries
               (jSon).map(([frt,prc])=>(
                <li>{frt} = {prc} </li>
               ) ) 
            }
          </ol>
        </div> */}
      </section>
        </>
    );
}

export default HomeComponent;