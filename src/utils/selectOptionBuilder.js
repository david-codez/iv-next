import React from 'react'

const toArray = data => {
  if (!data) return []
  if (Array.isArray(data)) return data
  return Object.entries(data).map(([value, label]) => ({ value, label }))
}

const valueToOptionObject = t => value => {
  if (typeof value === 'object') return { value: value.value, label: t((value.label || value.value) + '') }
  return { value, label: t(value + '') }
}

export const buildOptionsArray = (data, t = s => s) => toArray(data).map(valueToOptionObject(t))

const toElement = ({ value, label }) => <option key={value} value={value}>{label}</option>

const selectOptionBuilder = (data, t = s => s) => buildOptionsArray(data, t).map(toElement)

export default selectOptionBuilder
