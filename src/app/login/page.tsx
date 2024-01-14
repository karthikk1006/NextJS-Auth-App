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
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <Toaster/>
            <h1>Login</h1>
            <hr />
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
                <Link href="/forgotpassword">Forgot Password?</Link>
                <button 
                onClick={onLogin}
        className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login</button>
            <Link href="/signup">Visit Signup if no account</Link>
        </div>
        )
    
}