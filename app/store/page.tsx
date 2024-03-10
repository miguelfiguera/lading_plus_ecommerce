import React from 'react'
import {auth} from "@/auth"
import { Session } from "next-auth"
import { getAllProducts } from '@/lib/prismaQueries'
import { Product } from '@prisma/client'
import ClientContainer from '@/components/storeComponents/ClientContainer'


export default async function page() {
    let loggedIn=false
    let categories:string[]=[]
    const session:Session|null= await auth()
    if(session){
        loggedIn=true
    }

    const products=await getAllProducts()
     if(products instanceof Array && products.length>0){
        categories=products.map((product:Product)=>{return product.category})
        console.log(products)
    } 


  return (
    <div className='container-fluid'>


    <ClientContainer/>



    </div>
  )
}
