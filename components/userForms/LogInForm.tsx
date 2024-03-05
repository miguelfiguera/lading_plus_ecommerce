"use client";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { logInAction, logOutAction } from "@/lib/SessionActions/SessionActions";
type FormData = {
  email: string;
  password: string;
};

export default function LogInForm() {
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
      await logInAction({
        email: data.email,
        password: data.password,
      });
      toast.success("Logged in successfully");
    } catch (error: any) {
      toast.error(error);
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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <button className="btn btn-danger" onClick={async () => logOutAction()}>
        Log Out
      </button>
    </div>
  );
}
