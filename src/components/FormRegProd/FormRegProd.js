import React, { Component } from "react";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import { Form, Row, Col, Label, Input, Button } from "reactstrap"; //Container
import "./FormRegProd.css";
import GridItem from "components/Grid/GridItem";
import InputLbl from "components/InputLbl/InputLbl";
import SelectCustom from "components/SelectCustom/SelectCustom";

const options = [
    { value: "disponible", label: "Disponible" },
    { value: "noDisponible", label: "No Disponible" }
];


const BASE_URL = process.env.REACT_APP_BASE_URL;
console.log(BASE_URL);
//const BASE_URL = "http://localhost:3000/";
const PATH_PRODUCTS = 'products';

export class FormRegProd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            modalActualizar: false,
            modalInsertar: false,
            form: {
            
                sku: "",
                nombreProducto: "",
                precioUnitario: 0.0,
                estadoProdInv: "",
                cantidadDisponible: 0,
                descripcionProducto: ""
            }
        };

    }

    /*    componentDidMount() {
           this.cargarProducts();
       } */

    insertar = () => {

        this.setState({
            form: {
               
                sku: "",
                nombreProducto: "",
                precioUnitario: 0.0,
                estadoProdInv: "",
                cantidadDisponible: 0,
                descripcionProducto: ""
            }
        });

        let productoACrear = { ...this.state.form };
        console.log(productoACrear);
        

        this.crearProducto(productoACrear);
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
            // <Container id="contenedor"> //No se está usando
            <Card>
                <GridItem>
                    <CardHeader color="info">

                        <h4>Registro de Productos</h4>

                    </CardHeader>
                    <br />

                    <Form >
                        <Row>
                            <Col xs="4">
                                {/*   <Label for="idProduct">ID del Producto</Label>
                                <Input className="mb-4" type="text" name="idProduct" id="idProduct" placeholder="" /> */}

                                <InputLbl text="ID del Producto" type="text" className="mb-4" name="sku" onChange={this.handleChange} value={this.state.form.sku} />

                                <InputLbl text="Nombre del Producto" type="text" className="mb-4" name="nombreProducto" onChange={this.handleChange} value={this.state.form.nombreProducto} />

                                <InputLbl text="Precio Unitario" type="text" className="mb-4" name="precioUnitario" onChange={this.handleChange} value={this.state.form.precioUnitario} />

                               {/*  <SelectCustom options={options} className="mb-4" text="Estado en Inventario" name="estadoProdInv"  handleChange={this. handleSelectChange} /> */}

                                 <Label  >Estado en Inventario</Label>
                                <select type="select" name="estadoProdInv" onChange={this.handleChange} value={this.state.form.estadoProdInv} className="mb-4">
                                <option value=""></option>
                                    <option value="disponible">Disponible</option>
                                    <option value="noDisponible">No Disponible</option>                                    
                                </select> 

                                <InputLbl text="Cantidad Disponible" type="text" className="mb-4" name="cantidadDisponible" onChange={this.handleChange} value={this.state.form.cantidadDisponible} />

                            </Col>

                            <Col xs="7">
                                {/* <Label for="descripcionProd">Descripción</Label>
                                <Input className="descripcion" type="textarea" name="descripcionProd" id="descripcionProd" /> */}

                                <InputLbl text="Descripción" type="textarea" className="descripcion" rows="15" name="descripcionProducto" onChange={this.handleChange} value={this.state.form.descripcionProducto} />

                            </Col>
                        </Row>

                        <Row className="mb-4">
                            <Col className="mt-3" sm={{ size: 'auto', offset: 0 }}>
                                <Button className="" type="submit" color="primary" id="crearProd" onClick={() => this.insertar()} >Crear</Button>
                            </Col>

                            <Col className="mt-3" sm={{ size: 'auto', offset: 0 }}>
                                <Button className="" type="reset" color="primary" id="crearProd">Limpiar</Button>
                            </Col>

                        </Row>

                    </Form>


                </GridItem>
            </Card>


        )
    }


    cargarProducts() {
        fetch(`${BASE_URL}${PATH_PRODUCTS}`)
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

    crearProducto(productoACrear) {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productoACrear)
        };

        //console.log(requestOptions);
        //alert("Producto creado exitosamente");
        

        fetch(`${BASE_URL}${PATH_PRODUCTS}`, requestOptions)
            .then(result => result.json())
            .then(
                (result) => {
                    //this.cargarProducts();
                    console.log("result: ", result);
                    alert("Espera")
                    this.cargarProducts();
                },
                (error) => {
                    console.log(error);
                }
            );
    }
}

export default FormRegProd;