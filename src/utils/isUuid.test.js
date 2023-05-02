import isUuid from './isUuid'

describe('isUuid', () => {
  it('exists', () => expect(isUuid).toBeDefined())

  it('returns true or false if not a uuid', () => {
    expect(isUuid('2')).toBeFalsy()
    expect(isUuid('')).toBeFalsy()
    expect(isUuid('string')).toBeFalsy()
    expect(isUuid(null)).toBeFalsy()
    expect(isUuid(undefined)).toBeFalsy()
    expect(isUuid('00000000-0000-0000-0000-000000000000')).toBeTruthy()
    expect(isUuid('ef642cac-f045-48cc-8660-e49d87a72d4400000')).toBeFalsy()
    expect(isUuid('ef642cac-f045-48cc-8660-e49d87a72d44')).toBeTruthy()
    expect(isUuid('ef642cac-F045-48cc-8660-E49D87A72D44')).toBeTruthy()
  })
})
