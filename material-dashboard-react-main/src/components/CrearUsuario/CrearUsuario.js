import React, { Component } from "react";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import { Form, Row, Col, Label, Input, Button } from "reactstrap"; //Container
import "./CrearUsuario.css";
import GridItem from "components/Grid/GridItem";

import fotoperfilramon from '../../../src/assets/img/fotoperfil.jpg'

export class FormRegProd extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            // <Container id="contenedor">
            <Card>
                <GridItem>
                    <CardHeader color="info">

                        <h4>Crear Usuario</h4>

                    </CardHeader>
                    <br />

                    <Form>
                        <Row>
                            <Col xs="4">
                                <Label for="idProduct">Nombre(s)</Label>
                                <Input className="mb-4" type="text" name="idProduct" id="idProduct" placeholder="" />

                                <Label for="nameProduct">Apellidos</Label>
                                <Input className="mb-4" type="text" name="nameProduct" id="nameProduct" placeholder="" />
                                <Label for="estadoSelect">Tipo de documento</Label>

                                <Input className="mb-4" type="select" name="estadoSelect" id="estadoSelect">
                                    <option selected disabled hidden></option>
                                    <option>Cedula de Ciudadania</option>
                                    <option>Cedula de Extranjeria</option>
                                    <option>Pasaporte</option>
                                    <option>Tarjeta de Identidad</option>
                                </Input>
                                <Label for="estadoSelect">Numero de Documento</Label>
                                <Label for="precioUnitarioP"></Label>
                                <Input className="mb-4" type="text" name="precioUnitarioP" id="precioUnitarioP" placeholder="" />


                                <Label for="cantidadDisponibleProd">Nombre de Usuario</Label>
                                <Input className="mb-4" type="text" name="cantidadDisponibleProd" id="cantidadDisponibleProd" placeholder="" />
                            </Col>

                            <Col xs="4">
                                <Label for="descripcionProd">Direccion</Label>
                                <Input className="mb-4" type="text" name="descripcionProd" />
                                <Label for="descripcionProd">Telefono</Label>
                                <Input className="mb-4" type="text" name="descripcionProd" />
                                <Label for="descripcionProd">Nombre de usuario</Label>
                                <Input className="mb-4" type="text" name="descripcionProd" />
                                <Label for="descripcionProd">Contraseña</Label>
                                <Input className="mb-4" type="text" name="descripcionProd" />
                                <Label for="descripcionProd">Repetir Contraseña</Label>
                                <Input className="mb-4" type="text" name="descripcionProd" />
                            </Col>
                            <Col xs="4">
                                <br />
                                <img src={fotoperfilramon} style={{ width: "80%", height: "80%" }} />
                                
                                <Row className="mb-4">
                                <br />
                                    <Col className="mt-3" sm={{ size: 'auto', offset: 0 }}>
                                        <Button className="" color="primary" id="crearProd">Subir Foto</Button>
                                    </Col>

                                    <Col className="mt-3" sm={{ size: 'auto', offset: 0 }}>
                                        <Button className="" color="primary" id="crearProd">Borrar Foto</Button>
                                    </Col>

                                </Row>
                            </Col>
                        </Row>



                        <Row className="mb-4">
                            <Col className="mt-3" sm={{ size: 'auto', offset: 0 }}>
                                <Button className="" color="primary" id="crearProd">Crear</Button>
                            </Col>

                            <Col className="mt-3" sm={{ size: 'auto', offset: 0 }}>
                                <Button className="" color="primary" id="crearProd">Limpiar</Button>
                            </Col>

                        </Row>

                    </Form>


                </GridItem>
            </Card>


        )
    }
}

export default FormRegProd;