import React, { SyntheticEvent } from 'react'
import { Button, Input, InputGroup, Label } from 'reactstrap'

type Props = {
  buttonText?: string
}

export default function SubmitButton({ buttonText = 'Submit' }: Props) {
  return (
    <InputGroup>
      <Button type='submit' id='submitButton'>
        {buttonText}
      </Button>
    </InputGroup>
  )
}
