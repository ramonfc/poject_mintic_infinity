import React, { Component } from "react";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import { Form, Row, Col, Label, Input, Button } from "reactstrap"; //Container
import "./FormRegProd.css";
import GridItem from "components/Grid/GridItem";

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

                        <h4>Maestro Registro de Productos</h4>

                    </CardHeader>
                    <br />

                    <Form>
                        <Row>
                            <Col xs="4">
                                <Label for="idProduct">ID del Producto</Label>
                                <Input className="mb-4" type="text" name="idProduct" id="idProduct" placeholder="" />

                                <Label for="nameProduct">Nombre del Producto</Label>
                                <Input className="mb-4" type="text" name="nameProduct" id="nameProduct" placeholder="" />

                                <Label for="precioUnitarioP">Precio Unitario</Label>
                                <Input className="mb-4" type="text" name="precioUnitarioP" id="precioUnitarioP" placeholder="" />


                                <Label for="estadoSelect">Estado en Inventario</Label>

                                <Input className="mb-4" type="select" name="estadoSelect" id="estadoSelect">
                                    <option selected disabled hidden></option>
                                    <option>Disponible</option>
                                    <option>No Disponible</option>
                                </Input>

                                <Label for="cantidadDisponibleProd">Cantidad Disponible</Label>
                                <Input className="mb-4" type="text" name="cantidadDisponibleProd" id="cantidadDisponibleProd" placeholder="" />
                            </Col>

                            <Col xs="7">
                                <Label for="descripcionProd">Descripción</Label>
                                <Input className="descripcion" type="textarea" name="descripcionProd" id="descripcionProd" />
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