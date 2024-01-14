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
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Toaster/>
        <h1>Signup</h1>
        <hr />
        <label htmlFor="username">Username</label>
        <input type="text"
            id="username"
            value={user.username}
            onChange={(e)=>setUser({...user,username:e.target.value})}
            className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            />
            <label htmlFor="email">Email</label>
        <input type="text"
            id="email"
            value={user.email}
            onChange={(e)=>setUser({...user,email:e.target.value})}
            className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            />
            <label htmlFor="password">Password</label>
        <input type="password"
            id="password"
            value={user.password}
            onChange={(e)=>setUser({...user,password:e.target.value})}
            className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            />
            <button 
            onClick={onSignup}
    className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Signup</button>
        <Link href="/login">Visit Login</Link>
    </div>
)
}