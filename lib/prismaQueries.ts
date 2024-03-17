"use server";
import { prisma } from "./prisma";
import { Prisma,Profile } from "@prisma/client";
import bcrypt from "bcryptjs";
//Client Queries:

type userQuery = {
  type: "email" | "userName" | "id";
  value: string;
};

type userValidation = {
  email: string;
  password: string;
};

type User = {
  userName: string;
  email: string;
  termsAndConditions: Boolean;
  privacyPolicy: Boolean;
  password: string;
  createdAt: Date;
  updatedAt: Date;
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
      console.log(error.code);
      return null;
      // define the switch case for the error code on their own, because they are really extensive
    }
    if (error instanceof Error) {
      console.log(error);
      return null;
    }
  }
}

export async function getAllusers() {
  try{let users = await prisma.user.findMany();

    if(!users){return null}
  
    return users;
}
  catch(e){
    if (e instanceof Prisma.PrismaClientKnownRequestError){
      return e.code
    }
    if(e instanceof Error){
    return e.message}
    }

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

export async function validateUser(
  value: userValidation,
): Promise<{ user: User; value: boolean }> {
  const user = await prisma.user.findUnique({ where: { email: value.email } });
  if (!user) {
    throw new Error("Incorrect User or Password, try again");
  }

  const validation = await bcrypt.compare(value.password, user.password);

  if (!validation) {
    throw new Error("Incorrect User or Password, try again");
  }

  user.password = "";
  return { user: user, value: true };
}

//Bill Queries

type billQuery = {
  email: string;
};

export async function getUserBills(value: billQuery) {
  try {
    let bills = await prisma.bill.findMany({
      where: {
        userEmail: value.email,
      },
      orderBy: {
        id: "desc",
      },
    });
    return bills;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // define the switch case for the error code on their own, because they are really extensive
    }
    if (e instanceof Error) {
      console.log(e);
    }
  }
}

//Cart Queries
export async function getUserCart(userIdValue:string){

      const userCart = await prisma.cart.findUnique({
          where: {
              userId: userIdValue
          },
          include: {
              cartProducts: true
          }
      })
      
      if(userCart){return userCart}
  

  return null
}

//CartProduct queries
export async function getCartProducts(cartIdValue:number){
const cartProducts = await prisma.cartProduct.findMany({
  where:{
    cartId: cartIdValue
  },
  include:{
    product: true
  }

})
}
  





//Product Queries

export async function getAllProducts(){
  try{const products = await prisma.product.findMany();
    if(!products){return null}

  return products}
  catch(e){
    if (e instanceof Prisma.PrismaClientKnownRequestError){
      return e.code
    }
    if(e instanceof Error){
    return e.message}
    }
}

//Profile Queries

export async function getCurrentUserProfile(userId:string):Promise<Profile | null >{
  try{
    const profile= await prisma.profile.findUnique({where:{userId:userId}})
    if(!profile){return null}
    return profile
  }catch(e:any){
    if (e instanceof Prisma.PrismaClientKnownRequestError){
      throw new Error(e.code)
    }
    if(e instanceof Error){
      throw new Error(e.message)
  }
    }
    return null
}