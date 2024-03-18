import React from "react";
import { Session } from "next-auth";
import CreateProfile from "@/components/ProfileComponents/CreateProfile";
import ProfileUserCard from "@/components/ProfileComponents/ProfileUserCard";
import { getUserSession } from "@/lib/SessionActions/SessionActions";
import { getCurrentUserProfile } from "@/lib/prismaQueries";
import {Profile,Role} from "@prisma/client"

type token={
  name:string,
  email:string,
  role:Role,
  id:string,

}
export default async function page() {
  let session: Session | null = null;
  let sessionToken: token | null = null;
  let profileData:Profile | null  = null;
  try {
    session = await getUserSession();
    if (session) {
      sessionToken = session.user as token;
      const results = await getCurrentUserProfile(session?.user.id);
      if(results )
      profileData = results
    }
} catch (e) {
    console.log(e);
    return e;
  }
  return (
    <div>
       {profileData && <ProfileUserCard data={profileData}/>}
       {sessionToken && <CreateProfile profile={profileData} currentUser={sessionToken} />}
    </div>
  );
}
