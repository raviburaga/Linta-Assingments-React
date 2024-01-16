import React from "react";
import NavbarComponent from "./NavbarComponent";

function ContactComponent(){
    return(
        <>
            <NavbarComponent />
            <section className="justify-center flex m-4  bg-red-500 rounded-xl flex-wrap hover:shadow-2xl">
                <div className="text-2xl m-4" >
                    <h1>
                        <b>Contact</b>
                    </h1>
                </div>
                <div className=" mt-12 p-10 m-4 text-xl leading-10 bg-green-500 rounded-3xl flex-wrap shadow-3xl">
                    <form>
                        Name :  <input className="border m-4 items-center rounded-3xl p-2" type="text" placeholder="Enter Your Name"></input> <br></br>
                        Phone : <input className="border m-4 rounded-3xl p-2" type="tel" placeholder="Enter Phone Number"></input>  <br></br>
                        E-mail : <input className="border m-4 rounded-3xl p-2" type="email" placeholder="Enter your mail" required></input> <br></br>
                        Comments <br></br><textarea className="border items-center m-4 rounded-3xl p-2" placeholder="Enter Reason For Contacting me" cols="40"></textarea> <br></br>
                        <button className="border  p-2 rounded-3xl transition duration-300" type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </>
    );
}
export default ContactComponent;