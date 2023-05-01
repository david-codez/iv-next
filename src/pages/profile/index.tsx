'use-client'
import React, { SyntheticEvent, useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'
import NavBar from '../../components/Layout/NavBar'
import { Container, Form, FormGroup, Label, Row } from 'reactstrap'
import TextField from '@/components/Forms/TextField'
import EmailField from '@/components/Forms/EmailField'
import SubmitButton from '@/components/Forms/SubmitButton'
import { useForm } from 'react-hook-form'

export default function Profile() {
  const { user, error, isLoading } = useUser()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const defaultState = {
    email: '',
    username: '',
  }
  const [formValues, setFormValues] = useState(defaultState)

  console.log(user)
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  const onSubmit = (data: any) => console.log(data)

  return (
    user && (
      <>
        <NavBar />
        <Container>
          <Row>
            <Form onSubmit={onSubmit}>
              <FormGroup>
                <EmailField id='email' className='email' value={user.email || ''} />
              </FormGroup>
              <FormGroup>
                <TextField
                  id='username'
                  className='username'
                  label='Username'
                  value={user.nickname || ''}
                />
              </FormGroup>
              <FormGroup>
                <SubmitButton />
              </FormGroup>
            </Form>
          </Row>
        </Container>
      </>
    )
  )
}
