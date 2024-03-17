"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { User, Gender, Profile,Role } from "@prisma/client";
import toast from "react-hot-toast";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "@/lib/firebase/firebase";
import { createProfile } from "@/lib/prismaProfileCRUD";

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
  photoUrl?: string;
  idNumber?: string;
  country?: string;
};
type token={
  name:string,
  email:string,
  role:Role,
  id:string,

}

export default function CreateProfile({
  currentUser,
  profile,
}: {
  currentUser: token | null;
  profile: Profile | null;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [active, setActive] = useState<Boolean>(false);
  const imageTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
  const firebaseApp = app;
  const storage = getStorage();
  //const requiredFields=['name','lastName','phoneNumber','address','country','idNumber']
  const myRef = ref(
    storage,
    `ProfilePics/${currentUser?.name}.${file?.name.split(".")[1]}`
  );

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
      toast.error(
        (x) => (
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
              className="btn btn-danger"
              onClick={() => toast.dismiss(x.id)}
            >
              I do Understand
            </button>
          </div>
        ),
        { duration: 8000 }
      );
      return;
    }

    if (data.gender) {
      data.gender = data.gender.toUpperCase() as Gender;
    }
    if (data.country) {
      data.country = data.country.toUpperCase();
    }

    if(file){
    //upload image

    try {
      const imageUploading = await uploadBytes(myRef, file as File);
      toast.success("Profile Picture uploaded successfully!");
    } catch (e: any) {
      toast.error(`Error uploading image: ${e.message}`);
    }

    //get image url
    try {
      const theUrl = await getDownloadURL(myRef);
      if (theUrl) {
        data.photoUrl = theUrl;
      }
    } catch (e) {
      toast.error(`Error getting image url: ${e}`);
      return;
    }
  } else{
    data.photoUrl = profile?.photoUrl || ''
  }
    //create profile
    try {
      if (currentUser) {
        const theProfile = await createProfile(currentUser?.id, data);

        toast.success(`Profile ${profile ? "updated" : "created"} successfully!`);
        return theProfile;
      } else {
        toast.error("You must be logged in to create a profile");
        return null;
      }
    } catch (e: any) {
      toast.error(`Error creating profile: ${e.code}`);
    }
  });

  if (!active) {
    return (
      <div className="container">
        <button
          className="btn btn-primary mx-auto mb-5"
          onClick={() => setActive(true)}
        >
          {profile ? "Edit" : "Create"} Profile
        </button>
      </div>
    );
  }

  return (
    <div className="container border rounded-3 shadow-lg mx-auto my-3">
      <h1 className="fs-3 text-center">
        {profile ? "Edit" : "Create"} Profile
      </h1>
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
            value={profile?.name || ""}
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
            value={profile?.lastName || ""}
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
            value={profile?.phoneNumber || ""}
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
            value={profile?.age || ""}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
            className="form-select"
            id="gender"
            {...register("gender")}
            value={profile?.gender || ""}
          >
            <option value="MALE">Masculino</option>
            <option value="FEMALE">femenino</option>
            <option value="OTHER">Otro</option>
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
            value={profile?.address || ""}
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
            value={profile?.idNumber || ""}
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
            value={profile?.country || ""}
          />
        </div>
        {/*             <div className="mb-3">
                <label htmlFor="coordinates" className="form-label">Coordenadas</label>
                <input type="text" className="form-control" id="coordinates" placeholder="Ingrese las coordenadas"/>
            </div> */}
        {/*             <!-- Otros campos (user, userId, idNumber, photoUrl) -->
         */}{" "}
        <div className="d-flex justify-content-around">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ scale: "1.3" }}
          >
            Save
          </button>

          <button
            className="btn btn-danger"
            onClick={(e) => {
              e.preventDefault();
              setActive(false);
            }}
            style={{ scale: "1.3" }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
