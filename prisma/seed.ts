//Add faker logic to populate the database
import { prisma } from '@/lib/prisma'
import { faker } from "@faker-js/faker";
import { Role,Gender } from "@prisma/client";

async function main() {

    //create users

    Array.from({ length: 10 }).map(async (x, i) => {
        await prisma.user.create({
            data: {
                email: faker.internet.email(),
                userName: faker.internet.userName(),
                password: faker.internet.password(),
                role: faker.helpers.arrayElement([Role.ADMIN, Role.ROOT, Role.USER]),
                termsAndConditions: true,
                privacyPolicy: true,
                active: true
            },
            include: { cart: true }
        })
    })

    //create products

    Array.from({length:10}).map(async(x,i)=>{
        await prisma.product.create({
            data:{
                name:faker.commerce.productName(),
                price:Number(faker.commerce.price()),
                category:faker.commerce.department(),
                description:faker.commerce.productDescription(),
                photoUrl:faker.image.url(),
                quantity:faker.number.int({min:1,max:100}),
                inExistence:true
            }
        })
    })


    //create profiles

    prisma.user.findMany().then((users)=>{

        users.map(async(x,i)=>{
            if(x.userName !=='perrosaurio725'){
            const gender:"female" | "male" | undefined = faker.person.sex() as "female" | "male" | undefined
            await prisma.profile.create({
                data:{
                    name:faker.person.firstName(gender),
                    lastName:faker.person.lastName(),
                    address:faker.location.streetAddress(),
                    user:{connect:{id:x.id}},
                    gender:faker.helpers.arrayElement([Gender.MALE,Gender.FEMALE,Gender.OTHER]),
                    age:faker.number.int({min:18,max:100}),
                    idNumber:faker.number.int({min:10000000,max:99999999}).toString(),
                    country:faker.location.country(),
                    photoUrl:faker.image.avatar(),
                    phoneNumber:faker.phone.number(),
                }
            })}
        })
        

    })

}