import React from 'react'
import CreateProfile from '@/components/ProfileComponents/CreateProfile'
import { getUserSession } from '@/lib/SessionActions/SessionActions'

export default async function page() {
  const session= await getUserSession()
  console.log(session)

  return (
    <div>

    <CreateProfile currentUser={session}/>




    </div>
  )
}
