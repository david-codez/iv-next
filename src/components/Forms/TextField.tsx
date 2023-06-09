import React from "react"
import { Input, InputGroup, Label } from "reactstrap"

type Props = {
  id: string
  label: string
  className: string
  defaultValue?: string
}

export default function TextField({ id, label, className, defaultValue='' }: Props) {
  return (
    <InputGroup>
      <Label for={id}>{label}</Label>
      <Input type='text' className={className} id={id} defaultValue={defaultValue} />
    </InputGroup>
  )
}
