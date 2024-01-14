import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
    const path=request.nextUrl.pathname;
    const ispublicPath=path==='/login'||path==='/signup' || path==='/verifyemail' || path==='/forgotpassword'
    const token=request.cookies.get('token')?.value||"";
    if(ispublicPath && token){
        return NextResponse.redirect(new URL('/', request.url))
    }
    if(!ispublicPath && !token){
        return NextResponse.redirect(new URL('/login',request.url))
    }

}
 

export const config = {
  matcher: ["/","/profile","/login","/signup","/verifyemail","/forgotpassword"],
}