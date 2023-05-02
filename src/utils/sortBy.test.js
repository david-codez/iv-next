import { ALL_READ_OWNER_WRITE, ALL_READ_WRITE, OWNER_READ_WRITE } from './security'
import { sortByName, sortProfileByPermission, sortProfileByIsDefault } from './sortBy'

const MockProfiles = [
  {
    name: 'ABBA',
    createdBy: 'owner',
    security: ALL_READ_WRITE,
    isDefault: false
  },
  {
    name: 'Queen',
    createdBy: 'owner',
    security: ALL_READ_OWNER_WRITE,
    isDefault: false
  },
  {
    name: 'Journey',
    createdBy: 'owner',
    security: OWNER_READ_WRITE,
    isDefault: false
  },
  {
    name: 'Duran Duran',
    createdBy: 'owner',
    security: ALL_READ_WRITE,
    isDefault: true
  },
  {
    name: 'The Smiths',
    createdBy: 'owner',
    security: OWNER_READ_WRITE,
    isDefault: false
  },
  {
    name: 'Fleetwood Mac',
    createdBy: 'owner',
    security: ALL_READ_WRITE,
    isDefault: false
  },
  {
    name: 'The Police',
    createdBy: 'owner',
    security: ALL_READ_OWNER_WRITE,
    isDefault: false
  }
]

describe('sortBy', () => {
  describe('sortByName', () => {
    it('exists', () => expect(sortByName).toBeDefined())

    it('returns', () => {
      const sorted = MockProfiles.sort(sortByName)

      expect(sorted[0].name).toEqual('ABBA')
      expect(sorted[1].name).toEqual('Duran Duran')
      expect(sorted[2].name).toEqual('Fleetwood Mac')
      expect(sorted[3].name).toEqual('Journey')
      expect(sorted[4].name).toEqual('Queen')
      expect(sorted[5].name).toEqual('The Police')
      expect(sorted[6].name).toEqual('The Smiths')
    })
  })

  describe('sortProfileByPermission', () => {
    it('exists', () => expect(sortProfileByPermission).toBeDefined())

    it('places inaccessible profiles at the top for non-owners', () => {
      const sorted = MockProfiles.sort(sortByName).sort(sortProfileByPermission({ userName: 'notOwner' }))

      expect(sorted[0].name).toEqual('Journey')
      expect(sorted[1].name).toEqual('Queen')
      expect(sorted[2].name).toEqual('The Police')
      expect(sorted[3].name).toEqual('The Smiths')
      expect(sorted[4].name).toEqual('ABBA')
      expect(sorted[5].name).toEqual('Duran Duran')
      expect(sorted[6].name).toEqual('Fleetwood Mac')
    })

    it('Does not affect order for an owner', () => {
      const sorted = MockProfiles.sort(sortByName).sort(sortProfileByPermission({ userName: 'owner' }))

      expect(sorted[0].name).toEqual('ABBA')
      expect(sorted[1].name).toEqual('Duran Duran')
      expect(sorted[2].name).toEqual('Fleetwood Mac')
      expect(sorted[3].name).toEqual('Journey')
      expect(sorted[4].name).toEqual('Queen')
      expect(sorted[5].name).toEqual('The Police')
      expect(sorted[6].name).toEqual('The Smiths')
    })
  })

  describe('sortProfileByIsDefault', () => {
    it('exists', () => expect(sortProfileByIsDefault).toBeDefined())

    it('places the user\'s default profile at the top', () => {
      const sorted = MockProfiles.sort(sortByName).sort(sortProfileByIsDefault)

      expect(sorted[0].name).toEqual('Duran Duran')
      expect(sorted[1].name).toEqual('ABBA')
      expect(sorted[2].name).toEqual('Fleetwood Mac')
      expect(sorted[3].name).toEqual('Journey')
      expect(sorted[4].name).toEqual('Queen')
      expect(sorted[5].name).toEqual('The Police')
      expect(sorted[6].name).toEqual('The Smiths')
    })
  })
})
