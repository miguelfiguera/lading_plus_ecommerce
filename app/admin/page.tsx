import React from 'react'
import {auth} from "@/auth"
import { redirect } from 'next/navigation'
export default async function page() {

  const session = await auth()


  if(!session || session.user.role === "USER") {
    //toast.error("You must be logged in as an admin to access this page!")
    redirect("/login")
  }

  return (
    <div>
{/*       //Cards with number of users, bills (payed and pending), products, monthly revenue.

      //Charts with the number of new users by month
      //chart with the number of bills by month
      //chart with the number of revenue by month
       */}


    </div>
  )
}
