"use server";
import { NextResponse } from "next/server";
import { prisma } from "./prisma";
import { User } from "@/interfaces/interfaces";
import bcrypt from "bcrypt";

export async function registerNewUser(user: User) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    const proofOfExistence =await prisma.user.findUnique({
        where: { email: user.email},
    });

    if (proofOfExistence) {
        throw new Error("User already exists");
    }

    try {
        let newUser = await prisma.user.create({
            data: {
                userName: user.userName,
                email: user.email,
                password: hashedPassword,
                cart: {
                    create: {},
                },
            },
            include: {
                cart: true,
            },
        });

        newUser.password = "";

        return NextResponse.json(
            { message: "User created", user: newUser },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error creating user:", error.message);
            throw new Error("User registration failed.");
        }

        return NextResponse.json(
            { message: "User registration failed." },
            { status: 500 }
        );
    }
}
