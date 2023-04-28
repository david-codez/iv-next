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

// // CREATE
// export const createGymMember = async (
//   email: string,
//   firstName: string,
//   lastName: string,
//   username: string,
//   admin: boolean
// ) => {
//   const gymmember = await prisma.gymmembers.create({
//     data: {
//       email,
//       firstName,
//       lastName,
//       username,
//       admin,
//     },
//   })
//   return gymmember
// }

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
