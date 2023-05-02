import { buildOptionsArray } from './selectOptionBuilder'

describe('selectOptionBuilder', () => {
  describe('buildObjectArray', () => {
    it('exists', () => expect(buildOptionsArray).toBeDefined())

    it('converts object', () => {
      expect(buildOptionsArray({ a: 1, b: 2 })).toEqual([{ value: 'a', label: '1' }, { value: 'b', label: '2' }])
    })

    it('converts string array', () => {
      expect(buildOptionsArray(['a', 'b'])).toEqual([{ value: 'a', label: 'a' }, { value: 'b', label: 'b' }])
    })

    it('converts object array', () => {
      const a = [{ value: 'a', label: '1', foo: 'bar' }, { value: 'b', label: '2' }, 'c']
      const b = [{ value: 'a', label: '1' }, { value: 'b', label: '2' }, { value: 'c', label: 'c' }]
      expect(buildOptionsArray(a)).toEqual(b)
    })
  })
})
