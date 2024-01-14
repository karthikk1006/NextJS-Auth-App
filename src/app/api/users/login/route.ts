import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/UserModel";
import { NextRequest,NextResponse } from "next/server";
const bcryptjs=require("bcryptjs");
import jwt from "jsonwebtoken";
import "dotenv"
connect()

export async function POST(request:NextRequest){
    try {
        const reqBody= await request.json()
        const{email,password}=reqBody

        //check if useer exists
        const user=await User.findOne({email})
        if(!user){
            return NextResponse.json({
                message:"User does not exist"
            })
        }
        
        const validPassword=await bcryptjs.compare(password,user.password)
        
        if(!validPassword){
            return NextResponse.json({
                message:"Incorrect password"
            })
        }
        //create token data
        const tokenData={
            id:user._id,
            username:user.username,
            email:user.email
        }
        const token= await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:"1d"})
        const response=NextResponse.json({
            message:"Login successful",
            success:true
        });
        response.cookies.set("token",token,{httpOnly:true,})

        return response;



        


    } catch (error:any) {
        return NextResponse.json({
            error:error.message
        })
    }
}