import { describe, it, expect } from '@jest/globals'
import { normalizeMoney, normalizeUpperCase, normalizeNumeric, normalizeNumericDecimal, normalizeNumericDecimalWithNegatives, normalizeNumericHyphen, normalizeParseInt, normalizeZip, normalizePhone } from './normalizations'

describe('normalizations has', () => {
  describe('normalizeMoney that', () => {
    it('exists', () => expect(normalizeMoney).toBeDefined())

    it('returns', () => {
      expect(normalizeMoney('100')).toEqual('100.00')
      expect(normalizeMoney('-100')).toEqual('-100.00')
      expect(normalizeMoney('add123')).toEqual('123.00')
      expect(normalizeMoney(-10)).toEqual(-10)
      expect(normalizeMoney(123)).toEqual(123)
      expect(normalizeMoney('1234567890.12')).toEqual('1234567890.12')
      expect(normalizeMoney('12345678901234')).toEqual('')
      expect(normalizeMoney('1234567890123456.11')).toEqual('')
      expect(normalizeMoney('1.123456')).toEqual('1.12')
      expect(normalizeMoney('11123.123456')).toEqual('11123.12')
      expect(normalizeMoney(undefined)).toEqual(undefined)
      expect(normalizeMoney()).toEqual(undefined)
      expect(normalizeMoney(' ')).toEqual('')
      expect(normalizeMoney('-')).toEqual('')
      expect(normalizeMoney(']1dff')).toEqual('1.00')
      expect(normalizeMoney(']')).toEqual('')
    })
  })

  describe('normalizeUpperCase that', () => {
    it('exists', () => expect(normalizeUpperCase).toBeDefined())

    it('returns', () => {
      expect(normalizeUpperCase('abc')).toEqual('ABC')
      expect(normalizeUpperCase('aBc')).toEqual('ABC')
      expect(normalizeUpperCase('aB123c')).toEqual('AB123C')
      expect(normalizeUpperCase('')).toEqual('')
      expect(normalizeUpperCase(undefined)).toEqual(undefined)
      expect(normalizeUpperCase(1123)).toEqual(1123)
      expect(normalizeUpperCase(' ')).toEqual(' ')
    })
  })

  describe('normalizeNumeric that', () => {
    it('exists', () => expect(normalizeNumeric).toBeDefined())

    it('returns', () => {
      expect(normalizeNumeric('123')).toEqual('123')
      expect(normalizeNumeric('1ab2')).toEqual('12')
      expect(normalizeNumeric('ab')).toEqual('')
      expect(normalizeNumeric('1-2')).toEqual('12')
      expect(normalizeNumeric('1/a2')).toEqual('12')
      expect(normalizeNumeric('')).toEqual('')
      expect(normalizeNumeric(' ')).toEqual('')
      expect(normalizeNumeric(123)).toEqual(123)
      expect(normalizeNumeric(-12.3)).toEqual(-12.3)
      expect(normalizeNumeric(undefined)).toEqual(undefined)
    })
  })

  describe('normalizeNumericDecimal that', () => {
    it('exists', () => expect(normalizeNumericDecimal).toBeDefined())

    it('returns', () => {
      expect(normalizeNumericDecimal('123.00')).toEqual('123.00')
      expect(normalizeNumericDecimal('1.ab2')).toEqual('1.2')
      expect(normalizeNumericDecimal('ab')).toEqual('')
      expect(normalizeNumericDecimal('1-2')).toEqual('12')
      expect(normalizeNumericDecimal('1/a2')).toEqual('12')
      expect(normalizeNumericDecimal('')).toEqual('')
      expect(normalizeNumericDecimal(' ')).toEqual('')
      expect(normalizeNumericDecimal(123)).toEqual(123)
      expect(normalizeNumericDecimal(-123)).toEqual(-123)
      expect(normalizeNumericDecimal(undefined)).toEqual(undefined)
    })
  })

  describe('normalizeNumericDecimalWithNegatives that', () => {
    it('exists', () => expect(normalizeNumericDecimalWithNegatives).toBeDefined())

    it('returns', () => {
      expect(normalizeNumericDecimalWithNegatives(2)).toEqual(2)
      expect(normalizeNumericDecimalWithNegatives('')).toEqual('')
      expect(normalizeNumericDecimalWithNegatives(-123)).toEqual(-123)
      expect(normalizeNumericDecimalWithNegatives(-12.3)).toEqual(-12.3)
      expect(normalizeNumericDecimalWithNegatives('-123')).toEqual('-123')
      expect(normalizeNumericDecimalWithNegatives(undefined)).toEqual(undefined)
      expect(normalizeNumericDecimalWithNegatives(' ')).toEqual('')
      expect(normalizeNumericDecimalWithNegatives(']')).toEqual('')
    })
  })

  describe('normalizeNumericHyphen that', () => {
    it('exists', () => expect(normalizeNumericHyphen).toBeDefined())

    it('returns', () => {
      expect(normalizeNumericHyphen('2-2')).toEqual('2-2')
      expect(normalizeNumericHyphen('')).toEqual('')
      expect(normalizeNumericHyphen(-123)).toEqual(-123)
      expect(normalizeNumericHyphen(-12.3)).toEqual(-12.3)
      expect(normalizeNumericHyphen('-123')).toEqual('-123')
      expect(normalizeNumericHyphen('123')).toEqual('123')
      expect(normalizeNumericHyphen(undefined)).toEqual(undefined)
      expect(normalizeNumericHyphen(' ')).toEqual('')
      expect(normalizeNumericHyphen(']')).toEqual('')
    })
  })

  describe('normalizeParseInt that', () => {
    it('exists', () => expect(normalizeParseInt).toBeDefined())

    it('returns', () => {
      expect(normalizeParseInt('')).toEqual('')
      expect(normalizeParseInt(' ')).toEqual(NaN)
      expect(normalizeParseInt(']')).toEqual(NaN)
      expect(normalizeParseInt('asd')).toEqual(NaN)
      expect(normalizeParseInt()).toEqual(undefined)
      expect(normalizeParseInt('1')).toEqual(1)
      expect(normalizeParseInt('1.2')).toEqual(1)
      expect(normalizeParseInt('123')).toEqual(123)
    })
  })

  describe('normalizeZip that', () => {
    it('exists', () => expect(normalizeZip).toBeDefined())

    it('returns', () => {
      expect(normalizeZip('')).toEqual('')
      expect(normalizeZip(' ')).toEqual('')
      expect(normalizeZip(']')).toEqual('')
      expect(normalizeZip('1')).toEqual('1')
      expect(normalizeZip('12345')).toEqual('12345')
      expect(normalizeZip('123456')).toEqual('12345-6')
      expect(normalizeZip('12345ddd')).toEqual('12345')
      expect(normalizeZip(undefined)).toEqual(undefined)
    })
  })

  describe('normalizePhone that', () => {
    it('exists', () => expect(normalizePhone).toBeDefined())

    it('returns', () => {
      expect(normalizePhone('')).toEqual('')
      expect(normalizePhone(' ')).toEqual('')
      expect(normalizePhone(']')).toEqual('')
      expect(normalizePhone('1')).toEqual('1')
      expect(normalizePhone('123')).toEqual('123-')
      expect(normalizePhone('1234')).toEqual('123-4')
      expect(normalizePhone('123456')).toEqual('123-456')
      expect(normalizePhone('12345678')).toEqual('123-456-78')
      expect(normalizePhone('1234567890')).toEqual('123-456-7890')
      expect(normalizePhone('1234567890123')).toEqual('123-456-7890')
      expect(normalizePhone(undefined)).toEqual(undefined)
    })
  })
})
