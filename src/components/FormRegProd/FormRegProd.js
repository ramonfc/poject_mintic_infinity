import React, { Component } from 'react';
import { Form, FormGroup, Row, Col, Label, Input, Button, Container } from 'reactstrap';
import './FormRegProd.css'


export class FormRegProd extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Container id="contenedor">

                <div id="titulo" className="mb-5">
                    <h2>Maestro Registro de Productos</h2>
                </div>
                <Form>

                    <Row>
                        <Col xs="4">
                            <Label for="idProduct">ID del Producto</Label>
                            <Input className="mb-4" type="text" name="idProduct" id="idProduct" placeholder="" />

                            <Label for="nameProduct">Nombre del Producto</Label>
                            <Input className="mb-4" type="text" name="nameProduct" id="nameProduct" placeholder="" />

                            <Label for="precioUnitarioP">Precio Unitario</Label>
                            <Input className="mb-4" type="text" name="precioUnitarioP" id="precioUnitarioP" placeholder="" />


                            <Label  for="estadoSelect">Estado en Inventario</Label>

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
                            <Button className="" color= "primary" id="crearProd">Crear</Button>
                        </Col>

                        <Col className="mt-3" sm={{ size: 'auto', offset: 0.2 }}>
                            <Button className="" outline color= "secondary" type="reset" id="limpiar">Limpiar</Button>
                        </Col>

                        <Col className="mt-3"  sm={{ size: 'auto', offset: 2 }}>
                            <Label  for="buscarProd">Busqueda por Id o nombre</Label>
                        </Col>


                        <Col className="mt-3">
                            <Input type="text" name="buscarProd" id="buscarProd" placeholder="" />
                        </Col>

                        <Col className="mt-3">
                            <Button className="col-6" id="btnBuscarProd">Buscar</Button>
                        </Col>

                    </Row>

                </Form>

            </Container >
        )
    }
}

export default FormRegProd;
