import { NextRequest,NextResponse } from "next/server";

import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/UserModel";
import bcrypt from 'bcryptjs'
connect()
export async function POST(request:NextRequest){
    try {
        const reqBody= await request.json()
        const {token,newPassword}=reqBody;
        const user=await User.findOne({forgotPasswordToken:token})

        if(!user){
            return NextResponse.json({
                message:"Some error in database"
            })  
        }
        const hashedPassword= await bcrypt.hash(newPassword,10);
        user.password=hashedPassword;
        
        

        await user.save()
        return NextResponse.json({
            message:"Password changed successfully"
        })


        //get token check it, hash new passowrd and then update
    } catch (error:any) {
        return NextResponse.json({
            error:error.message
        })
    }
}
