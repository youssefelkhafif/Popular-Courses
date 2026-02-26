

import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState()
    const [mail, setMail] = useState()
    const [password, setPassword] = useState()
    const [confirms, setConfirms] = useState()


    const email = (e) => {
        setMail(e.target.value)
    }

    const inpname = (e) => {
        setName(e.target.value)
    }

    const inppassword = (e) => {
        setPassword(e.target.value)
    }

    const confirm = (e) => {
        setConfirms(e.target.value)

    }

    console.log(mail);
    





    const hasAtandDot = mail?.includes('@') && mail?.includes('.')

    const passwordlenght = password?.length >= 8

    const passwordsympol = /[^a-zA-Z0-9]/.test(password);

    const isConfirmValid = password === confirms;


    const sign = () => {


        if (hasAtandDot && passwordlenght && passwordsympol && isConfirmValid) {
            alert("Sign Up Successful ");
            setMail("");
            setName("");
            setPassword("");
            setConfirms("")
            navigate("/")
        } else {
            let msg = "Fix the following errors:\n";
            if (!hasAtandDot) msg += "- Email is invalid\n";
            if (!passwordlenght) msg += "- Password must be at least 8 characters\n";
            if (!passwordsympol) msg += "- Password must contain at least one symbol\n";
            if (!isConfirmValid) msg += "- Confirm password does not match\n";
            alert(msg);
            
            
        }
    };





    return (
        <div className="w-screen h-screen bg-linear-to-br from-blue-200 to-green-400  flex justify-center items-center" >
            <div className=" gap-10 w-120 h-140 bg-white rounded-3xl p-10 flex-col flex items-center" >
                <h1 className="font-bold text-3xl">Sign Up</h1>
                <div className="flex-col flex gap-3">
                    <input value={name} onChange={inpname} type="text" placeholder="Your Name" className="w-80 h-10 rounded-3xl p-5 border" />
                    <input value={mail} onChange={email} type="email" placeholder="Your Email" className={` w-80 h-10 rounded-3xl p-5 border outline-none focus:outline-none ${mail
                        ? hasAtandDot ?
                            "border-green-500 text-green-400 focus:border-green-500  "
                            : "border-red-500 text-red-500 focus:border-red-500  "
                        : ""}`} />
                    <input value={password} onChange={inppassword} type="password" placeholder="Your Password" className="w-80 h-10 rounded-3xl p-5 border" />

                    <div className="flex flex-col gap-y-2 w-80 p-3">
                        <p className={` w-80
                         ${password
                                ? passwordlenght
                                    ? "text-green-900"
                                    : "text-red-800"
                                : ""
                            }`}>the password must be at least 8 characters</p>
                        <p className={`${password
                            ? passwordsympol
                                ? "text-green-900"
                                : "text-red-800"
                            : ""}`}>the password must one symbol</p>
                    </div>

                    <input value={confirms} onChange={confirm} type="password" placeholder="Confirm Your Password" className={`-80 h-10 rounded-3xl p-5 border ${password
                        ? isConfirmValid
                            ? "text-green-700"
                            : "text-red-700"
                        : ""} `} />

                </div>
                <div>
                    <button onClick={sign} className="bg-[#4153ef] w-80 h-10 rounded-3xl">Sign Up</button>
                </div>


            </div>

        </div>
    );
}

export default Register;