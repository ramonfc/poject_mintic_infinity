import React, { Component } from 'react'
import { Row, Col, Button, Container, Form, Label } from 'reactstrap';
import './FormRegVentas.css'
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import GridItem from "components/Grid/GridItem";
import ProductosVenta from '../../components/ProductosVenta/ProductosVenta'
import ProductsToAdd from '../../components/ProductosVenta/ProductsToAdd'
import InputLbl from "components/InputLbl/InputLbl";
import SelectCustom from 'components/SelectCustom/SelectCustom';


const options =[
    {value: "proceso", label:"En Proceso"},
    {value: "entregada", label:"Entregada"},
    {value: "cancelada", label:"Cancelada"}
];


const BASE_URL = process.env.REACT_APP_BASE_URL;
const PATH_VENTAS= "ventas"

export class FormRegVentas extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            modalActualizar: false,
            modalInsertar: false,
            form: {            
                idVendedor:"",
                valorTotal:0,
                estadoVenta: "",
                idCliente:"",
                nombreCliente:"",
                fechaVenta:"",
                fechaEnvio:"",
                fechaEntrega:""
            }
        };

    }

    insertar = () => {

        this.setState({
            form: {
                idVendedor:"",
                nombreVendedor:"",
                valorTotal:0,
                estadoVenta: "",
                idCliente:"",
                nombreCliente:"",
                fechaVenta:"",
                fechaEnvio:"",
                fechaEntrega:""
            }
        });

        let ventaACrear = { ...this.state.form };
        console.log(ventaACrear);
        

        this.crearVenta(ventaACrear);
        /* this.setState({ modalInsertar: false }); */
    }


    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSelectChange = (value) => {
        this.setState({
            form: {
                ...this.state.form,
                estadoProdInv: value,
            },
        });
    }

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

                                {/* <InputLbl text="ID de la Venta" type="text"  className="mb-3" name="idVenta"/> */}
                                
                                <InputLbl text="ID del Vendedor" type="text"  className="mb-3" name="idVendedor"/>

                                <InputLbl text="Nombre del Vendedor" type="text"  className="mb-3" name="nombreVendedor"/>

                                <InputLbl text="Valor Total" type="text"  className="mb-3" name="valorTotal"/>

                                {/* <SelectCustom options={options}  className="mb-3" text="Estado de la Venta" name="estadoVenta"/> */}
                                <Label  >Estado de la Venta</Label>
                                <select type="select" name="estadoVenta" onChange={this.handleChange} value={this.state.form.estadoVenta} className="mb-3">
                                <option value=""></option>
                                    <option value="proceso">En Proceso</option>
                                    <option value="cancelada">Cancelada</option> 
                                    <option value="entregada">Entregada</option>                                   
                                </select> 

                                <InputLbl text="ID del Cliente" type="text"  className="mb-3" name="idCliente"/>

                                <InputLbl text="Nombre del Cliente" type="text"  className="mb-3" name="nombreCliente"/>                               

                                <InputLbl text="Fecha de la venta" type="date"  className="mb-3" name="fechaVenta"/>


                                <Row className="fechas">
                                    <Col>                            
                                        <InputLbl text="Fecha del Envío" type="date"  className="mb-3" name="fechaEnvio"/>
                                    </Col>

                                    <Col>                                    
                                        <InputLbl text="Fecha de Entrega" type="date"  className="mb-3" name="fechaEntrega"/>
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
    

    cargarVentas() {
        fetch(`${BASE_URL}${PATH_VENTAS}`)
            .then(result => result.json())
            .then(
                (result) => {
                    this.setState({
                        data: result
                    });
                },
                // Nota: es importante manejar errores aquí y no en 
                // un bloque catch() para que no interceptemos errores
                // de errores reales en los componentes.
                (error) => {
                    console.log(error);
                }
            )
    }

    crearVenta(ventaACrear) {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ventaACrear)
        };

        //console.log(requestOptions);
        //alert("Producto creado exitosamente");
        

        fetch(`${BASE_URL}${PATH_VENTAS}`, requestOptions)
            .then(result => result.json())
            .then(
                (result) => {
                    //this.cargarProducts();
                    console.log("result: ", result);
                    alert("Espera")
                    this.cargarVentas();
                },
                (error) => {
                    console.log(error);
                }
            );
    }
}

export default FormRegVentas
