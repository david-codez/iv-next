import * as validators from './inputValidators'

describe('validators', () => {
  describe('required', () => {
    it('exists', () => expect(validators.required).toBeDefined())

    it('returns an error when value is empty', () => {
      expect(validators.required()).toEqual('Required')
      expect(validators.required('')).toEqual('Required')
      expect(validators.required('test')).toBeFalsy()
    })
  })

  describe('validators.numeric', () => {
    it('exists', () => expect(validators.numeric).toBeDefined())

    it('returns an error when value is not numeric', () => {
      expect(validators.numeric()).toBeFalsy()
      expect(validators.numeric('')).toBeFalsy()
      expect(validators.numeric('a')).toEqual('Invalid')
      expect(validators.numeric('abcd')).toEqual('Invalid')
      expect(validators.numeric('a123')).toEqual('Invalid')
      expect(validators.numeric('123a')).toEqual('Invalid')
      expect(validators.numeric(' 123')).toEqual('Invalid')
      expect(validators.numeric('12 3')).toEqual('Invalid')
      expect(validators.numeric('123 ')).toEqual('Invalid')
      expect(validators.numeric('123!')).toEqual('Invalid')
      expect(validators.numeric('1')).toBeFalsy()
      expect(validators.numeric('12345')).toBeFalsy()
      expect(validators.numeric(12345)).toBeFalsy()
    })
  })

  describe('validators.zip', () => {
    it('exists', () => expect(validators.zip).toBeDefined())

    it('returns an error when value is not a valid zip code', () => {
      expect(validators.zip()).toBeFalsy()
      expect(validators.zip('')).toBeFalsy()
      expect(validators.zip('00000')).toBeFalsy()
      expect(validators.zip('00000-0000')).toBeFalsy()
      expect(validators.zip('0')).toEqual('Invalid')
      expect(validators.zip('0-0')).toEqual('Invalid')
      expect(validators.zip('000000-0000')).toEqual('Invalid')
      expect(validators.zip('00000-00000')).toEqual('Invalid')
      expect(validators.zip('a0000-0000')).toEqual('Invalid')
      expect(validators.zip('000000000')).toEqual('Invalid')
    })
  })

  describe('validators.phone', () => {
    it('exists', () => expect(validators.phone).toBeDefined())

    it('returns an error when value is not a valid phone number', () => {
      expect(validators.phone()).toBeFalsy()
      expect(validators.phone('')).toBeFalsy()
      expect(validators.phone('555-555-5555')).toBeFalsy()
      expect(validators.phone('5555555555')).toEqual('Invalid')
      expect(validators.phone('(555) 555-5555')).toEqual('Invalid')
      expect(validators.phone('(a55) 555-5555')).toEqual('Invalid')
      expect(validators.phone('555-5555')).toEqual('Invalid')
    })
  })
})
