'use client'
import {signOut} from "@/auth"
import React from 'react'

export default function LogOutButton() {
  return (
    <div><button onClick={()=>signOut()} className="btn btn-danger">Log Out</button></div>
  )
}
