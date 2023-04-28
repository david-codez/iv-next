import React from 'react'
import { Input, InputGroup, Label } from 'reactstrap'

type Props = {
  id: string
  label?: string
  className: string
}

export default function EmailField({ id, label = 'Email', className }: Props) {
  return (
    <InputGroup>
      <Label for={id}>{label}</Label>
      <Input type='email' className={className} id={id} />
    </InputGroup>
  )
}
