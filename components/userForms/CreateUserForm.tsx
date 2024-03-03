"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { registerNewUser } from "@/lib/prismaUserCRUD";
import toast from "react-hot-toast";
import {User} from '@/interfaces/interfaces'

type FormData = {
  email: string;
  userName: string;
  password: string;
  passwordConfirm: string;
  acceptedTerms: boolean;
  acceptedPrivacyPolicy: boolean;
};

export default function CreateUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async(data) => {
    if(data.email==="" || data.userName==="" || data.password==="" || data.passwordConfirm===""){
        toast.error("ERROR: All fields are required");
        return
    }

    if (data.password !== data.passwordConfirm) {
      toast.error("ERROR: Passwords do not match");
      return;
    }
    if (data.acceptedTerms !== true || data.acceptedPrivacyPolicy !== true) {
      toast.error("You must accept privacy policy and terms & conditions.");
      return;
    }

    const templateUser:User={
      email:data.email,
      password:data.password,
      userName:data.userName,
      termsAndConditions: data.acceptedTerms,
      privacyPolicy: data.acceptedPrivacyPolicy
    }

    try{
      const newUser= await registerNewUser(templateUser)
      toast.success(`User created: ${newUser.userName}`);
    }
    catch(e:any){
        toast.error(e.message);
        return
    }


  });

  return (
    <div className="container my-5 border rounded-3 p-5 shadow-lg" style={{ maxWidth: "50%" }}>
      <h1 className="fs-3 text-center">Create User</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            {...register("email")}
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We&apos;ll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            Username
          </label>
          <input
            type="text"
            {...register("userName")}
            className="form-control"
            id="userName"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            className="form-control"
            id="password"
          />
        </div>
          <div className="mb-3">
            <label htmlFor="passwordConfirm" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              {...register("passwordConfirm")}
              className="form-control"
              id="passwordConfirm"
            />
          </div>
        

          <div>
            {" "}
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="acceptedTerms"
                {...register("acceptedTerms")}
              />
              <label className="form-check-label" htmlFor="acceptedTerms">
                I Accept the{" "}
                <Link href="/termsAndConditions">Terms and Conditions</Link>
              </label>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="acceptedPrivacyPolicy"
                {...register("acceptedPrivacyPolicy")}
              />
              <label
                className="form-check-label"
                htmlFor="acceptedPrivacyPolicy"
              >
                I Accept the <Link href="/privacyPolicy">Privacy Policy</Link>
              </label>
            </div>{" "}
          </div>
        

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
