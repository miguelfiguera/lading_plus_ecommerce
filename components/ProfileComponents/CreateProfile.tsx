"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { User, Gender } from "@prisma/client";
import { Session } from "next-auth";
import toast from "react-hot-toast";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "@/lib/firebase/firebase";

type initialProfile = {
  name: string;
  lastName: string;
  phoneNumber: string;
  age?: number;
  gender?: Gender;
  address: string;
  coordinates?: string;
  user: User;
  userId: string;
  idNumber: number | string;
  photoUrl?: string;
  country: string;
};

export default function CreateProfile({currentUser}: {currentUser: Session | null}) {
  const [file, setFile] = useState<File | null>(null);
  const [session, setSession] = useState<Session | null>(currentUser);
  const imageTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
  const firebaseApp = app;
  const storage = getStorage();
  const myRef = ref(storage, `ProfilePics/${session?.user.name}.${file?.name.split('.')[1]}`);



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<initialProfile>();

  const onFilechange = (e: React.ChangeEvent<HTMLInputElement>): void => {

    if (e.target.files) {
      if (imageTypes.indexOf(e.target.files[0].type) === -1) {
        toast.error("Supported formats: .png, .jpeg, .jpg, .webp");
        toast.error("Only images are allowed.");
        setFile(null);
        return;
      }
      setFile(e.target.files[0]);
    }
  };

  const onSubmit = handleSubmit(async (data) => {

    // Return if one the fields is empty
    if (
      data.name == "" ||
      data.lastName == "" ||
      data.phoneNumber == "" ||
      data.address == "" ||
      data.country == "" ||
      data.idNumber == ""
    ) {
      toast.error((x) => (
        <div className="card-body">
          <p>
            <strong>This data is required</strong>
          </p>
          <ul>
            <li>Name</li>
            <li>Last name</li>
            <li>Id Number</li>
            <li>address</li>
            <li>Phone number</li>
            <li>Country</li>
          </ul>
          <p>
            <strong>Please, fill all the fields</strong>
          </p>

          <button
            className="btn btn-primary"
            onClick={() => toast.dismiss(x.id)}
          >
            I do Understand
          </button>
        </div>
      ));
      return;
    }
  });


  return (
    <div className="container border rounded-3 shadow-lg mx-auto my-3">
      <h1 className="fs-3 text-center">Create Profile</h1>
      <form className="mx-auto my-3" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Ingrese su nombre"
            {...register("name")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Ingrese su apellido"
            {...register("lastName")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            placeholder="Ingrese su número de teléfono"
            {...register("phoneNumber")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Ingrese su edad"
            {...register("age")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select className="form-select" id="gender" {...register("gender")}>
            <option value="male">Masculino</option>
            <option value="female">Ftypeofemenino</option>
            <option value="other">Otro</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            className="form-control"
            id="address"
            rows={3}
            placeholder="Ingrese su dirección"
            {...register("address")}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="idNumber" className="form-label">
            id Number
          </label>
          <input
            type="text"
            className="form-control"
            id="idNumber"
            placeholder="Ingrese el id Number"
            {...register("idNumber")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="photoUrl" className="form-label">
            Upload Photo
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            onChange={(e) => onFilechange(e)}
          />
          <div id="emailHelp" className="form-text">
            Supported Formats are: jpg, jpeg, png, webp.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            País
          </label>
          <input
            type="text"
            className="form-control"
            id="country"
            placeholder="Ingrese su país"
            {...register("country")}
          />
        </div>
        {/*             <div className="mb-3">
                <label htmlFor="coordinates" className="form-label">Coordenadas</label>
                <input type="text" className="form-control" id="coordinates" placeholder="Ingrese las coordenadas"/>
            </div> */}
        {/*             <!-- Otros campos (user, userId, idNumber, photoUrl) -->
         */}{" "}
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}
