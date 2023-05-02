import { describe, it, expect } from '@jest/globals'
import { ALL_READ_OWNER_WRITE, ALL_READ_WRITE, OWNER_READ_WRITE, isReadable, isWriteable } from './security'

const allReadWrite = { security: ALL_READ_WRITE, createdBy: 'owner' }
const allReadOwnerWrite = { security: ALL_READ_OWNER_WRITE, createdBy: 'owner' }
const ownerReadWrite = { security: OWNER_READ_WRITE, createdBy: 'owner' }

describe('security has', () => {
  describe('isReadable that', () => {
    it('handles if session user can see a profile', () => {
      expect(isReadable(allReadWrite, undefined)).toEqual(false)
      expect(isReadable(allReadWrite, '')).toEqual(false)
      expect(isReadable(allReadWrite, 'owner')).toEqual(true)
      expect(isReadable(allReadWrite, 'notOwner')).toEqual(true)

      expect(isReadable(allReadOwnerWrite, undefined)).toEqual(false)
      expect(isReadable(allReadOwnerWrite, '')).toEqual(false)
      expect(isReadable(allReadOwnerWrite, 'owner')).toEqual(true)
      expect(isReadable(allReadOwnerWrite, 'notOwner')).toEqual(true)

      expect(isReadable(ownerReadWrite, undefined)).toEqual(false)
      expect(isReadable(ownerReadWrite, '')).toEqual(false)
      expect(isReadable(ownerReadWrite, 'owner')).toEqual(true)
      expect(isReadable(ownerReadWrite, 'notOwner')).toEqual(false)
    })
  })

  describe('isWriteable', () => {
    it('Handles if session user can write to a profile', () => {
      expect(isWriteable(allReadWrite, undefined)).toEqual(false)
      expect(isWriteable(allReadWrite, '')).toEqual(false)
      expect(isWriteable(allReadWrite, 'owner')).toEqual(true)
      expect(isWriteable(allReadWrite, 'notOwner')).toEqual(true)

      expect(isWriteable(allReadOwnerWrite, undefined)).toEqual(false)
      expect(isWriteable(allReadOwnerWrite, '')).toEqual(false)
      expect(isWriteable(allReadOwnerWrite, 'owner')).toEqual(true)
      expect(isWriteable(allReadOwnerWrite, 'notOwner')).toEqual(false)

      expect(isWriteable(ownerReadWrite, undefined)).toEqual(false)
      expect(isWriteable(ownerReadWrite, '')).toEqual(false)
      expect(isWriteable(ownerReadWrite, 'owner')).toEqual(true)
      expect(isWriteable(ownerReadWrite, 'notOwner')).toEqual(false)
    })
  })
})
