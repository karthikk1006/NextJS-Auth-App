import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest,NextResponse } from "next/server";
import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/UserModel";
import { log } from "console";

connect()
export async function GET(request:NextRequest){
    try {
        const userID=getDataFromToken(request);
        const user=await User.findOne({_id:userID}).select("-password");
        
        return NextResponse.json(user)

        
    } catch (error:any) {
        return NextResponse.json({
            error:error.message
        })
    }
}