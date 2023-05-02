export const ALL_READ_WRITE = 'ALL_READ_WRITE'
export const ALL_READ_OWNER_WRITE = 'ALL_READ_OWNER_WRITE'
export const OWNER_READ_WRITE = 'OWNER_READ_WRITE'

export const isReadable = (profile, sessionUsername) => {
  if (!sessionUsername || !profile) return false
  const { security, createdBy } = profile
  const isOwner = sessionUsername === createdBy

  switch (security) {
    case ALL_READ_WRITE: return true
    case ALL_READ_OWNER_WRITE: return true
    case OWNER_READ_WRITE: return isOwner
    default: return false
  }
}

export const isWriteable = (profile, sessionUsername) => {
  if (!sessionUsername || !profile) return false
  const { security, createdBy } = profile
  const isOwner = sessionUsername === createdBy

  switch (security) {
    case ALL_READ_WRITE: return true
    case ALL_READ_OWNER_WRITE: return isOwner
    case OWNER_READ_WRITE: return isOwner
    default: return false
  }
}
