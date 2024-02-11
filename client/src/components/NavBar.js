import React, { useContext } from "react";
import { Context } from "../index";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Container>
            <Navbar bg="dark" data-bs-theme="dark">
            <NavLink style={{color:'white'}} to={'/'}>Купи девайс</NavLink>
            {user.isAuth?
            <Nav className="ms-auto" style={{color:'white'}}>
                <Button variant={"outline-light"}>Админ панель</Button>
                <Button variant={"outline-light"} className="ms-4">Выйти</Button>
            </Nav>
            :
            <Nav className="ms-auto" style={{color:'white'}}>
                <Button variant={"outline-light"} onClick={()=>{user.setIsAuth(true)}}>Авторизация</Button>
            </Nav>}
            </Navbar>
        </Container>


    )
})

export default NavBar