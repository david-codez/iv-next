import React from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import Image from 'next/image'
import mouse from '../../../public/Images/mouse.svg'
import styles from '@/styles/Messages.module.scss'

type Props = {
  user: string
  avatar: string
  message: string
}

function MessageBubble({ user, avatar, message }: Props) {
  return (
    <Card className='my-2'>
      <CardBody>
        <Row>
          <Col sm='4'>
            <Image src={mouse} alt='mouse' width={80} height={80} />
          </Col>
          <Col sm='8'>
            <p>{user}</p>
            <p>{message}</p>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default MessageBubble
