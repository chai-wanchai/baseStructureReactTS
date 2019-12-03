import React from "react"
import '../../style/Header.css'
import logo from '../../asset/scg-logo.png'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'

export default class Header extends React.Component<any> {
	render() {
		return (
			<React.Fragment>
				<Navbar bg="dark" fixed="top">
					<Navbar.Brand href="#home">
						<img src={logo} width="100px" />
					</Navbar.Brand>
					<Navbar.Collapse className='navbar-collapse'>
						<Nav>
							<Nav.Item>
								<Nav.Link href="/home" active>Active</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href='/'>Link</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href='/g'>Link</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>


				</Navbar>
			</React.Fragment>
		)
	}
}