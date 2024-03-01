import React from "react";
import Link from "next/link";
export default function Footer() {
  const paragraphStyles = {
    fontSize: "14px",
    fontWeight: "300",
    color: "black",
    maxWidth: "70%",
  };

  const ulStytiles = { ...paragraphStyles, margin: "0px", padding: "0px" };

  const theLiStyles = {
    listStyle: "square",
  };

  const socialNetworkButtons = {
    background: "none",
    color: "#FFFFFF",
    padding: "0px 0px",
    border: "none",
  };

  const spanStyle = {
    color: "#FFFFFF",
    fontSize: "20px",
    fontWeight: "800",
  };

  const otherColor={
    color:"black"
  }

  return (
    <div
      className="container-fluid border-top"
      style={{
      //  backgroundColor: "rgba(11,86,118,1)",
        color: "white",
        paddingBottom: "30px",
        paddingTop: "30px",
      }}
    >
      <div className="container ">
        <div className="container d-md-flex flex-row  align-items-start justify-content-center">
          <div className="row">
            <div className="col " style={{ marginTop: "20px" }}>
              <h5 className="text-black mb-5">Lorem Ipsum Dolor</h5>
              <p style={paragraphStyles} className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ultricies mollis ipsum, vitae rutrum augue dictum et.
                Fusce ut metus quis purus sodales tincidunt.
              </p>
            </div>
            <div className="col" style={{ marginTop: "20px" }}>
              <h5 className="text-black mb-5">Del Pirata</h5>
              <p style={paragraphStyles} className="">
                con diez canhones por banda, viento en popa a toda vela, no
                corta el mar sino vuela, un velero bergantin.
                <br />
                <br />
                <Link
                  href="mailto:joseDeEspronceda@ejemplo.com.ve"
                  rel="noreferrer"
                  target="_blank"
                >
                  joseDeEspronceda@ejemplo.com.ve
                </Link>
                <br />
                <br />
                <span style={spanStyle}>+58 424.111.1111 </span>
                <br />
              </p>
            </div>
            <div className="col" style={{ marginTop: "20px" }}>
              <h5 className="text-black mb-5">Los heroes de marvel:</h5>
              <ul style={ulStytiles}>
                <li style={theLiStyles}>Deadpool</li>
                <li style={theLiStyles}>Spiderman</li>
                <li style={theLiStyles}>Charles Xavier</li>
                <li style={theLiStyles}>Wolverine</li>
                <li style={theLiStyles}>Dr Strange</li>
                <li style={theLiStyles}>Ironman</li>
              </ul>
            </div>
            <div className="col" style={{ marginTop: "20px" }}>
              <h5 className="mx-2 mb-4">Nuestras redes:</h5>
              <button
                className="mx-2 my-2 my-footer-buttons "
                style={socialNetworkButtons}
              >
                <Link href="https://twitter.com/" target="_blank" rel="noreferrer">
                  {" "}
                  <i
                    className="fa-brands fa-x-twitter fa-xl mx-2"
                    style={otherColor}
                  ></i>
                </Link>
              </button>
              <button
                className="mx-2 my-2 my-footer-buttons"
                style={socialNetworkButtons}
              >
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa-brands fa-instagram mx-2 fa-xl"
                    style={otherColor}
                  ></i>
                </Link>
              </button>
              <button
                className="mx-2 my-2 my-footer-buttons"
                style={socialNetworkButtons}
              >
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa-brands fa-linkedin-in mx-2 fa-xl"
                    style={otherColor }
                  ></i>
                </Link>
              </button>
              <button
                className="mx-2 my-2 my-footer-buttons"
                style={socialNetworkButtons}
              >
                <Link
                  href="https://www.github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa-brands fa-github mx-2 fa-xl"
                    style={otherColor}
                  ></i>
                </Link>
                </button>
                <button
                className="mx-2 my-2 my-footer-buttons"
                style={socialNetworkButtons}
              >
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa-brands fa-facebook mx-2 fa-xl"
                    style={otherColor}
                  ></i>
                </Link>
                </button>
                <button
                className="mx-2 my-2 my-footer-buttons"
                style={socialNetworkButtons}
              >
                <Link
                  href="https://www.reddit.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa-brands fa-reddit-alien mx-2 fa-xl"
                    style={otherColor}
                  ></i>
                </Link>
              </button>
              <button
                className="mx-2 my-2 my-footer-buttons"
                style={socialNetworkButtons}
              >
                <Link
                  href="https://www.lucasfilm.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa-brands fa-jedi-order mx-2 fa-xl"
                    style={otherColor}
                  ></i>
                </Link>
              </button>
              <button
                className="mx-2 my-2 my-footer-buttons"
                style={socialNetworkButtons}
              >
                <Link
                  href="https://www.startrek.com/en-un/series/star-trek-prodigy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa-regular fa-hand-spock mx-2 fa-xl"
                    style={otherColor}
                  ></i>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-md-flex justify-content-between mt-3">
        {" "}
        <p className="fs-6 my-4" style={paragraphStyles}>
          Copyright ©2024 All rights reserved | Tambien reservados los
          izquierdos | J-31415926535{" "}
        </p>
      </div>
    </div>
  );
}
