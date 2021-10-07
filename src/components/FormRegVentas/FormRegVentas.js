import React, { Component } from 'react'
import { Row, Col, Button, Container, Form } from 'reactstrap';
import './FormRegVentas.css'
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import GridItem from "components/Grid/GridItem";
import ProductosVenta from '../../components/ProductosVenta/ProductosVenta'
import InputLbl from "components/InputLbl/InputLbl";
import SelectCustom from 'components/SelectCustom/SelectCustom';

const options =[
    {value: "proceso", label:"En Proceso"},
    {value: "entregada", label:"Entregada"},
    {value: "cancelada", label:"Cancelada"}
];

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

                        <Row id="vistaVentas">                            

                            <Col id="inputs" sm="8">


                            <Form>
                               {/*  <Label for="idVenta">ID de la Venta</Label>
                                <Input className="mb-3" type="text" name="idProduct" placeholder="" /> */}

                                <InputLbl text="ID de la Venta" type="text"  className="mb-3" name="idVenta"/>
                                
                                <InputLbl text="Valor Total" type="text"  className="mb-3" name="valorTotal"/>

                                <SelectCustom options={options}  className="mb-3" text="Estado de la Venta" name="estadoVenta"/>

                                <InputLbl text="ID del Cliente" type="text"  className="mb-3" name="idCliente"/>

                                <InputLbl text="Nombre del Cliente" type="text"  className="mb-3" name="nombreCliente"/>                               

                                <InputLbl text="Fecha de la venta" type="text"  className="mb-3" name="fechaVenta"/>


                                <Row className="fechas">
                                    <Col>                            
                                        <InputLbl text="Fecha del Envío" type="text"  className="mb-3" name="fechaEnvio"/>
                                    </Col>

                                    <Col>                                    
                                        <InputLbl text="Fecha de Entrega" type="text"  className="mb-3" name="fechaEntrega"/>
                                    </Col>

                                </Row>

                                <Row>
                                    <Col>
                                        <Button className="" type="submit" color="primary" id="crearProd">Registrar</Button>
                                    </Col>

                                    <Col>
                                        <Button className="" outline color="secondary" type="reset" id="limpiar">Limpiar</Button>
                                    </Col>
                                </Row>

                                </Form>


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
