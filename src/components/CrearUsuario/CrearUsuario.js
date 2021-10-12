import React, { Component } from "react";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import { Form, Row, Col, Label, Input, Button } from "reactstrap"; //Container
import "./CrearUsuario.css";
import GridItem from "components/Grid/GridItem";

import fotoperfilramon from '../../../src/assets/img/fotoperfil.png'
import InputLbl from "components/InputLbl/InputLbl";
import SelectCustom from "components/SelectCustom/SelectCustom";

const options = [
    { value: "cc", label: "Cédula de Ciudadanía" },
    { value: "ce", label: "Cédula de Extranjería" },
    { value: "pasaporte", label: "Pasaporte" }
];
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

                                <InputLbl type="text" name="nombres" className="mb-4" text="Nombre(s)" />

                                <InputLbl type="text" name="apellidos" className="mb-4" text="Apellidos" />

                                <SelectCustom options={options} className="mb-4" text="Tipo de Documento" name="tipoDoc" />

                                <InputLbl type="text" name="numeroDoc" className="mb-4" text="Número de Documento" />

                                <InputLbl type="text" name="direccion" className="mb-4" text="Dirección" />

                            </Col>

                            <Col xs="4">

                                <InputLbl type="text" name="telefono" className="mb-4" text="Teléfono" />

                                <InputLbl type="text" name="nombreUsuario" className="mb-4" text="Nombre de Usuario" />

                                <InputLbl type="text" name="psw" className="mb-4" text="Contraseña" />

                                <InputLbl type="text" name="rol" className="mb-4" text="Rol" />

                                
                            </Col>

                            <Col xs="4">
                                <br />
                                <img src={fotoperfilramon} style={{ width: "80%", height: "80%" }} />

                                <Row className="mb-4">
                                    <br />
                                    <Col className="mt-3">
                                        <Button className="" type="submit" color="primary">Subir Foto</Button>
                                    </Col>

                                    <Col className="mt-3">
                                        <Button className="" type="submit" color="primary">Borrar Foto</Button>
                                    </Col>

                                </Row>
                            </Col>
                        </Row>



                        <Row className="mb-4 mt-5">
                            <Col className="mt-3">
                                <Button className="" type="submit" color="primary">Crear</Button>
                            </Col>

                            <Col className="mt-3">
                                <Button className="" type="reset" color="primary">Limpiar</Button>
                            </Col>

                        </Row>

                    </Form>


                </GridItem>
            </Card>


        )
    }
}

export default FormRegProd;