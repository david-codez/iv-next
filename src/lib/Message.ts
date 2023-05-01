import { GymMember } from "./GymMember"

export type Message = {
  fromUser: string
  toUser: string
  message: string
  timeStamp?: string
  id: string
  createdAt: Date
  updatedAt: Date
}

export type Conversation = {
  messages: [Message]
  users: [GymMember]
  id: string
  createdAt: Date
  updatedAt: Date
}
