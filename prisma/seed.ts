//Add faker logic to populate the database
import { prisma } from '../lib/prisma'
import { faker } from "@faker-js/faker";
import { Role,Gender } from "@prisma/client";

async function main() {
/*     prisma.cart.deleteMany({
        where:{NOT:{userId:"7db9f93d-873d-4f35-bd11-a0241fadcead"}}
    })
    prisma.profile.deleteMany({
        where:{NOT:{userId:"7db9f93d-873d-4f35-bd11-a0241fadcead"}}
    })
    prisma.user.deleteMany({
        where:{NOT:{id:"7db9f93d-873d-4f35-bd11-a0241fadcead"}}
    }) */



    //create admin
    await prisma.user.create({
        data:{
            email:'miguelqui725@gmail.com',
            password:'123456',
            userName:'perrosaurio725',
            role:Role.ROOT,
            termsAndConditions:true,
            privacyPolicy:true,
            active:true,
            cart:{
                create:{
                }
            },
            profile:{
                create:{
                    name:'Miguel',
                    lastName:'Figuera',
                    address:'La victoria',
                    gender:Gender.MALE,
                    age:30,
                    idNumber:'23558789',
                    country:'Venezuela',
                    photoUrl:'https://firebasestorage.googleapis.com/v0/b/ecommercestoragetemplate.appspot.com/o/ProfilePics%2Fperrosaurio725.jpeg?alt=media&token=11616614-1ad3-4c82-8d23-b89af982c2ae',
                    phoneNumber:'4241727988',
                }
            }
        }
    }).then((user)=>{
        console.log(user)
    }).catch((error)=>{
        console.log(error)
    })


    //create users

    Array.from({ length: 10 }).map(async (x, i) => {
        await prisma.user.create({
            data: {
                email: faker.internet.email(),
                userName:faker.internet.userName().substring(0, 15),
                password: faker.internet.password().substring(0, 15),
                role: faker.helpers.arrayElement([Role.USER, Role.ADMIN,Role.ROOT]),
                termsAndConditions: true,
                privacyPolicy: true,
                active: true,
                cart:{
                    create:{
                    }
                },
                 profile:{create:{
                    name:faker.person.firstName().substring(0, 15),
                    lastName:faker.person.lastName().substring(0, 15),
                    address:faker.location.streetAddress().substring(0, 50),
                    gender:faker.helpers.arrayElement([Gender.MALE,Gender.FEMALE,Gender.OTHER]),
                    age:faker.number.int({min:18,max:100}),
                    idNumber:faker.number.int({min:10000000,max:99999999}).toString(),
                    country:faker.location.country(),
                    photoUrl:faker.image.avatar(),
                    phoneNumber:faker.phone.number(),

                }} 
            },include:{cart:true,profile:true}
        }).then(user=>console.log(user)).catch(err=>console.log(err))
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
        }).then(product=>console.log(product))
    })


}

main()