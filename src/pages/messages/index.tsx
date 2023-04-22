import React from "react"
import NavBar from "@/components/Layout/NavBar"
import { Col, Container, Row } from "reactstrap"
import styles from "@/styles/Home.module.scss"
import ContactList from "@/components/Messages/ContactList"
import MessageWindow from "@/components/Messages/MessageWindow"
type Props = {}

function Messages({}: Props) {
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
