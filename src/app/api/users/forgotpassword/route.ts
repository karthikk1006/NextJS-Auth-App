import { NextRequest,NextResponse } from "next/server";
import User from "@/models/UserModel";
import { connect } from "@/dbConfig/dbConfig";
import { sendEmail } from "@/helpers/mailer";

connect()
export async function POST(request:NextRequest){
        try {
            const reqBody=await request.json();
            const {email}=reqBody;
            const userData=await User.findOne({email}) 
            if(!userData){
                return NextResponse.json({
                    message:"Not a valid user!"
                })
            }
     
            
            await sendEmail({email,emailType:"RESET",userId:userData._id})
            return NextResponse.json({
                message:"User exists onto verification"
            })


    } catch (error:any) {
        return NextResponse.json({
            error:error.message
        })
    }
}