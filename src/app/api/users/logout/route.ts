import { NextRequest,NextResponse } from "next/server";

export async function GET(request:NextRequest){
    try {
       const response= NextResponse.json({
        message:"Logout sucessful"
       }) 
       response.cookies.set("token","",{httpOnly:true})
       return response;
    } catch (error:any) {
        return NextResponse.json({
            error:error.message
        })
    }
}