import React from 'react'
import { Input, InputGroup, Label } from 'reactstrap'

type Props = {
  id: string
  label?: string
  className: string,
  value?: string 

}

export default function EmailField({ id, label = 'Email', className, value}: Props) {
  return (
    <InputGroup>
      <Label for={id}>{label}</Label>
      <Input type='email' className={className} value={value} id={id} />
    </InputGroup>
  )
}
