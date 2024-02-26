"use server";
import { prisma } from "./prisma";
import { Prisma } from "@prisma/client";

//Client Queries:

type userQuery = {
    type: "email" | "userName" | "id";
    value: string;
};

export async function getUser(query: userQuery) {
    try {
        let user = null;

        switch (query.type) {
            case "email":
                user = await prisma.user.findUnique({ where: { email: query.value } });
                break;
            case "userName":
                user = await prisma.user.findUnique({
                    where: { userName: query.value },
                });
                break;
            case "id":
                user = await prisma.user.findUnique({ where: { id: query.value } });
                break;
        }

        return user;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            // define the switch case for the error code on their own, because they are really extensive
        }
        if (error instanceof Error) {
            console.log(error);
            return null;
        }
    }
}

export async function getAllusers() {
    let users = await prisma.user.findMany();
    return users;
}

export async function getUserWithProfile(query: userQuery) {
    let user = null;
    switch (query.type) {
        case "email":
            user = await prisma.user.findUnique({
                where: { email: query.value },
                include: { profile: true },
            });
            break;
        case "userName":
            user = await prisma.user.findUnique({
                where: { userName: query.value },
                include: { profile: true },
            });
            break;
        case "id":
            user = await prisma.user.findUnique({
                where: { id: query.value },
                include: { profile: true },
            });
            break;
    }
    return user;
}

export async function getUserWithCart(query: userQuery) {
    let user = null;
    switch (query.type) {
        case "email":
            user = await prisma.user.findUnique({
                where: { email: query.value },
                include: { cart: true },
            });
            break;
        case "userName":
            user = await prisma.user.findUnique({
                where: { userName: query.value },
                include: { cart: true },
            });
            break;
        case "id":
            user = await prisma.user.findUnique({
                where: { id: query.value },
                include: { cart: true },
            });
            break;
    }
    return user;
}

//Bill Queries

type billQuery = {
    email: string;
};

export async function getUserBills(value: billQuery) {

    try{
    let bills = await prisma.bill.findMany({
        where: {
            userEmail: value.email,
        },
        orderBy:{
            id:"desc"
        }
    });
    return bills;
} catch(e){
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // define the switch case for the error code on their own, because they are really extensive
    }
    if(e instanceof Error){
        console.log(e);
    }
}



}

//Cart Queries

//Product Queries

//Profile Queries