import React from "react";
import NavbarComponent from "./NavbarComponent";

function AboutComponent(){
    return(
        <>
        <NavbarComponent />
            <section className="flex-column items-center justify-center m-10 p-2 h-screen">
                <div className="mb-10 flex items-center justify-center text-2xl bg-red-500 p-4 rounded-3xl hover:rounded-full hover:bg-green-500 text-blue-500 hover:text-black shadow-2xl">
                    <h1>
                       <b>About Me</b>
                    </h1>
                </div>
                <div className="flex mb-10 items-center justify-center rounded-3xl hover:shadow-2xl flex-wrap">
                    <img className="rounded-full m-4 shadow-2xl transition ease-out-in hover:-translate-y-1 hover:scale-105 duration-300" src="https://i.ibb.co/FW7Kd3J/IMG-5270.jpg" alt="Ravi Buraga" width="300px" height='300px'></img>
                    <p className="shadow-2xl p-4 m-5 rounded-full hover:bg-green-100 transition ease-out-in hover:-translate-y-1 hover:scale-105 duration-300">
                        <b>
                            Ravi Buraga
                        </b> <br></br>
                        WebDeveloper
                    </p>
                </div>
                <div className="bg-green-500 flex items-center justify-center p-10 text-xl shadow-xl hover:bg-red-500 rounded-3xl hover:shadow-2xl">
                    <p className="leading-10">
                    I'm <b> Ravi Buraga </b>, I'm A <b>WebDeveloper</b>, I had Knowledge on <b>HTML</b>, <b>CSS</b> and <b>Javascript</b>. <br></br>
                    And Currently Learning  <b>ReactJs</b> which was been Teaching by Durga Prasad Reddy Sir From<b> Linta Teechnologies</b>. <br></br>
                    I'm Very Passionate about my work. <br></br>
                    My <b>Goal</b> is to Reach peak in my Career.
                    </p>
                </div>
            </section>
        </>
    );
}
export default AboutComponent;