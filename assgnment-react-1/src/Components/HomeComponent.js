import React from "react";
import NavbarComponent from "./NavbarComponent";

function HomeComponent (){
    return(
        <>
             <section className=' flex-column items-center justify-center h-screen'>
        <NavbarComponent />
        <div className='items-center flex justify-center border w-200 h-100 m-10 p-8  bg-red-500 rounded-xl '  >
          <img className='rounded-xl w-200 h-100 hover:shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-101  duration-300' src='https://static.vecteezy.com/system/resources/previews/000/539/121/original/vector-vintage-lettering-illustration-of-welcome.jpg' alt='This Is Welcome post'></img>
        </div>
      </section>
        </>
    );
}

export default HomeComponent;