import React from "react"
import { Nav, NavItem, NavLink } from "reactstrap"

type Props = {}

function ContactList({}: Props) {
  return (
    <div>
      <p>Contacts</p>
      <Nav vertical='sm'>
        <NavItem>
          <NavLink href='/messages/#'>First Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/messages/#'>Second Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/messages/#'>Third Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/messages/#'>Fourth Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/messages/#'>Fifth Contact</NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export default ContactList
