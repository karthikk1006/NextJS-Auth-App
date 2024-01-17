"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import {toast} from "react-hot-toast"
import { Toaster } from "react-hot-toast"

export default function LoginPage(){
    const router=useRouter()
    const [user,setUser]=useState({
        email:"",
        password:""
    })
    const onLogin=async()=>{
        try {   
            const response=await axios.post("/api/users/login",user);
              console.log(response.data);
            if(response.data.message !="Login successful"){
                throw new Error("error")
            }
          
            
            toast.success("Login successful");
            router.push("/profile")

        } catch (error) {
            toast.error("Login failed!")
        }

    }
        return(
            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white">
                <Toaster/>
            <h1 className="text-3xl font-bold mb-6">Login</h1>
            <hr className="w-full mb-6 border-t border-gray-600" />
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-400">Email</label>
            <input type="text"
                id="email"
                value={user.email}
                onChange={(e)=>setUser({...user,email:e.target.value})}
                className="w-full p-2 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:border-blue-400 text-black w-full max-w-md"
                />
                <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-400">Password</label>
            <input type="password"
                id="password"
                value={user.password}
                onChange={(e)=>setUser({...user,password:e.target.value})}
                className="w-full p-2 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:border-blue-400 text-black w-full max-w-md"
                />
                <Link href="/forgotpassword" className="text-blue-400 hover:underline mb-4 block">Forgot Password?</Link>
                <button 
                onClick={onLogin}
                className="w-full bg-pink-500 text-white p-2 rounded-lg focus:outline-none focus:bg-pink-600 w-full max-w-md">Login</button>
            <Link href="/signup" className="mt-4 text-blue-400 hover:underline">Visit Signup if no account</Link>
        </div>
        )
    
}