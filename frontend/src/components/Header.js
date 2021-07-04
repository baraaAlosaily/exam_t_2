import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
export class Header extends Component {
  render() {
    return (
      <Nav defaultActiveKey="/" as="ul">
        <Nav.Item>
          <Nav.Link href="/">Main</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link href="/favorate" >Favorite</Nav.Link>
        </Nav.Item>

      </Nav>
    )
  }
}

export default Header
