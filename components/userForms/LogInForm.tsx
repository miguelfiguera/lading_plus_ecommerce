'use client'
import React from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { Prisma } from '@prisma/client';
import { useRouter } from 'next/router';

type FormData={
    email: string
    password: string
}

export default function LogInForm() {
  const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>();

      const onSubmit=handleSubmit(async(data)=>{
        if(data.email==="" || data.password===""){
            toast.error("ERROR: All fields are required");
            return
        }

        const user= await signIn('credentials',{email:data.email,password:data.password})

        try{ if(user){
            toast.success('Successfully logged in.')
            console.log(user)
            router.push('/')
        }}
        catch (error) {
          if (error instanceof Prisma.PrismaClientKnownRequestError) {
              console.error("Error creating user:", error);
              throw new Error("Error: " + error.code);
          }
          throw new Error("User registration failed.");
      }

      })

  return (
    <div><form onSubmit={onSubmit}>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" {...register("email", { required: true })} className="form-control" id="email" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We&apos;ll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" {...register('password',{required:true})} className="form-control" id="password"/>
    </div>
{/*     <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div> */}
    <button type="submit" className="btn btn-primary">Submit</button>
  </form></div>
  )
}
