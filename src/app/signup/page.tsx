"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Toaster,toast } from "react-hot-toast"


export default function SignupPage(){
    const router=useRouter()
const [user,setUser]=useState({
    email:"",
    password:"",
    username:""
})
const onSignup=async()=>{
    try {
        const respose=await axios.post("/api/users/signup",user);
        console.log(respose.data);    
        router.push('/login')
    } catch (error:any) {
        toast.error(error.message)
        
    }
}

return(
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white">
        <Toaster/>
        <h1 className="text-3xl font-semibold mb-6">Signup</h1>
        <hr className="w-full mb-6 border-t border-gray-600" />
        <label htmlFor="username" className="block text-sm font-medium mb-2">Username</label>
        <input type="text"
            id="username"
            value={user.username}
            onChange={(e)=>setUser({...user,username:e.target.value})}
            className="w-full p-2 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:border-blue-400 text-black w-full max-w-sm"
            />
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
        <input type="text"
            id="email"
            value={user.email}
            onChange={(e)=>setUser({...user,email:e.target.value})}
            className="w-full p-2 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:border-blue-400 text-black w-full max-w-sm"
            />
            <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
        <input type="password"
            id="password"
            value={user.password}
            onChange={(e)=>setUser({...user,password:e.target.value})}
            className="w-full p-2 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:border-blue-400 text-black w-full max-w-sm"
            />
            <button 
            onClick={onSignup}
            className="w-full bg-pink-500 text-white p-2 rounded-lg focus:outline-none focus:bg-pink-600 w-full max-w-sm">
              Signup
            </button>
        <Link href="/login" className="mt-4 text-blue-400 hover:underline">Visit Login</Link>
    </div>
)
}