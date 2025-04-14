import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () =>{

    const [isSignInForm, setIsSignInform] = useState(true);
    const toggleForm =() => {
     setIsSignInform(!isSignInForm);
    }
return (
    <div >
       <Header />
       <div className="absolute" >
       <img className=""
       src="https://www.pcworld.com/wp-content/uploads/2025/04/Netflix-Hintergrund.jpg?quality=50&strip=all" 
        alt="Netflix background" />
        <div className="absolute inset-0 bg-black/50"></div>
         </div>
        <form className="max-w-[450px] my-26 mx-auto right-0 left-0 absolute p-14 rounded-md bg-black/70 text-white">
        <h1 className="text-white text-3xl font-bold mt-0 mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (
            <input type="text" 
            placeholder="Full Name" 
            className="w-full p-4 my-2 bg-[#141414] placeholder-[#b3b3b3] border border-[#5e5d5d] text-gray-400 rounded-md "
            />)}
            <input type="text" 
            placeholder="Email or mobile number" 
            className="w-full p-4 my-2  bg-[#141414] placeholder-[#b3b3b3] border border-[#5e5d5d] text-gray-400 rounded-md "
            />
            <input type="text" 
            placeholder="Password" 
            className="w-full p-4 my-2  bg-[#141414] placeholder-[#b3b3b3] border border-[#5e5d5d] text-white rounded-md"
            />
            <button className="w-full p-2 my-2 bg-red-600 rounded-md">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <h1 className="text-center text-gray-400">OR</h1>
            <button className="w-full p-2 my-4 bg-[#4f4e4e]/60 rounded-md ">Use a Sign-In code</button>
            <h1 className="text-center text-white underline">Forgot Password?</h1>
            <div className="mt-4">
            <input type= "checkbox" className="w-4 h-4 border border-gray-300 "
            />
            <label className="px-3  text-white/90">Remember Me</label>
            </div>
            <h1 className="mt-4 text-[#9d9d9d]" onClick={toggleForm}>
                {isSignInForm ? (
                    <> 
                    New to Netflix? <span className="text-white font-bold cursor-pointer">Sign Up now</span>.
                    </> ) : 
                    (<>Already registered ?<span className="text-white font-bold cursor-pointer">Sign In now.</span> 
                    </>)}
                    </h1>
            <p className="mt-4 text-[#6f6f6f] text-xs" >This page is protected by Google reCAPTCHA to ensure you're not a bot</p>
        </form> 
    </div>
)
}

export default Login;