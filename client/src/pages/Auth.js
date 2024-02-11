import React from "react";
import { Form, Card, Container, Button, Row, Col } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
// import { Form } from "react-router-dom";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === '/login'
    return (
        <Container className="d-flex justify-content-center align-items-center"
        style={{height:window.innerHeight - 54}}
        >
            <Card style={{width:600}} className="p-5">
                <h2 className="m-auto">{isLogin ?'Авторизация':'Регистрация'}</h2>
                <Form>
                    <Form.Control className="mt-3"
                    placeholder="Введите ваш email..."/>
                    <Form.Control className="mt-3"
                    placeholder="Введите ваш пароль..."/>
                    <Row className="d-flex align-items-center mb-3 pl-3 pr-3">
                        {isLogin ?
                        <div>
                            Нет аккаунта? <NavLink to={'/registration'}>Зарегистрируйтесь!</NavLink>
                        </div>:
                        <div>
                            Есть аккаунт? <NavLink to={'/login'}>Войдите!</NavLink>
                        </div>
                        }
                        <div>
                            <Button variant={'outline-success'}>{isLogin?'Войти':'Регистрация'}</Button>
                        </div>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth