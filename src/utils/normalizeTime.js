const getMeridiem = (numberPart, alphaPart) => {
  let meridiem

  if (alphaPart) {
    alphaPart = alphaPart.charAt(0)
    if (alphaPart.match(/([AaPp])$/)) {
      meridiem = alphaPart.toUpperCase() + 'M'
    } else {
      alphaPart = null
    }
  }

  if (!alphaPart) {
    let hour = Math.floor(numberPart / 100)
    if (hour === 0) hour = numberPart
    if (isBeforeNoon(hour)) meridiem = 'AM'
    if (isAfterNoon(hour)) meridiem = 'PM'
  }

  return meridiem
}

const sanitizeTime = value => {
  const timeParts = value.match(/([0-9]+):([0-9]+)/)
  const cleanTime = value.replace(/[^0-9AaPpMm]/g, '')

  const matches = cleanTime.match(/(\d+)([^\d]*)$/)

  if (matches == null) {
    return {}
  }

  let numberPart = matches[1]
  const alphaPart = matches[2]

  let hours
  let minutes

  if (timeParts) {
    hours = timeParts[1]
    minutes = timeParts[2]

    if (minutes.length === 1 && minutes < 10) {
      minutes = minutes.slice(0, -1) + '0' + minutes.slice(-1)
      numberPart = hours + minutes
    }
    if (hours > 25 || minutes > 60) {
      return {}
    }
  }

  const meridiem = getMeridiem(numberPart, alphaPart)

  return { time: numberPart, meridiem }
}

const isMidnightSet = new Set(['0', '00', '000', '0000', '24', '2400'])
const isBeforeNoon = hour => (hour >= 0 && hour < 12) || isMidnightSet.has(hour.toString()) ||
  (hour > 24 && hour < 60) || (hour >= 60 && hour < 100)

const isNoonSet = new Set(['12', '1200'])
const isAfterNoon = hour => (hour >= 12 && hour < 24) || isNoonSet.has(hour.toString())
const buildTime = (hour, minute, meridiem) => hour + ':' + minute + ' ' + meridiem

const normalizeTime = (value) => {
  if (!value) return value

  let { time, meridiem } = sanitizeTime(value)

  if (!time && !meridiem) return value
  if (time > 2400) return value
  if (time > 24 && time < 60) time = '12' + time
  if (time >= 60 && time < 100) time = '1' + (time - 60)
  if (isMidnightSet.has(time)) time = '1200'
  if (time > 0 && time < 25) time += '00'

  let hours = Math.floor(time / 100)
  const minutes = time.slice(-2)

  if (minutes >= 60) return value
  if (hours > 12) hours = hours - 12

  return buildTime(hours, minutes, meridiem)
}

export default normalizeTime
