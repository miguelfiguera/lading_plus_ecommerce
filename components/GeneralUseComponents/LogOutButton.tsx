'use client'
import {signOut} from "@/auth"
import React from 'react'
import { logOutAction } from "@/lib/SessionActions/SessionActions"
import { logAction } from "@/lib/ServerLogAction"

export default function LogOutButton() {


  return (
    <div><button onClick={async ()=>logOutAction()} className="btn btn-danger">Log Out</button></div>
  )
}
