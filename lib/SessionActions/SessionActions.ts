"use server";
import { signIn, signOut,auth } from "@/auth";
import { AuthError } from "next-auth";
type credentials = {
  email: string;
  password: string;
};

export async function logInAction(value: credentials): Promise<any> {
  try {
    await signIn("credentials", {
      email: value.email,
      password: value.password,
      redirectTo: "/",
    });
  } catch (e) {
    if (e instanceof AuthError) {
      switch (e.type) {
        case "CredentialsSignin":
          return { e: "Invalid Credentials" };
        default:
          return { e: "Something went wrong!" };
      }
    }

    throw e;
  }
}

export async function logOutAction():Promise<void> {
  await signOut();
}

export async function validateSession():Promise<boolean | null> {
  const session =await auth()
  if(!session){return null}

  return true
}
