import React from 'react'
import Image from 'next/image';
import placeHolderPhoto from '@/public/OIG2.jpeg'
//import {useState} from 'react'


export default function Hero() {

  const letterColor = "black";

  let backgroundStyle = {
    background:
      "linear-gradient(90deg, rgba(11,86,118,1) 24%, rgba(68,136,164,1) 74%)",
  };

  //tipografia banhaus para debajo del logo "Tu escuela online y a domicilio."

  return (
    <div className="page-header mb-0 pb-4 border-bottom"
     //style={backgroundStyle}
     >
      <div className="text-center pb-5 pt-5">
        <Image
          src={placeHolderPhoto}
          className="text-center rounded-circle shadow-lg mb-0 pb-0 "
          alt="Your Logo Here"
          style={{maxHeight: "300px", maxWidth: "300px"}}
        ></Image>
        <h1
          className="fs-3 mt-5 fw-bold "
          style={{
            color: letterColor,
            translate: "0% 50%",
          }}
        >
          Your Name Here
        </h1>
      </div>
    </div>
  );
}
