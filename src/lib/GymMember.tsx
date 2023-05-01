import { Conversation } from './Message'

export type GymMember = {
  v: number
  firstName: string
  lastName: string
  username?: string
  ivUsername?: string
  admin: boolean
  id: string
  email: string
  updatedAt: Date
  createdAt: Date
  password: string
  conversations: [Conversation]
}
