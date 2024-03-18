"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "./prisma";
import { Gender,User,Profile} from "@prisma/client";


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
    photoUrl?:string,
    idNumber?:string
    country?:string
}
export async function createProfile(value:string,profile:initialProfile):Promise<Profile|null>{

    const user=await prisma.user.findUnique({where:{id:value},include:{profile:true}})

    //if already exist
    if(user && user.profile){
        const updatedProfile= await prisma.profile.update({
            where:{
                id:user.profile.id},
                data:{
                    name:profile.name,
                    lastName:profile.lastName,
                    phoneNumber:profile.phoneNumber,
                    age:Number(profile.age),
                    gender:profile.gender,
                    address:profile.address,
                    coordinates:profile.coordinates,
                    user:{connect:{id:value}},
                    photoUrl:profile.photoUrl,
                    idNumber:profile.idNumber,
                    country:profile.country
                }
        })

        revalidatePath(`/profile`)
        return updatedProfile
    }

    //if it doest not exist
    if(user && !user.profile){

        const newProfile=await prisma.profile.create({
            data:{
                name:profile.name,
                lastName:profile.lastName,
                phoneNumber:profile.phoneNumber,
                age:Number(profile.age),
                gender:profile.gender,
                address:profile.address,
                coordinates:profile.coordinates,
                user:{connect:{id:value}},
                photoUrl:profile.photoUrl,
                idNumber:profile.idNumber,
                country:profile.country || 'VENEZUELA'
            }
        })
        revalidatePath(`/profile`)
        return newProfile
    }

    
    return null


}