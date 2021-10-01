import React from 'react';
import FormRegProd from '../FormRegProd/FormRegProd';
import './Productos.css';
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Input,
  Col,
  Row,
  Label
} from "reactstrap";

const data = [
  { id: 1, name: "Dulce de Guayaba", position: "Centro 2-10-1", status: "D", description: "Caja x 10", quantity: "1500" },
  { id: 2, name: "Dulce de Kiwi", position: "Centro 2-8-1", status: "D", description: "Caja x 20", quantity: "2500" },
  { id: 3, name: "Dulce de Arroz", position: "Centro 2-3-1", status: "D", description: "Caja x 20", quantity: "3000" },
  { id: 4, name: "Dulce de Cidra", position: "Centro 2-14-11", status: "I", description: "Garrafa x 10 lt", quantity: "0" },
  { id: 5, name: "Dulce de Maracuya", position: "Centro 2-10-17", status: "D", description: "Galon", quantity: "200" }
];

class User extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: data,
      modalActualizar: false,
      modalInsertar: false,
      form: {
        id: "",
        name: "",
        position: "",
        status: "",
        description: "",
        quantity: ""
      }
    };
  }

  mostrarModalActualizar = (dato) => {

    this.setState({ modalActualizar: true, form: dato });

  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({ modalInsertar: true });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    let contador = 0;
    let arregloUsuarios = this.state.data;
    arregloUsuarios.map((registro) => {
      if (dato.id === registro.id) {
        arregloUsuarios[contador].description = dato.description;
        arregloUsuarios[contador].quantity = dato.quantity;
        arregloUsuarios[contador].name = dato.name;
        arregloUsuarios[contador].position = dato.position;
        arregloUsuarios[contador].status = dato.status;
      }
      contador++;
    });

    this.setState({ data: arregloUsuarios, modalActualizar: false });
  };

  eliminar = (dato) => {
    let opcion = window.confirm("¿Está seguro que desea eliminar a " + dato.name + " " + dato.description + "?");
    if (opcion) {
      let contador = 0;
      let arregloUsuarios = this.state.data;
      arregloUsuarios.map((registro) => {
        if (dato.id === registro.id) {
          arregloUsuarios.splice(contador, 1);
        }
        contador++;
      });

      this.setState({ data: arregloUsuarios });
    }

  };

  buscar = (dato) => {

  }

  insertar = () => {
    let usuarioACrear = { ...this.state.form };
    usuarioACrear.id = this.state.data.length + 1;
    let arregloUsuarios = this.state.data;

    arregloUsuarios.push(usuarioACrear);

    this.setState({ data: arregloUsuarios, modalInsertar: false });

  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {

    return (
      <>
        <FormRegProd />
        <Container>
          <Row className = "Margen">
            <Col className="mt-3">
              <Input type="text" name="buscarProd" id="buscarProd" placeholder="Ingrese ID o nombre del" />
            </Col>

            <Col className="mt-3">
            <Button color="outline-primary" onClick={() => this.buscar()}>Buscar producto</Button>
            </Col>
          </Row>

          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>Id del producto</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Estado</th>
                <th>Ubicacion</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.name}</td>
                  <td>{dato.description}</td>
                  <td>{dato.quantity}</td>
                  <td>{dato.status}</td>
                  <td>{dato.position}</td>
                  <td>
                    <Button
                      color="link"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" / "}
                    <Button color="link" onClick={() => this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div><h3>Actualizar producto {this.state.form.name}</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id del producto:
              </label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Nombre:
              </label>
              <input
                className="form-control"
                name="name"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.name}
                required
              />
            </FormGroup>

            <FormGroup>
              <label>
                Descripcion:
              </label>
              <input
                className="form-control"
                name="description"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.description}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Cantidad:
              </label>
              <input
                className="form-control"
                name="quantity"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.quantity}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Estado:
              </label>
              <input
                className="form-control"
                name="status"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.status}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Ubicacion:
              </label>
              <input
                className="form-control"
                name="position"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.position}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Actualizar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>


        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div><h3>Agregar producto</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id:
              </label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length + 1}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Nombre:
              </label>
              <input
                className="form-control"
                name="name"
                type="text"
                onChange={this.handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <label>
                Descripción:
              </label>
              <input
                className="form-control"
                name="description"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Cantidad:
              </label>
              <input
                className="form-control"
                name="quantity"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Estado:
              </label>
              <input
                className="form-control"
                name="status"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Ubicación:
              </label>
              <input
                className="form-control"
                name="position"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Agregar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default User;

