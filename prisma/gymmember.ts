// /prisma/gymmember.js
import { GymMember } from '@/lib/GymMember'
import { prisma } from './prisma'

// READ
export const getAllGymMembers = async () => {
  const members = await prisma.gymmembers.findMany()
  console.log(members)
  return members
}

export const getGymMember = async (id: string) => {
  const gymmember = await prisma.gymmembers.findUnique({
    where: { id },
  })
  return gymmember
}

// CREATE
export const createGymMember = async (
  email: string,
  firstName: string,
  lastName: string,
  username: string,
  admin: boolean,
  ivUsername: string,
  authId: string

) => {
  const gymmember = await prisma.gymmembers.create({
    data: {
      email,
      username,
      admin,
      ivUsername,
      authId,
      createdAt: new Date(),
      updatedAt: new Date(),
      firstName,
      lastName,
      v: 0 
    },
  })
  return gymmember
}

// // UPDATE
// export const updateGymMember = async (id: string, updateData: any) => {
//   const gymmember = await prisma.gymmember.update({
//     where: {
//       id,
//     },
//     data: {
//       ...updateData,
//     },
//   })
//   return gymmember
// }

// // DELETE
// export const deleteGymMember = async (id: string) => {
//   const gymmember = await prisma.gymmember.delete({
//     where: {
//       id,
//     },
//   })
//   return gymmember
// }
