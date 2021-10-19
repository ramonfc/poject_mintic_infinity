import React, { Component, useState, useRef, useCallback, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import ListProducts2 from '../../components/ListProducts/ListProducts2.js'
import {
    Container,
    Row,
    Col,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter
} from "reactstrap";

import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { getAuth } from "firebase/auth";


const BASE_URL = process.env.REACT_APP_BASE_URL;
//const BASE_URL = "http://localhost:3000/";
console.log(BASE_URL);
const PATH_SALES = 'sales';

const columnas = [
    {
        name: 'ID venta',
        selector: 'idVenta',
        sorteable: true
    },
    {
        name: 'Cliente',
        selector: 'nombreCliente',
        sorteable: true
    },
    {
        name: 'ID Cliente',
        selector: 'idCliente',
        sorteable: true
    },
    {
        name: 'ID vendedor',
        selector: 'idVendedor',
        sorteable: true
    },
    {
        name: 'Vendedor',
        selector: 'nombreVendedor',
        sorteable: true
    },
    {
        name: 'Valor Total',
        selector: 'valorTotal',
        sorteable: true
    },
    {
        name: 'Estado Venta',
        selector: 'estadoSale',
        sorteable: true
    },
    {
        name: 'Fecha venta',
        selector: 'fechaSale',
        sorteable: true
    },
    {
        name: 'Fecha envio',
        selector: 'fechaEnvio',
        sorteable: true
    },
    {
        name: 'Fecha entega',
        selector: 'fechaEntrega',
        sorteable: true
    }


]

const columnas_1 = [
    {
        name: 'ID del producto',
        selector: 'sku',
        sorteable: true
    },
    {
        name: 'Nombre',
        selector: 'nombre',
        sorteable: true
    },
    {
        name: 'Precio Unitario',
        selector: 'precio',
        sorteable: true
    },
    {
        name: 'Cantidad',
        selector: 'cantidad',
        sorteable: true
    }


]

const paginacionopciones = {
    rowsPerPageText: "Filas por pagina",
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
}



const ListSales2 = props => {

    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
    const [newVal, setNewVal] = React.useState(0);
    const [isLoaded, setIsLoaded] = React.useState(false);


  const [busqueda, setBusqueda] = useState();
  const [productosFiltrados, setProductosFiltrados] = useState();
  const [productos, setProductos] = useState();
  const [borrar, setBorrar] = useState(true);
  const [editar, setEditar] = useState(true);
  const [modalAgregar, setModalAgregar] = useState();
  const [modalActualizar, setModalActualizar] = useState();
  const [productosVenta, setProductosVenta] = useState();
  const [form, setForm] = useState({
    idVenta: "",
    nombreCliente: "",
    idCliente: "",
    idVendedor: "",
    nombreVendedor: "",
    valorTotal: 0.0,
    estadoSale: "",
    fechaSale: "",
    fechaEnvio: "",
    fechaEntrega: "",
    productos: []

  });

  
  useEffect(() => {
    cargarProductos();
  }, []);
  const dato = useRef();
  const id = useRef();
  const selectableRowsComponent = useRef();


  React.useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
}, [user, loading]);

React.useEffect(() => {
    if (!user) return history.replace("/");
    user.getIdToken(true).then(token => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        fetch(`${BASE_URL}${PATH_SALES}`, requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setProductos({
                        result,
                    });
                },
                (error) => {
                    setIsLoaded(true);
                    setErrors(error);
                }
            )
    });
}, [newVal]);


