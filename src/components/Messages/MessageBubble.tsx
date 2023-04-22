import React from "react"
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap"

type Props = {}

function MessageBubble({}: Props) {
  return (
    <Card className='my-2'>
      <CardBody>
        <Row>
          <Col sm='4'>
            <p className='avatar'>Avatar</p>
            <p className='username'>Username</p>
          </Col>
          <Col sm='8'>Message</Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default MessageBubble
