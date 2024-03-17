"use server";
import { prisma } from "./prisma";
import { Prisma,Gender,User,Profile} from "@prisma/client";

type userId={
    id:string
}
type initialProfile={
    name:string,
    lastName:string,
    phoneNumber:string,
    age?:number,
    gender?: Gender,
    address:string,
    coordinates?:string
    user:User,
    userId:string
}
export async function createProfile(value:userId,profile:initialProfile):Promise<Profile>{

}