import isEmpty from './isEmpty'

describe('isEmpty', () => {
  it('null', () => expect(isEmpty(null)).toEqual(true))

  it('empty string', () => expect(isEmpty('')).toEqual(true))

  it('undefined', () => expect(isEmpty(undefined)).toEqual(true))

  it('defined', () => expect(isEmpty('test')).toEqual(false))

  it('array', () => expect(isEmpty([])).toEqual(true))

  it('object', () => expect(isEmpty({})).toEqual(true))
})
