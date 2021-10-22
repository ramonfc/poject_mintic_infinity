import React, { Component, useState, useRef, useCallback, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';

import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { getAuth } from "firebase/auth";

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


const BASE_URL = process.env.REACT_APP_BASE_URL;
//const BASE_URL = "http://localhost:3000/";
console.log(BASE_URL);
const PATH_CUSTOMERS = 'users';

const columnas = [
    {
        name: 'Nombres',
        selector: 'name',
        sorteable: true
    },
    {
        name: 'Apellidos',
        selector: 'lastName',
        sorteable: true
    },
    {
        name: 'Tipo de ID',
        selector: 'docType',
        sorteable: true,
        width: '8%'
    },
    {
        name: 'No de documento',
        selector: 'documentId',
        sorteable: true
    },
    {
        name: 'Usuario',
        selector: 'username',
        sorteable: true
    },
    {
        name: 'Rol',
        selector: 'rol',
        sorteable: true
    },
    {
        name: 'Teléfono',
        selector: 'telephone',
        sorteable: true
    },
    {
        name: 'Dirección',
        selector: 'address',
        sorteable: true
    },
    {
        name: 'Estado',
        selector: 'status',
        sorteable: true
    }


]

const paginacionopciones = {
    rowsPerPageText: "Filas por pagina",
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
}



const ListUsers1 = props => {

    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
    const [newVal, setNewVal] = React.useState(0);
    const [isLoaded, setIsLoaded] = React.useState(false);

    const [busqueda, setBusqueda] = useState();
    const [usuariosFiltrados, setUsuariosFiltrados] = useState();
    const [usuarios, setUsuarios] = useState();
    const [borrar, setBorrar] = useState(true);
    const [editar, setEditar] = useState(true);
    const [form, setForm] = useState({
        name: "",
        lastName: "",
        docType: "",
        documentId: "",
        userName: "",
        rol: "",
        telephone: "",
        address: "",
        status: ""
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
            fetch(`${BASE_URL}${PATH_CUSTOMERS}`, requestOptions)
                .then(res => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setUsuarios({
                            ...usuarios,
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
        console.log("Cargando usuarios")
        cargarUsuarios();
    }, []);

    const dato = useRef();
    const id = useRef();
    const selectableRowsComponent = useRef();
    const selectedRows = useRef();
    

    const onChange = useCallback((event) => {
        setBusqueda(event.target.value);
        const PalabraBuscada = (event.target.value).toLowerCase().toString();
        filtrarusuarios(PalabraBuscada);
    });

    const filtrarusuarios = useCallback((e) => {
       
        console.log("Usuarios",usuarios);
        console.log("Eventos",event.target.value);
        try {
            let search = usuarios.filter(item => {
                console.log("Item1:",item.name);
                console.log("Item2:",item.username);
                console.log("Item3:",item.documentId);
                console.log("Busqueda",busqueda);
                let test=(item.name + item.username + item.documentId).toLowerCase().toString();
                return test.includes(e);
            });
            console.log("Coincidencia",search);
            setUsuariosFiltrados(search);
        } catch (error) {
            console.log(error);
        }
    });
    const handleChange = useCallback((e) => {
        console.log("SR", e.selectedRows);
        const rows = e.selectedRows;
        console.log("Rows", rows.length);
        console.log(e.selectedRows);
        dato.current = e.selectedRows;
        console.log("dato", dato.current.length);

        if (rows.length === 0) {
            setBorrar(true);
            setEditar(true);
            dato.current.splice(0, dato.current.length);
        }

        if (rows.length === 1) {
            setBorrar(false);
            setEditar(false);
        }

        if (rows.length > 1) {
            setEditar(true);
            setBorrar(false);
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
        console.log("form:", form);
    });
    const handleDelete = useCallback(() => {
        console.log(dato);
        console.log(dato.length);
        console.log("dc", dato.current);

        if (window.confirm(`Está usted seguro de borrar:\r ${dato.current.map(r => r.username)}?`)) {
            let msg = [];
            let arregloUsuarios = dato.current;
            console.log("AP", arregloUsuarios);
            arregloUsuarios.map(registro => {
                msg.push(registro.username);
                eliminarUsuario(registro._id);
            });
            cargarUsuarios();
            alert("Se eliminó a: " + msg.join(","));
            dato.current.splice(0, dato.current.length);
        }
    });
    const eliminarUsuario = useCallback((idAEliminar) => {
        // Simple POST request with a JSON body using fetch
        user.getIdToken(true).then(token => {
            const requestOptions = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },

            }; //console.log(requestOptions);
            //alert("Usuario creado exitosamente");

            fetch(`${BASE_URL}${PATH_CUSTOMERS}/${idAEliminar}`, requestOptions).then(result => result.json()).then(result => {
                console.log("result: ", result); //alert("Usuario eliminado")
                //this.cargarUsuarios();
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
        console.log("body:", dato.current);
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
            //alert("Usuario creado exitosamente");

            fetch(`${BASE_URL}${PATH_CUSTOMERS}/${id}`, requestOptions)
                .then(result => result.json())
                .then(result => {
                    console.log("result: ", result);
                    cargarUsuarios();
                    dato.current.splice(0, dato.current.length);
                    alert("Usuario Actualizado");
                    setNewVal(newVal + 1);
                }, error => {
                    console.log(error);
                });
        })
    });
    const cargarUsuarios = async () => {

        user.getIdToken(true).then(async (token) => {
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await fetch(`${BASE_URL}${PATH_CUSTOMERS}`, requestOptions);
            const result = await response.json();
            console.log("R", result);
            setUsuarios(result);
            setUsuariosFiltrados(result);
        })
        /* fetch(`${BASE_URL}${PATH_CUSTOMERS}`)
          .then(result => result.json())
          .then(
            (result) => {
              this.setState({
                usuarios: result
              });
              console.log("result: ",result);
              console.log("usuarios en cargarUsuarios: ",this.state.usuarios)
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
            <input
                type="text"
                placeholder="Buscar Usuario"
                className="textfield"
                name="busqueda"
                value={busqueda}
                onChange={onChange} />  

        </div>


        <DataTable
            columns={columnas}
            data={usuariosFiltrados}
            pagination paginationComponentOptions={paginacionopciones}
            fixedHeader
            selectableRows
            selectableRowsHighlight
            selectableRowsComponent={selectableRowsComponent.current}
            onSelectedRowsChange={handleChange}
            fixedHeaderScrollHeight="600px"
            noDataComponent="No se encontraron usuarios" />

        <button type="button" name="editar" className="btnUtil" disabled={editar} onClick={() => mostrarModalActualizar(dato.current)}>
            Editar
        </button>

        <button type="button" name="borrar" className="btnUtil" disabled={borrar} onClick={() => handleDelete(dato.current)}>
            Borrar
        </button>

        <div>

            <Modal isOpen={modalActualizar}>
                <ModalHeader>
                    <div><h3>Actualizar usuario {form.username}</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label>
                            Nombre de usuario:
                        </label>

                        <input className="form-control" readOnly type="text" value={form.username} />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Nombre(s):
                        </label>

                        <input className="form-control" readOnly type="text" value={form.name} />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Apellido(s):
                        </label>

                        <input className="form-control" readOnly type="text" value={form.lastName} />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Rol:
                        </label>
                        <input className="form-control" name="rol" type="text" onChange={handleChange1} value={form.rol} required />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Telefono:
                        </label>
                        <input className="form-control" name="telephone" type="text" onChange={handleChange1} value={form.telephone} />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Dirección:
                        </label>
                        <input className="form-control" name="address" type="text" onChange={handleChange1} value={form.address} />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Estado:
                        </label>
                        <input className="form-control" name="status" type="text" onChange={handleChange1} value={form.status} />
                    </FormGroup>

                </ModalBody>

                <Row>
                    <Col>

                        <ModalFooter>
                            <Button className="btnUtil1" onClick={() => handleUpdate(id.current, form)}>
                                Actualizar
                            </Button>
                            <Button className="btnUtil1" onClick={() => cerrarModalActualizar()}>
                                Cancelar
                            </Button>
                        </ModalFooter>

                    </Col>
                </Row>
            </Modal>

        </div>

    </div>;
};

export default ListUsers1;