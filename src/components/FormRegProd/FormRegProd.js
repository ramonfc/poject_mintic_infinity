import React, { Component } from "react";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import { Form, Row, Col, Label, Input, Button } from "reactstrap"; //Container
import "./FormRegProd.css";
import GridItem from "components/Grid/GridItem";
import InputLbl from "components/InputLbl/InputLbl";
import { FormGroup } from "@material-ui/core";

export class FormRegProd extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            // <Container id="contenedor"> //No se está usando
            <Card>
                <GridItem>
                    <CardHeader color="info">

                        <h4>Registro de Productos</h4>

                    </CardHeader>
                    <br />

                    <Form>
                        <Row>
                            <Col xs="4">
                              {/*   <Label for="idProduct">ID del Producto</Label>
                                <Input className="mb-4" type="text" name="idProduct" id="idProduct" placeholder="" /> */}

                                <InputLbl text= "ID del Producto" type="text" className="mb-4"/>

                                <InputLbl text= "Nombre del Producto" type="text" className="mb-4"/>

                                <InputLbl text= "Precio Unitario" type="text" className="mb-4"/>


                                <Label for="estadoSelect">Estado en Inventario</Label>

                                <Input className="mb-4" type="select" name="estadoSelect" id="estadoSelect">
                                    <option selected disabled hidden></option>
                                    <option>Disponible</option>
                                    <option>No Disponible</option>
                                </Input>
                                
                                <InputLbl text= "Cantidad Disponible" type="text" className="mb-4"/>
                            
                            </Col>

                            <Col xs="7">
                                {/* <Label for="descripcionProd">Descripción</Label>
                                <Input className="descripcion" type="textarea" name="descripcionProd" id="descripcionProd" /> */}
                                                            
                                <InputLbl text= "Descripción" type="textarea" className="descripcion" rows="15"/>
                                
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