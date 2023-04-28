import React, { SyntheticEvent, useState } from 'react'
import { Button, Input, Row, Col, Form } from 'reactstrap'
import MessageBubble from './MessageBubble'
import mouse from '../../../public/Images/mouse.svg'
import Image from 'next/image'

type Props = {}
type Message = {
  id: string
  user: string
  avatar: string
  message: string
}

export default function MessageWindow({}: Props) {
  const user = 'David'
  const avatar = 'image url'
  const [id, setId] = useState(3)
  const [input, setInput] = useState('')

  const message: Message = {
    id: id.toString(),
    user: user,
    avatar: avatar,
    message: input,
  }
  const [messages, setMessages] = useState([
    {
      id: '1',
      user: 'David',
      avatar: 'image url',
      message: 'hello from the other world!',
    },
    {
      id: '2',
      user: 'Not David',
      avatar: 'image url',
      message: 'is that adele?',
    },
  ])

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    setMessages([...messages, message])
    setId(id + 1)
    setInput('')
  }
  return (
    <>
      <Row>
        <h4>Chat with User:</h4>
        {messages.map((message: Message) => {
          return (
            <MessageBubble
              key={message.id}
              user={message.user}
              avatar={message.avatar}
              message={message.message}
            />
          )
        })}
      </Row>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col sm={10}>
            <Input
              type='textarea'
              value={input}
              onChange={(e) => {
                setInput(e.target.value)
              }}
            />
          </Col>
          <Col sm={2}>
            <Button type='submit'>Send</Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}
