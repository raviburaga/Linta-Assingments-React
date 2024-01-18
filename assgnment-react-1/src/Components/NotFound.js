import React from "react";


function NotFound(){
    return(
        <>
        
        <section className="flex items-center justify-center mt-10 p-10 h-screen bg-red-500 text-xl rounded-3xl hover:bg-green-500 transition ease-in-out delay-150   duration-300">
            <h1 className="text-xl text-blue-500 hover:text-2xl hover:text-black hover:shadow-2xl rounded-full p-4 transition ease-in-out delay-150   duration-300">
               <b> 404 Page NotFound Error </b>
            </h1>
        </section>
            
        </>
    );
}
export default NotFound;