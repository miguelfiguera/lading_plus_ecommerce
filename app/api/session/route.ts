import { NextResponse,NextRequest } from "next/server";
import {auth} from "@/auth"
export async function GET(){

    const session = await auth();

    if(session==null){
        return NextResponse.json({session:null});
    }


    return NextResponse.json({session});
}