import React, { Component } from 'react'
import { Form, Container, Row, Col, Button, Label, Input } from 'reactstrap';
import './Login.css'

export class Login extends Component {
    render() {
        return (
            <Container>
                <Form id="form" class="mt-3">
                    <Col className="form-floating mb-3">
                        <Input type="email" className="form-control" id="email" name="email"
                            placeholder="Email" required />
                        <Label for="email">Email address</Label>
                    </Col>
                    <Col className="form-floating">
                        <Input type="password" className="form-control" id="password" placeholder="Password" name="password" required />
                        <Label for="password">Password</Label>
                    </Col>


                    <Row className="mt-4">
                        <Col sm={{ size: 'auto', offset: 0 }}>
                            <Button type="submit" color="primary">Login</Button>
                        </Col>

                        <Col>
                            <Button type="reset" outline color="secondary">Cancel</Button>
                        </Col>

                        <Col>
                            <Label className="row forgot" for="forgot"><a href="#" id="forgot">Forgot Password?</a></Label>
                        </Col>

                    </Row>
                </Form>
            </Container>
        )
    }
}

export default Login
