import React, { useState } from 'react'
import styles from '@/styles/Navbar.module.scss'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarProps,
} from 'reactstrap'

function Example() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  const args: NavbarProps = {
    container: 'fluid',
    color: 'dark',
    dark: true,
    fixed: 'top',
    expand: 'md',
  }

  return (
    <div className={styles.navbar}>
      <Navbar {...args} className='mb-5'>
        <NavbarBrand href='/'>reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              <NavLink href='/messages/'>Messages</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/profile'>Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/api/auth/login'>Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/api/auth/logout'>Logout</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/api/auth/me'>Me</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Example
