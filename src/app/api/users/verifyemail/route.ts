import { NextRequest, NextResponse } from "next/server";
import User from "@/models/UserModel";
import { connect } from "@/dbConfig/dbConfig";


connect();
export async function POST(request:NextRequest){
    try {
        const reqBody= await request.json();
        const {token}=reqBody;
        console.log(token);
        
        const user=await User.findOne({verifyToken:token, verifyTokenExpiry:{$gt:Date.now()}})
        if(!user){
            return NextResponse.json({
                message:"User not found"
            })
        }

        user.isVerified=true;
        user.verifyToken=undefined;
        user.verifyTokenExpiry=undefined;
        await user.save();
        console.log(user);
        
        return NextResponse.json({
            message:"Email verified"
        })
        
    } catch (error:any) {
        return NextResponse.json({
            error:error.message
        })
    }
}