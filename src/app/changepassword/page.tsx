"use client"

import React from "react"
import { useState } from "react"
import axios from "axios"
import { sendEmail } from "@/helpers/mailer"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Toaster,toast } from "react-hot-toast"
export default  function ForgotPassword(){
    const router=useRouter()
    const [password,setPassword]=useState("")

    async function onSubmit(){
        const urlToken=window.location.search.split("=")[1]
        await axios.post("/api/users/changepassword",{newPassword:password,token:urlToken}).then((res)=>{
            toast.success("Changed Password")

        }).catch((err)=>{
            toast.error(err.message)
        })




    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Toaster/>
            <label htmlFor="password">New Password</label>
        <input type="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            />
            <button 
            onClick={onSubmit}
    className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Submit</button>
    <Link href="/login">Back to login</Link>


        </div>
    )
}