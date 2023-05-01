import React from 'react'
import NavBar from '../../components/Layout/NavBar'
import { useUser } from '@auth0/nextjs-auth0/client'
import { getGymMember } from '../../../prisma/gymmember'

type Props = {}

const parseUserId = (sub: string) => {

  if (sub.length > 0) return sub.split('|')[1]
  
}

const getOrCreateUser = async (id: any) => {
  return
}

export default function Dashboard({}: Props) {
  const { user } = useUser()
  let sub = user?.sub || ''
  const id = user ? parseUserId(sub) : ''
  getOrCreateUser(id)
 

  return (
    <>
      <NavBar />
      <div>Welcome to the Dashboard!</div>
    </>
    )
}

export async function getServerSideProps() {

  const user = await getGymMember('62ef4d6d64047be3b1311b43')
  console.log(user)

  return { props : {} }

  
}