// pages/api/gymmember

import {
  creategymmember,
  deletegymmember,
  getAllgymmembers,
  getgymmember,
  updategymmember,
} from '../../prisma/gymmember'

export default async function handle(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        if (req.query.id) {
          // Get a single gymmember if id is provided is the query
          // api/gymmembers?id=1
          const gymmember = await getGymMember(req.query.id)
          return res.status(200).json(gymmember)
        } else {
          // Otherwise, fetch all gymmembers
          const gymmembers = await getAllGymMembers()
          console.log(gymmembers)
          return res.json(gymmembers)
        }
      }
      case 'POST': {
        // Create a new gymmember
        const { email, name, birthYear } = req.body
        const gymmember = await createGymMember(email, name, birthYear)
        return res.json(gymmember)
      }
      case 'PUT': {
        // Update an existing gymmember
        const { id, ...updateData } = req.body
        const gymmember = await updateGymMember(id, updateData)
        return res.json(gymmember)
      }
      case 'DELETE': {
        // Delete an existing gymmember
        const { id } = req.body
        const gymmember = await deleteGymMember(id)
        return res.json(gymmember)
      }
      default:
        break
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message })
  }
}
