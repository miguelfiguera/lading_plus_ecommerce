"use client";

import React from "react";
import { userForm } from "@/interfaces/interfaces";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { registerNewUser, updateUser } from "@/lib/prismaUserCRUD";
import toast from "react-hot-toast";

type FormData = {
  email: string;
  userName: string;
  password: string;
  passwordConfirm: string;
  acceptedTerms?: boolean;
  acceptedPrivacyPolicy?: boolean;
};

export default function UserForm({ value }: { value: userForm }) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    if (data.password !== data.passwordConfirm) {
      toast.error("ERROR: Passwords do not match");
      return;
    }
    if (data.acceptedTerms === false || data.acceptedPrivacyPolicy === false) {
      toast.error("You must accept privacy policy and terms & conditions.");
      return;
    }
  });

  return (
    <div className="container my-5 border rounded-3 p-5 shadow-lg" style={{ maxWidth: "50%" }}>
      <h1 className="fs-3 text-center">{value.type==='editUser' ? "Edit" : "Create"} User</h1>
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
        {value.type == "createUser" && (
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
        )}

        {value.type == "createUser" && (
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
        )}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
