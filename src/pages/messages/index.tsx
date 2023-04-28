import React from 'react'
import NavBar from '@/components/Layout/NavBar'
import { Col, Container, Row } from 'reactstrap'
import styles from '@/styles/Home.module.scss'
import ContactList from '@/components/Messages/ContactList'
import MessageWindow from '@/components/Messages/MessageWindow'
import { getAllMessages } from '../../../prisma/messages'
import { Message } from '@/lib/Message'
import { NextRequest } from 'next/server'
type Props = {
  messages: string[]
}

function Messages({ messages }: Props) {
  console.log(messages)
  return (
    <Container className={styles.appContainer}>
      <Row className='mb-5'>
        <NavBar />
      </Row>
      <Row>
        <Col sm='4'>
          <ContactList />
        </Col>
        <Col sm='8'>
          <MessageWindow />
        </Col>
      </Row>
    </Container>
  )
}

export default Messages

export const getServerSideProps = async (req: NextRequest) => {
  const messages = await getAllMessages('644476a348e8d301b51e2243')
  console.log(messages)

  // Convert the updatedAt and createdAt in each user to string
  // Otherwise, Next.js will throw an error
  // Not required if you are not using the date fields
  const m = messages.map((message: Message) => ({
    ...message,
    // timeStamp: messages.timeStamp.toISOString(),
  }))

  return { props: { messages } }
}
