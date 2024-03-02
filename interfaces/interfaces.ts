// model interfaces
export interface User{
    id?: string
    userName:string
    email:string
    password:string
    createdAt?: Date
    updatedAt?: Date
    lastSession?: Date
    role?: Role 
    cart?:Cart
    profile?: Profile
}


export interface Product{
    id:number
    name:string
    description:string
    price: number
    quantity:number
    inExistence:boolean
    createdAt: Date
    updatedAt: Date
    cart?:Cart[]
    bills?:Bill[]

}

export interface Cart{
    id:Number
    products:Product[]
    user: User
    userId:String
}

export interface Bill{
    id:Number
    userEmail:String
    prodcuts:Product[]
    amount:Number
    coordinates: String
    clientAddress: String
    paymentMethod: PaymentMethod
    paymentData:JSON
    confirmed: Boolean
    createdAt: Date
    updatedAt: Date
}

export interface Profile{
    id:Number
    user:User
    userId:string
    gender?: Gender
    age?: Number
    name:string
    lastName:string
    address:string
    coordinates:string
}

enum PaymentMethod{
    PAYPAL,
    PAGOMOVIL,
    cashUSD
  }

  enum Role{
    ROOT,
    ADMIN,
    USER
}

enum Gender {
    MALE,
    FEMALE,
    OTHER
  }


  // userForm Interfaces

  export interface userForm{
    type:'edit' | 'create'
    user?:'string'
  }