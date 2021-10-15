import React, { Component, useState, useRef, useCallback, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';

import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { getAuth } from "firebase/auth";

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter
} from "reactstrap";


const BASE_URL = process.env.REACT_APP_BASE_URL;
//const BASE_URL = "http://localhost:3000/";
console.log(BASE_URL);
const PATH_PRODUCTS = 'products';

const columnas = [
    {
        name: 'ID del producto',
        selector: 'sku',
        sorteable: true
    },
    {
        name: 'Nombre',
        selector: 'nombreProducto',
        sorteable: true
    },
    {
        name: 'Precio Unitario',
        selector: 'precioUnitario',
        sorteable: true
    },
    {
        name: 'Descripción',
        selector: 'descripcionProducto',
        sorteable: true
    },
    {
        name: 'Estado',
        selector: 'estadoProdInv',
        sorteable: true
    },
    {
        name: 'Cantidad',
        selector: 'cantidadDisponible',
        sorteable: true
    }


]

const paginacionopciones = {
    rowsPerPageText: "Filas por pagina",
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
}



const ListProducts1 = props => {

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
    const [form, setForm] = useState({
        sku: "",
        nombreProducto: "",
        precioUnitario: 0,
        estadoProdInv: "",
        descripcionProducto: "",
        cantidadDisponible: 0
    });
    const [modalActualizar, setModalActualizar] = useState();

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
            fetch(`${BASE_URL}${PATH_PRODUCTS}`, requestOptions)
                .then(res => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setProductos({
                            ...productos,
                            data: result
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

    const dato = useRef();
    const id = useRef();
    const selectableRowsComponent = useRef();
    const selectedRows = useRef();

    const onChange = useCallback((event) => {
        setBusqueda(event.target.value);
        filtrarproductos(event.target.value);
    });

    const filtrarproductos = useCallback(() => {
        try {
            var search = productos.filter(item => {
                return item.nombreProducto.includes(busqueda) || item.descripcionProducto.includes(busqueda) || item.sku.includes(busqueda);
            });
            setProductosFiltrados(search);
        } catch (error) {
            console.log(error);
        }
    });
    const handleChange = useCallback((e) => {
        console.log("SR",e.selectedRows);
        const rows = e.selectedRows;
        console.log("Rows",rows.length);
        console.log(e.selectedRows);
        dato.current = e.selectedRows;
        console.log("dato",dato.current.length);

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
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        console.log("form:",form);
    });
    const handleDelete = useCallback(() => {
        console.log(dato);
        console.log(dato.length);
        console.log("dc",dato.current);

        if (window.confirm(`Está usted seguro de borrar:\r ${dato.current.map(r => r.nombreProducto)}?`)) {
            let msg = [];
            let arregloProductos = dato.current;
            console.log("AP",arregloProductos);
            arregloProductos.map(registro => {
                msg.push(registro.nombreProducto);
                eliminarProducto(registro._id);
            });
            cargarProductos();
            alert("Se eliminaron: " + msg.join(","));
            dato.current.splice(0, dato.current.length);
        }
    });
    const eliminarProducto = useCallback((idAEliminar) => {
        // Simple POST request with a JSON body using fetch
        user.getIdToken(true).then(token => {
            const requestOptions = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                
            }; //console.log(requestOptions);
        //alert("Producto creado exitosamente");

        fetch(`${BASE_URL}${PATH_PRODUCTS}/${idAEliminar}`, requestOptions).then(result => result.json()).then(result => {
            console.log("result: ", result); //alert("Producto eliminado")
            //this.cargarProductos();
        }, error => {
            console.log(error);
        });
    })
    });

    const mostrarModalActualizar = useCallback(() => {
        dato.current.map(registro => {
            setModalActualizar(true);
            setForm(registro);
            id.current = registro._id;
            console.log(id.current);
        }); //this.setState({ modalActualizar: true, form: dato });
    });
    const cerrarModalActualizar = useCallback(() => {
        setModalActualizar(false);
    });
    const handleUpdate = useCallback((id, form) => {
        console.log("body:",dato.current);
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

        fetch(`${BASE_URL}${PATH_PRODUCTS}/${id}`, requestOptions)
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
    const cargarProductos = async () => {

        user.getIdToken(true).then(async (token) => {
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };

        const response = await fetch(`${BASE_URL}${PATH_PRODUCTS}`, requestOptions);
        const result = await response.json();
        console.log("R",result);
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
    };
    return <div className="table-responsive"><br />
        <div className="barrabusqueda">
            <input type="text" placeholder="Buscar Producto" className="textfield" name="busqueda" value={busqueda} onChange={onChange} />

        </div>


        <DataTable 
        columns={columnas} 
        data={productosFiltrados} 
        pagination paginationComponentOptions={paginacionopciones} 
        fixedHeader 
        selectableRows
        selectableRowsHighlight 
        selectableRowsComponent={selectableRowsComponent.current} 
        onSelectedRowsChange={handleChange} 
        fixedHeaderScrollHeight="600px" 
        noDataComponent="No se encontraron productos" />

        <button type="button" name="editar" className="btnUtil" disabled={editar} onClick={() => mostrarModalActualizar(dato.current)}>
            Editar
        </button>

        <button type="button" name="borrar" className="btnUtil" disabled={borrar} onClick={() => handleDelete(dato.current)}>
            Borrar
        </button>

        <div>

            <Modal isOpen={modalActualizar}>
                <ModalHeader>
                    <div><h3>Actualizar producto {form.nombreProducto}</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label>
                            Id del producto:
                        </label>

                        <input className="form-control" readOnly type="text" value={form.sku} />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Nombre del producto:
                        </label>
                        <input className="form-control" name="nombreProducto" type="text" onChange={handleChange1} value={form.nombreProducto} required />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Descripcion:
                        </label>
                        <input className="form-control" name="descripcionProducto" type="text" onChange={handleChange1} value={form.descripcionProducto} />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Cantidad:
                        </label>
                        <input className="form-control" name="cantidadDisponible" type="text" onChange={handleChange1} value={form.cantidadDisponible} />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Estado:
                        </label>
                        <input className="form-control" name="estadoProdInv" type="text" onChange={handleChange1} value={form.estadoProdInv} />
                    </FormGroup>
                    <FormGroup>
                        <label>
                            Precio Unitario:
                        </label>
                        <input className="form-control" name="precioUnitario" type="text" onChange={handleChange1} value={form.precioUnitario} />
                    </FormGroup>
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

        </div>

    </div>;
};

export default ListProducts1;