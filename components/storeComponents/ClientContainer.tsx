"use client";
import React,{useState,useEffect,useContext,createContext} from "react";
import StoreSideBar from "@/components/storeComponents/StoreSideBar";
import ItemCard from "./ItemCard";
import { validateSession } from "@/lib/SessionActions/SessionActions";
import { getAllProducts } from "@/lib/prismaQueries";
import { Product } from "@prisma/client";
//import toast from "react-hot-toast";

type Categories=string[]

export default function ClientContainer() {
    const [active, setActive] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [categories,setCategories]=useState<Categories>([])
    const [activeCategories,setActiveCategories]=useState<String>('All')

    useEffect(()=>{

        async function setStates(){
            let categories:string[]=[]
            const session =await validateSession()
            if(session){
                setActive(true)
            }

            const products:any=await getAllProducts()

            if(products instanceof Array && products.length>0){
                setProducts(products)
                categories=products.map((product:Product)=>{return product.category})
                setCategories(categories)
            }
        }

        setStates()
    },[])


    const FilteredItems=products.filter((product:Product)=>{return product.category===activeCategories}).map((product:Product)=>{
        return <ItemCard key={product.id} product={product}/>
    })
    const items=products.map((product:Product)=>{
        return <ItemCard key={product.id} product={product}/>
    })

    const handleCategory=(value:string)=>{
        setActiveCategories(value)
    }

  return (
    <div>
      {" "}
      <div className="container-fluid">
        <h1 className="text-center fs-2 my-4 text-decoration-underline">Store</h1>
        <div className="row">
        <div className="col col-lg-3">
        {categories.length>0 &&  <StoreSideBar active={active} categories={categories} handleCategory={handleCategory}/>}
        </div>
        <div className="col">
        {products.length <=0 && <div className="spinner-border mx-auto" role="status">
  <span className="visually-hidden">Loading...</span>
</div>}
{activeCategories == "All" ? items : FilteredItems} </div>

        </div>
      </div>
    </div>
  );
}
