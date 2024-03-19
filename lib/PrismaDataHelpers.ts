import { User,Bill,Product } from "@prisma/client"

export function userStatus(array:User[]):number[]{
let active=0
let disabled=0

array.forEach((user:User)=>{
    if(user.active){
        active+=1
    }else{
        disabled+=1
    }
})

return [active,disabled]
}


export function billStatus(array:Bill[]):number[]{
    let confirmed=0
    let pending=0
    let reported=0
    
    array.forEach((bill:Bill)=>{
        if(bill.confirmed){
            confirmed+=1
        }else{
            pending+=1
        }
    })

    array.forEach((bill:Bill)=>{
        if(bill.reported){
            reported+=1
        }
    })
    
    return [confirmed,pending,reported]
    }

    export function productStatus(array:Product[]):number[]{
        let belowTen=0
        let aboveTen=0

        array.forEach((product:Product)=>{
            if(product.quantity<10){
                belowTen+=1
            }else{
                aboveTen+=1
        }})
        return [belowTen,aboveTen]
        
    }