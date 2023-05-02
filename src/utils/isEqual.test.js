import isEqual from './isEqual'

describe('isEqual', () => {
  it('equal obj 1', () => {
    const x = {
      color: 'green'
    }
    const y = {
      color: 'green'
    }
    expect(isEqual(x, y)).toEqual(true)
  })

  it('not equal obj 1', () => {
    const x = {
      color: 'green',
      size: 'small'
    }
    const y = {
      color: 'green',
      size: 'big'
    }
    expect(isEqual(x, y)).toEqual(false)
  })

  it('equal obj 2', () => {
    const x = {
      color: 'green',
      size: 'small',
      names: {
        person1: 'tyler',
        person2: 'max'
      }
    }
    const y = {
      color: 'green',
      size: 'small',
      names: {
        person1: 'tyler',
        person2: 'max'
      }
    }
    expect(isEqual(x, y)).toEqual(true)
  })

  it('not equal obj 2', () => {
    const x = {
      color: 'green',
      size: 'small',
      names: {
        person1: 'tyler',
        person2: 'caleb'
      }
    }
    const y = {
      color: 'green',
      size: 'small',
      names: {
        person1: 'tyler',
        person2: 'john'
      }
    }
    expect(isEqual(x, y)).toEqual(false)
  })

  it('undefined obj', () => {
    const x = {
      color: 'green',
      size: 'small',
      names: {
        person1: 'tyler',
        person2: 'caleb'
      }
    }

    expect(isEqual(x, undefined)).toEqual(false)
  })

  it('equal str', () => expect(isEqual('apple', 'apple')).toEqual(true))

  it('not equal str', () => expect(isEqual('apple', 'orange')).toEqual(false))

  it('undefined', () => expect(isEqual(undefined, undefined)).toEqual(true))

  it('null', () => expect(isEqual(null, null)).toEqual(true))

  it('equal int', () => expect(isEqual(1, 1)).toEqual(true))

  it('not equal int', () => expect(isEqual(1, 2)).toEqual(false))
})
