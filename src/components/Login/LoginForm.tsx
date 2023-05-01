import React from 'react'
import { Button, Form } from 'reactstrap'
import PasswordField from '../Forms/PasswordField'
import TextField from '../Forms/TextField'


type Props = {}

export default function LoginForm({}: Props) {
  return (
    <div className='mt-3'>
      <Form className='mt-5'>
        <TextField label='Username' className='my-3' id='username' />
        <PasswordField label='Password' className='my-3' id='password' />
        <Button type='submit' color='primary' className='text-align-center'>
          Submit
        </Button>
      </Form>
    </div>
  )
}
