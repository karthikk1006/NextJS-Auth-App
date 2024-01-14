import nodemailer from "nodemailer";
import User from "@/models/UserModel";
import bcryptjs from "bcryptjs";

export const sendEmail= async ({email, emailType, userId}:any)=>{
    try {
        const hashedtoken= await bcryptjs.hash(userId.toString(),10);
        
        if(emailType==="VERIFY"){
            await User.findOneAndUpdate(userId,{verifyToken:hashedtoken, verifyTokenExpiry:Date.now()+3600000})
           
            
        }
        else if (emailType==="RESET"){
            await User.findOneAndUpdate(userId,{forgotPasswordToken:hashedtoken, forgotPasswordTokenExpiry:Date.now()+3600000})
        }
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "dcf807160f1e32",
              pass: "13494c82dfc095"
            }
          });
          const mailOptions={
            from:"karthikk1006@gmail.com",
            to:email,
            subject:emailType==="VERIFY"?"VERIFY YOUR EMAIL":"RESET YOUR PASSWORD",
            html:`<p> Click <a href="${process.env.DOMAIN}/${emailType==="VERIFY"?"verifyemail":"verifyforgotpassword"}?token=${hashedtoken}">here</a> to ${emailType==="VERIFY"?"Verify your mail":"Reset your password"}
             or copy paste the link below <br/> ${process.env.DOMAIN}/verifyemail?token=${hashedtoken}</p>`

          }
          const mailResponse=await transport.sendMail(mailOptions)
          return mailResponse
    } catch (error:any) {
        throw new Error(error.message)
    }
}
