import React from 'react'

export default function Login() {
    function handleForm(e) {
        e.preventDefault();
        console.log("Submitted");
    }
    return (
        <div className="flex h-screen bg-gray-200">
        <div className="m-auto w-1/3 text-white flex flex-wrap
                        justify-center shadow-lg bg-indigo-900">
            <form className="m-5 w-10/12" onSubmit={handleForm}>
                <h1 className="w-full text-4xl text-center my-6 tracking-widest">
                    Login
                </h1>
                <div className="w-full my-6">
                    <input 
                        type="email"
                        className="p-2 rounded shadow w-full text-black"
                        placeholder="Email or Username"
                    />
                </div>

                <div>
                    <input 
                        type="password"
                        className="p-2 rounded shadow w-full text-black"
                        placeholder="Password"
                    />
                </div>
                <div className="w-full my-10">
                    <button 
                        type="submit"
                        className="p-2 rounded shadow w-full bg-yellow-400 text-black"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
    );
    
}
