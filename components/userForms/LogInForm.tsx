"use client";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Prisma } from "@prisma/client";

type FormData = {
  email: string;
  password: string;
};

export default function LogInForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    if (data.email === "" || data.password === "") {
      toast.error("ERROR: All fields are required");
      return;
    }

    try {
      const user = await signIn("credentials", {
        email: data.email,
        password: data.password,
      });

      console.log(user)
      if (user) {
        toast.success("Successfully logged in.");
        console.log(user);
        router.push("/");
      }
      if (user == null) {
        toast.error("Incorrect User or Password, try again");
        return;
      }
    } catch (error: any) {
      toast.error("Error: " + error.message);
      return;
    }
  });

  return (
    <div className="container my-5">
      <h1 className="fs-3 text-center">Log In</h1>
      <form onSubmit={onSubmit} className="mx-auto" style={{ width: "50%" }}>
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
        {/*     <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div> */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <button className="btn btn-danger" onClick={() => signOut()}>
        Log Out
      </button>
    </div>
  );
}
