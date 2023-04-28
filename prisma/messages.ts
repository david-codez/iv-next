import { prisma } from './prisma'

export const getAllMessages = async (id: string) => {
  const messages = await prisma.messages.findMany({
    where: { fromUser: id },
  })
  return messages
}
