import {connect} from "@/dbConfig/dbConfig";
import { sendEmail } from "@/helpers/mailer";
import User from "@/models/UserModel";
import { log } from "console";
import { NextRequest,NextResponse } from "next/server";
const bcryptjs=require("bcryptjs")


connect()

export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json();
        const {username,email,password}=reqBody
        //check if user exists
        const user=await User.findOne({email})
        if(user){
            return NextResponse.json({
                error:"User already exists",
                status:400
            })
        }
        const salt=await bcryptjs.genSalt(10)
        const hashedPassword=await bcryptjs.hash(password,salt)
        const newUser=new User({
            username,
            email,
            password:hashedPassword
        })
        const savedUser=await newUser.save()
  
        
        await sendEmail({email,emailType:"VERIFY",userId:savedUser._id})
        return NextResponse.json({
            message:"User added sucessfully",
            savedUser
        })
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
            status:500
        })
    }
}
