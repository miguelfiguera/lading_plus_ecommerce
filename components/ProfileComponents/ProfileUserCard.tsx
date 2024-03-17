/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Profile } from "@prisma/client";

export default function ProfileUserCard({ data }: { data: Profile }) {
  return (
    <div className="container my-4">
      <h1 className="fs-1 text-center text-decoration-underline">Profile</h1>
      <div className="card">
        <div className="card-header"><strong> Profile:</strong> {data.userId} </div>
        <div className="row">
          <div className="col-md-4">
        <img
              src={data.photoUrl ? data.photoUrl : ""}
              alt={`Profile photo of ${data.name}`}
             style={{ maxHeight: "100%", maxWidth: "100%" }}
             className="rounded-3 mx-2 my-2"/>
          </div>
          <div className="col-md-8">
            <div className="card-title fs-3">
              {data.name} {data.lastName}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Age:</strong> {data.age}</li>
              <li className="list-group-item"><strong>Phone Number:</strong> {data.phoneNumber}</li>
              <li className="list-group-item"><strong>Gender:</strong> {data.gender}</li>
              <li className="list-group-item"><strong>Address:</strong> <br /> {data.address}</li>
              <li className="list-group-item"><strong>Country:</strong> {data.country}</li>
              <li className="list-group-item"><strong>Id Number:</strong> {data.idNumber}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
