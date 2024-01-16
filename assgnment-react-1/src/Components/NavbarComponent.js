import React from "react";

function NavbarComponent(){
    return(
        <>
        <section className="p-2 m-4 flex justify-between bg-blue-100 rounded-full sticky top 0">
            <div>
                {/* <img className="" src="" alt="RAvi"></img> */}
                <h1 className="m-2 text-red-500 bg-blue-200 rounded-full p-2 hover:shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                    Ravi Buraga
                </h1>
            </div>
            <nav className=" items-center flex justify-center">
                <a className="m-2 text-blue-500 p-2 hover:shadow rounded-full hover:bg-blue-200 hover:shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" href="/"> Home </a>
                <a className="m-2 text-blue-500 p-2 hover:shadow rounded-full hover:bg-blue-200 hover:shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" href="/about">AboutUs</a>
                <a className="m-2 text-blue-500 p-2 hover:shadow rounded-full hover:bg-blue-200 hover:shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" href="/contact">Contact</a>
                <a className="m-2 text-blue-500 p-2 hover:shadow rounded-full hover:bg-blue-200 hover:shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" href="/services">Services</a>
            </nav>
        </section>
        </>
    );
}

export default NavbarComponent;
