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
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Toaster/>
        <h1>Profile</h1>
        <hr/>
        <h2 className="bg-blue-500">{data==="nothing"?"nothing":<Link href={"/profile/"+data}>
        {data}</Link>}</h2>
        <hr />
        <button style={{backgroundColor:'green'}} onClick={logout}>Logout</button>
        <hr/>
        <Link href="/login">Back to Login</Link>
        <hr />
        <hr />
        <hr />
        <button style={{backgroundColor:'violet'}} onClick={getUserDetails}>ME</button>
        </div>

    )
}