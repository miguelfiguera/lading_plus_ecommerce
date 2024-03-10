"use client"
import React from 'react'
import { Product } from '@prisma/client'

export default function ItemCard({product}:{product:Product}) {
  return (
    <div>
        
        <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
        {// eslint-disable-next-line @next/next/no-img-element
      product.photoUrl && <img src={product.photoUrl} className="img-fluid rounded-start" alt="..."/>}
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{product.category}</h6>
        <p className="card-text">{product.description}</p>
        <p className="card-text"><small className="text-body-secondary">Cost: ${product.price}</small> <button className='btn btn-primary' style={{scale:'0.8'}}>Add To Cart</button></p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
