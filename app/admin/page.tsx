import React from 'react'
import {auth} from "@/auth"
import { redirect } from 'next/navigation'
import toast from 'react-hot-toast'
export default async function page() {

  const session = await auth()


  if(!session || session.user.role === "USER") {
    //toast.error("You must be logged in as an admin to access this page!")
    redirect("/login")
  }

  return (
    <div>page</div>
  )
}
