import React from "react"
import { Button, Input, Row, Col, Form } from "reactstrap"
import MessageBubble from "./MessageBubble"

type Props = {}
type Message = {
  user: string
  avatar: string
  message: string
}

export default function MessageWindow({}: Props) {
  const messages = []
  return (
    <>
      <Row>
        <h4>Chat with User:</h4>
        <MessageBubble />
        <MessageBubble />
        <MessageBubble />
      </Row>
      <Row>
        <Form>
          <Col>
            <Input type='textarea' />
          </Col>
          <Col>
            <Button type='submit'>Send</Button>
          </Col>
        </Form>
      </Row>
    </>
  )
}
