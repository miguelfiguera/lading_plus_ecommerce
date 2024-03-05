"use server";
import { prisma } from "./prisma";
import { User } from "@/interfaces/interfaces";
import bcrypt from "bcryptjs";
import { Prisma } from "@prisma/client";

export async function registerNewUser(user: User) {
  /* //The next three lines are only for manual testing
    await prisma.cart.deleteMany()
    console.log('deleted')
    await prisma.user.deleteMany() */

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  const proofOfExistence = await prisma.user.findUnique({
    where: { email: user.email },
  });

  if (proofOfExistence) {
    console.log(proofOfExistence);
    throw new Error("User email already in use.");
  }

  if (!user.termsAndConditions || !user.privacyPolicy) {
    throw new Error("You must accept privacy policy and terms & conditions.");
  }

  try {
    let newUser = await prisma.user.create({
      data: {
        userName: user.userName,
        email: user.email,
        password: hashedPassword,
        termsAndConditions: user.termsAndConditions,
        privacyPolicy: user.privacyPolicy,
        cart: {
          create: {},
        },
      },
      include: {
        cart: true,
      },
    });

    newUser.password = "";
    console.log(newUser);
    return newUser;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error("Error creating user:", error);
      throw new Error("Error: " + error.code);
    }
    throw new Error("User registration failed.");
  }
}

export async function updateUser() {}
