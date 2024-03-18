import React from 'react'
import {auth} from "@/auth"
import { redirect } from 'next/navigation'
export default async function page() {

  const session = await auth()


  if(!session || session.user.role === "USER") {
    redirect("/login")
  }

  return (
    <div>page</div>
  )
}
