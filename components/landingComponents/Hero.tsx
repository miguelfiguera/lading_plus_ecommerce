import React from 'react'
import Image from 'next/image';
import placeHolderPhoto from '@/public/OIG2.jpeg'


export default function Hero() {


  return (
    <div className="page-header mb-0 pb-4 border-bottom"
     //style={backgroundStyle}
     style={{height:"100vh"}}
     >
      <div className="text-center pb-5 pt-5">
        <Image
          src={placeHolderPhoto}
          className="text-center rounded-circle shadow-lg mb-0 pb-0 "
          alt="Your Logo Here"
          style={{maxHeight: "300px", maxWidth: "300px"}}
        ></Image>
        <h1
          className="fs-3 my-5 fw-bold "
          style={{
           // color: letterColor,
            translate: "0% 50%",
          }}
        >
          Your Name Here
        </h1>
        <p>Another importan text like the slogan</p>
      </div>
    </div>
  );
}
