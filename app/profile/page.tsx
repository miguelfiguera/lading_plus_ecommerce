import React from "react";
import { Session } from "next-auth";
import CreateProfile from "@/components/ProfileComponents/CreateProfile";
import ProfileUserCard from "@/components/ProfileComponents/ProfileUserCard";
import { getUserSession } from "@/lib/SessionActions/SessionActions";
import { getCurrentUserProfile } from "@/lib/prismaQueries";
import {Profile} from "@prisma/client"
export default async function page() {
  let session: Session | null = null;
  let profileData:Profile | null  = null;

  try {
    session = await getUserSession();
    if (session) {
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
       <CreateProfile profile={profileData} currentUser={session} />
    </div>
  );
}
