"use client"

import React from 'react'
import { userForm } from '@/interfaces/interfaces'
import Link from 'next/link'

export default function UserForm({type}:userForm) {

  return (
    <div><form>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We&apos;ll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="userName" className="form-label">Username</label>
      <input type="text" className="form-control" id="suername" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" id="password"/>
    </div>
    <div className="mb-3">
      <label htmlFor="passwordConfirm" className="form-label">Confirm Password</label>
      <input type="password" className="form-control" id="passwordConfirm"/>
    </div>


    {/* <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="acceptedTerms"/>
      <label className="form-check-label" htmlFor="acceptedTerms">I Accept the <Link href="/termsAndConditions">
Terms and Conditions</Link></label>
    </div> */}

{/* <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="acceptedTerms"/>
      <label className="form-check-label" htmlFor="acceptedTerms">I Accept the <Link href="/termsAndConditions">
Terms and Conditions</Link></label>
    </div> */}

<button type="submit" className="btn btn-primary">Submit</button>
  </form></div>
  )
}
