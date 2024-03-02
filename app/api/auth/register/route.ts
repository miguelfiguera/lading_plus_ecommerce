import { NextResponse,NextRequest } from "next/server";
import { User } from "@/interfaces/interfaces";
import bcrypt from "bcrypt";
import {prisma} from "@/lib/prisma"
export async function POST(req: NextRequest) {
 const user:User=await req.json()
 const salt= await bcrypt.genSalt(10)
 const hashedPassword=await bcrypt.hash(user.password,salt)


 //create the cart at this point.
 try{
    const newUser=await prisma.user.create({
        data:{
            userName:user.userName,
            email:user.email,
            password:hashedPassword,
            cart:{
                create:{

                }
            }
        },
        include:{
            cart:true
        }
    })
 }
 catch (error){
    if(error instanceof Error){
        console.log(error.message)
        return NextResponse.json({message:error.message},{status:400})
    }
 }

return NextResponse.json({ message: "Your account has been created. Welcome!" },{status:200});
}