useEffect(() => {
    console.log("Cargando productos")
    cargarProductos();
}, []);


  const onChange = useCallback(() => {
    setBusqueda(event.target.value);
    filtrarproductos(event.target.value);
  });


  const filtrarproductos = useCallback(() => {
    try {
      var search = productos.filter(item => {
        return item.nombreCliente.includes(busqueda) || item.idVendedor.includes(busqueda) || item.idVenta.includes(busqueda);
      });
      setProductosFiltrados(search);
    } catch (error) {
      console.log(error);
    }
  });


  const handleChange = useCallback((e) => {
    const rows = e.selectedRows;
    console.log(rows.length);
    console.log(e.selectedRows);
    dato.current = e.selectedRows;

    if (rows.length === 0) {
      setBorrar(true);
      setEditar(true);
    }

    if (rows.length === 1) {
      setBorrar(false);
      setEditar(false);
    }

    if (rows.length > 1) {
      setEditar(true);
    } //this.setState.disabled;


    console.log(borrar);
    console.log(editar);
    console.log(dato.current);
  });


  const handleChange1 = useCallback((e) => {
    setForm({ ...form,
      [e.target.name]: e.target.value
    });
  });


  const handleDelete = useCallback(() => {
    console.log(dato);
    console.log(dato.length);

    if (window.confirm(`Está usted seguro de borrar:\r ${dato.map(r => r.nombreCliente)}?`)) {
      let msg = [];
      let arregloProductos = dato;
      arregloProductos.map(registro => {
        msg.push(registro.nombreCliente);
        eliminarProducto(registro._id);
      });
      cargarProductos();
      alert("Se eliminaron: " + msg.join(","));
      dato.current.splice(0, props.length);
    }
  });


  const eliminarProducto = useCallback(() => {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      } //body: JSON.stringify(idAEliminar)

    }; //console.log(requestOptions);
    //alert("Producto creado exitosamente");

    fetch(`${BASE_URL}${PATH_PRODUCTS}/${idAEliminar}`, requestOptions).then(result => result.json()).then(result => {
      console.log("result: ", result); //alert("Producto eliminado")
      //this.cargarProductos();
    }, error => {
      console.log(error);
    });
  });


  const mostrarModalActualizar = useCallback(() => {
    dato.current.map(registro => {
      setModalActualizar(true);
      setForm(registro);
      console.log("Registro:",registro);
      id.current = registro._id;
      console.log(id.current);
      console.log("Productos:",registro.productos)
      setProductosVenta(registro.productos);

    }); //this.setState({ modalActualizar: true, form: dato });
  });


  const cerrarModalActualizar = useCallback(() => {
    setModalActualizar(false);
  });


  const handleUpdate = useCallback((id, form) => {
    cerrarModalActualizar(); // Simple POST request with a JSON body using fetch

    user.getIdToken(true).then(token => {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(form)
        }; //console.log(requestOptions);
        //alert("Producto creado exitosamente");

        fetch(`${BASE_URL}${PATH_SALES}/${id}`, requestOptions)
        .then(result => result.json())
        .then(result => {
            console.log("result: ", result);
            cargarProductos();
            dato.current.splice(0, dato.current.length);
            alert("Producto Actualizado");
            setNewVal(newVal + 1);
        }, error => {
            console.log(error);
        });
    })
  });


  const cargarProductos = useCallback(async () => {

    user.getIdToken(true).then(async (token) => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        console.log("Aut",token);
    const response = await fetch(`${BASE_URL}${PATH_SALES}`, requestOptions);
    const result = await response.json();

    setProductos(result);
    setProductosFiltrados(result);

    
    })
    /* fetch(`${BASE_URL}${PATH_PRODUCTS}`)
      .then(result => result.json())
      .then(
        (result) => {
          this.setState({
            productos: result
          });
          console.log("result: ",result);
          console.log("productos en cargarProductos: ",this.state.productos)
         },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          console.log(error);
        }
      ) */
  });


  return <div className="table-responsive"><br />
                <div className="barrabusqueda">
                    <input type="text" placeholder="Buscar Venta" className="textfield" name="busqueda" value={busqueda} onChange={onChange} />

                </div>


                <DataTable 
                columns={columnas} 
                data={productosFiltrados} 
                pagination paginationComponentOptions={paginacionopciones} 
                fixedHeader 
                selectableRows 
                selectableRowsHighlight 
                selectableRowsComponent={selectableRowsComponent.current} 
                onSelectedRowsChange={handleChange.bind(this)} 
                fixedHeaderScrollHeight="600px" 
                noDataComponent="No se encontraron pedidos" />

                <button type="button" name="editar" className="btnUtil" disabled={editar} onClick={() => mostrarModalActualizar(dato.current)}>
                    Editar
                </button>

                <button type="button" name="borrar" className="btnUtil" disabled={borrar} onClick={() => handleDelete(dato.current)}>
                    Borrar
                </button>

                <Container>
                    <Row className="Margen">
                        <Col className="mt-3">

                            <Modal isOpen={modalActualizar}>
                                <ModalHeader>
                                    <div><h3>Actualizar venta {form.idVenta}</h3></div>
                                </ModalHeader>

                                <ModalBody>
                                    <FormGroup>
                                        <label>
                                            ID venta:
                                        </label>

                                        <input className="form-control" readOnly type="text" value={form.idVenta} />
                                    </FormGroup>

                                    <FormGroup>
                                        <label>
                                            Nombre cliente:
                                        </label>
                                        <input className="form-control" name="nombreCliente" type="text" onChange={handleChange1} value={form.nombreCliente} required />
                                    </FormGroup>

                                    <FormGroup>
                                        <label>
                                            ID cliente:
                                        </label>
                                        <input className="form-control" name="idVendedor" type="text" onChange={handleChange1} value={form.idCliente} />
                                    </FormGroup>

                                    <FormGroup>
                                        <label>
                                            ID vendedor:
                                        </label>
                                        <input className="form-control" name="valorTotal" type="text" onChange={handleChange1} value={form.idVendedor} />
                                    </FormGroup>

                                    <FormGroup>
                                        <label>
                                            Vendedor:
                                        </label>
                                        <input className="form-control" name="nombreVendedor" type="text" onChange={handleChange1} value={form.nombreVendedor} />
                                    </FormGroup>
                                    <FormGroup>
                                        <label>
                                            Valor Total venta:
                                        </label>
                                        <input className="form-control" name="idCliente" readOnly type="text" onChange={handleChange1} value={form.valorTotal} />
                                    </FormGroup>
                                    <FormGroup>
                                        <label>
                                            Estado de la venta:
                                        </label>
                                        <input className="form-control" name="idCliente" type="text" onChange={handleChange1} value={form.estadoSale} />
                                    </FormGroup>
                                    <FormGroup>
                                        <label>
                                            Fecha de venta:
                                        </label>
                                        <input className="form-control" name="idCliente" readOnly type="text" onChange={handleChange1} value={form.fechaSale} />
                                    </FormGroup>
                                    <FormGroup>
                                        <label>
                                            Fecha de envio:
                                        </label>
                                        <input className="form-control" name="idCliente" type="text" onChange={handleChange1} value={form.fechaEnvio} />
                                    </FormGroup>
                                    <FormGroup>
                                        <label>
                                            Fecha de entrega:
                                        </label>
                                        <input className="form-control" name="idCliente" type="text" onChange={handleChange1} value={form.fechaEntrega} />
                                    </FormGroup>
                                    <Col className="mt-5">
                                        <DataTable
                                        columns={columnas_1} 
                                        data={productosVenta} 
                                        pagination paginationComponentOptions={paginacionopciones} 
                                        fixedHeader 
                                        selectableRows
                                        selectableRowsSingle
                                        selectableRowsHighlight 
                                        selectableRowsComponent={selectableRowsComponent.current} 
                                        onSelectedRowsChange={handleChange.bind(this)} 
                                        fixedHeaderScrollHeight="600px" 
                                        noDataComponent="No se encontraron pedidos" />
                                        
                                        
                                    </Col>
                                </ModalBody>

                                <ModalFooter>
                                    <Button className="btnUtil1" onClick={() => handleUpdate(id.current, form)}>
                                        Actualizar
                                    </Button>
                                    <Button className="btnUtil1" onClick={() => cerrarModalActualizar()}>
                                        Cancelar
                                    </Button>
                                </ModalFooter>
                            </Modal>

                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row className="Margen">
                        <Col className="mt-3">

                            <Modal isOpen={modalAgregar}>
                                <ModalHeader>
                                    <div><h3>Agregar productos a venta {form.idVenta}</h3></div>
                                </ModalHeader>

                                <ModalBody>
                                    <FormGroup>
                                        <label>
                                            ID venta:
                                        </label>

                                        <input className="form-control" readOnly type="text" value={form.idVenta} />
                                    </FormGroup>

                                    <FormGroup>
                                        <label>
                                            Nombre cliente:
                                        </label>
                                        <input className="form-control" name="nombreCliente" type="text" onChange={handleChange1} value={form.nombreCliente} readOnly />
                                    </FormGroup>

                                    <Col className="mt-5">
                                        <ListProducts2 />
                                    </Col>
                                </ModalBody>

                                <ModalFooter>
                                    <Button className="btnUtil1" onClick={() => handleUpdate(id.current, form)}>
                                        Actualizar
                                    </Button>
                                    <Button className="btnUtil1" onClick={() => cerrarModalActualizar()}>
                                        Cancelar
                                    </Button>
                                </ModalFooter>
                            </Modal>

                        </Col>
                    </Row>
                </Container>

            </div>;
};

export default ListSales2;