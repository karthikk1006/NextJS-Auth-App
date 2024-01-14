"use client"

import React from "react"
import { useState } from "react"
import axios from "axios"
import { sendEmail } from "@/helpers/mailer"
import { useRouter } from "next/navigation"

export default function ForgotPassword(){
    const router=useRouter()
    const [email,setEmail]=useState("")
    const [isConfirmed,setIsConfirmed]=useState(false)

    async function onConfirm(){
        setIsConfirmed(true);

         await axios.post("/api/users/forgotpassword",{email})

        router.push("/changepassword")




    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <label htmlFor="email">Email</label>
        <input type="text"
            id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            />
            <button 
            onClick={onConfirm}
    className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Confirm</button>
    <div className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{isConfirmed?"We have sent an email with the token.":""}</div>

        </div>
    )
}