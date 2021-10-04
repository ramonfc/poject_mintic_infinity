import React, { Component } from 'react'
import { Row, Col, Label, Input, Button, Container } from 'reactstrap';
import './FormRegVentas.css'
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import GridItem from "components/Grid/GridItem";
import ProductosVenta from '../../components/ProductosVenta/ProductosVenta'


export class FormRegVentas extends Component {
    render() {
        return (

            <Card>
                <GridItem>
                    <CardHeader color="info">

                        <h4>Registro de Ventas</h4>

                    </CardHeader>

                    <Container>
                       <br/ >

                        <Row id="formRegistroVentas">
                            <Col id="inputs" sm="8">
                                <Label for="idVenta">ID de la Venta</Label>
                                <Input className="mb-3" type="text" name="idProduct" placeholder="" />

                                <Label for="valorTotal">Valor Total</Label>
                                <Input className="mb-3" type="text" name="valorTotal" placeholder="" />


                                <Label for="estadoSelectVenta">Estado de la Venta</Label>

                                <Input className="mb-3" type="select" name="estadoSelectVenta">
                                    <option selected disabled hidden></option>
                                    <option>En Proceso</option>
                                    <option>Entregada</option>
                                    <option>Cancelada</option>
                                </Input>

                                <Label for="idCliente">ID del Cliente</Label>
                                <Input className="mb-3" type="text" name="idCliente" placeholder="" />

                                <Label for="nombreCliente">Nombre del Cliente</Label>
                                <Input className="mb-3" type="text" name="nombreCliente" placeholder="" />

                                <Label for="fechaVenta">Fecha de la Venta</Label>
                                <Input className="mb-3" type="text" name="fechaVenta" placeholder="" />


                                <Row className="fechas">
                                    <Col>
                                        <Label className="fecha2" for="fechaEnvio">Fecha del Envio</Label>
                                        <Input className="mb-3" type="text" name="fechaEnvio" placeholder="" />
                                    </Col>

                                    <Col>
                                        <Label className="fecha2" for="fechaEntrega">Fecha de Entrega</Label>
                                        <Input className="mb-3" type="text" name="fechaEntrega" placeholder="" />
                                    </Col>

                                </Row>

                                <Row>
                                    <Col>
                                        <Button className="" color="primary" id="crearProd">Registrar</Button>
                                    </Col>

                                    <Col>
                                        <Button className="" outline color="secondary" type="reset" id="limpiar">Limpiar</Button>
                                    </Col>
                                </Row>

                            </Col>

                            <Col id="TablaProductos" xs="1">

                            <ProductosVenta/>

                            </Col>

                        </Row>

                        

                    </Container>
                    <br/>
                </GridItem>
            </Card>

        )
    }
}

export default FormRegVentas
