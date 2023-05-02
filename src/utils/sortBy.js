import { isWriteable } from './security'

export const sortByName = (a, b) => {
  if (a.name.toUpperCase() < b.name.toUpperCase()) {
    return -1
  }
  if (a.name.toUpperCase() > b.name.toUpperCase()) {
    return 1
  }
  return 0
}

export const sortProfileByPermission = user => (a, b) => {
  const isWriteableA = isWriteable(a, user.userName)
  const isWriteableB = isWriteable(b, user.userName)

  if (isWriteableA && !isWriteableB) return 1
  if (isWriteableB && !isWriteableA) return -1
  return 0
}

export const sortProfileByIsDefault = (a, b) => {
  if (a.isDefault) return -1
  if (b.isDefault) return 1
  return 0
}
