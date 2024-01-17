"use client"
import axios from "axios"
import { Toaster,toast } from "react-hot-toast"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { log } from "console";
export default function ProfilePage(){
    const router=useRouter()
    const [data,setData]=useState("nothing")
    async function logout(){
        try {
            const response=await axios.get("/api/users/logout");
            toast.success("Logout success")
            
        } catch (error) {
            toast.error("Logout unsuccessful")
            
        }
    }
    async function getUserDetails() {
        const res= await axios.get("/api/users/me")
        console.log(res.data._id);
        setData(res.data._id)
    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white">
            <Toaster/>
        <h1 className="flex flex-col items-center justify-cente text-3xl font-semibold mb-6 w-full max-w-md">Profile</h1>
        <hr className="w-full mb-6 border-t border-gray-600"/>
        <h2 className="flex flex-col items-center justify-cente bg-blue-500 p-2 rounded-lg w-full max-w-md">{data==="nothing"?"nothing":<Link href={"/profile/"+data}>
        {data}</Link>}</h2>
        <hr className="w-full my-6 border-t border-gray-600" />
        <button className="w-full p-2 bg-green-500 text-white rounded-lg mb-6 focus:outline-none focus:bg-green-600 w-full max-w-md" onClick={logout}>Logout</button>
        <hr className="w-full my-6 border-t border-gray-600"/>
        <Link href="/login" className="flex flex-col items-center justify-cente text-blue-400 hover:underline mb-6 block w-full max-w-md">Back to Login</Link>
        <hr className="w-full my-6 border-t border-gray-600"/>  
        <hr />
        <button  className="w-full p-2 bg-violet-500 text-white rounded-lg mb-6 focus:outline-none focus:bg-violet-600 w-full max-w-md" onClick={getUserDetails}>ME</button>
        </div>

    )
}