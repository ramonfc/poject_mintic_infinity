import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import { Checkbox } from '@material-ui/core';
import { CheckBox } from '@material-ui/icons';

/* const data = [
    { id: 1, name: "Dulce de Guayaba", position: "Centro 2-10-1", status: "D", description: "Caja x 10", quantity: "1500" },
    { id: 2, name: "Dulce de Kiwi", position: "Centro 2-8-1", status: "D", description: "Caja x 20", quantity: "2500" },
    { id: 3, name: "Dulce de Arroz", position: "Centro 2-3-1", status: "D", description: "Caja x 20", quantity: "3000" },
    { id: 4, name: "Dulce de Cidra", position: "Centro 2-14-11", status: "I", description: "Garrafa x 10 lt", quantity: "0" },
    { id: 5, name: "Dulce de Maracuya", position: "Centro 2-10-17", status: "D", description: "Galon", quantity: "200" },
    { id: 6, name: "Dulce de Guayaba", position: "Centro 2-10-1", status: "D", description: "Caja x 10", quantity: "1500" },
    { id: 7, name: "Dulce de Kiwi", position: "Centro 2-8-1", status: "D", description: "Caja x 20", quantity: "2500" },
    { id: 8, name: "Dulce de Arroz", position: "Centro 2-3-1", status: "D", description: "Caja x 20", quantity: "3000" },
    { id: 9, name: "Dulce de Cidra", position: "Centro 2-14-11", status: "I", description: "Garrafa x 10 lt", quantity: "0" },
    { id: 10, name: "Dulce de Maracuya", position: "Centro 2-10-17", status: "D", description: "Galon", quantity: "200" },
    { id: 11, name: "Dulce de Guayaba", position: "Centro 2-10-1", status: "D", description: "Caja x 10", quantity: "1500" },
    { id: 12, name: "Dulce de Kiwi", position: "Centro 2-8-1", status: "D", description: "Caja x 20", quantity: "2500" },
    { id: 13, name: "Dulce de Arroz", position: "Centro 2-3-1", status: "D", description: "Caja x 20", quantity: "3000" },
    { id: 14, name: "Dulce de Cidra", position: "Centro 2-14-11", status: "I", description: "Garrafa x 10 lt", quantity: "0" },
    { id: 15, name: "Dulce de Maracuya", position: "Centro 2-10-17", status: "D", description: "Galon", quantity: "200" },
    { id: 16, name: "Dulce de Guayaba", position: "Centro 2-10-1", status: "D", description: "Caja x 10", quantity: "1500" },
    { id: 17, name: "Dulce de Kiwi", position: "Centro 2-8-1", status: "D", description: "Caja x 20", quantity: "2500" },
    { id: 18, name: "Dulce de Arroz", position: "Centro 2-3-1", status: "D", description: "Caja x 20", quantity: "3000" },
    { id: 19, name: "Dulce de Cidra", position: "Centro 2-14-11", status: "I", description: "Garrafa x 10 lt", quantity: "0" },
    { id: 20, name: "Dulce de Maracuya", position: "Centro 2-10-17", status: "D", description: "Galon", quantity: "200" }

];  */

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



class ListProducts1 extends Component {

    constructor(props){
       super(props);
       
       this.state = {
            busqueda:'',
            productos:[],
            productosFiltrados: [],
            editar: 'false',
            borrar: 'false',
            data:[]         
        };
    }

    componentDidMount() {
        this.cargarProductos();
    } 

    onChange = event => {
        this.setState({busqueda: event.target.value});
        this.filtrarproductos(event.target.value);
    }

    filtrarproductos = (busqueda) => {
        try{
            var search = this.state.productos.filter(item => {
                return item.nombreProducto.includes(busqueda) ||
                item.descripcionProducto.includes(busqueda) ||
                    item.sku.includes(busqueda);
            });
            this.setState({productosFiltrados: search});
        }catch(error){
            console.log(error);
        }
    }

    

    handleChange=e=> {
        this.setState({editar: this.selectableRowsComponent});
        this.setState.disabled;
        this.setState({borrar: this.selectableRowsComponent});
        this.setState.disabled;
    }

    async cargarProductos() {
        const response = await fetch(`${BASE_URL}${PATH_PRODUCTS}`);
        const result = await response.json();
        this.setState({
            productos: result,
            productosFiltrados: result,
        });

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
      }

    render() {

        return (
            <div className="table-responsive"><br/>
                <div className="barrabusqueda">
                    <input
                        type="text"
                        placeholder="Buscar Producto"
                        className="textfield"
                        name="busqueda"
                        value={this.state.busqueda}
                        onChange={this.onChange}
                    />
                    
                </div>


                <DataTable
                    columns={columnas}
                    data={this.state.productosFiltrados}
                    pagination
                    paginationComponentOptions={paginacionopciones}
                    fixedHeader
                    selectableRows
                    selectableRowsComponent={this.selectableRowsComponent}
                    onSelectedRowsChange={this.handleChange}
                    fixedHeaderScrollHeight="600px"
                    noDataComponent="No se encontraron productos"
                />

                    <button type="button" name="editar" className="btnUtil" disabled={this.state.editar} /*onClick={onClear}*/ >
                       Editar
                    </button>

                    <button type="button" name="borrar" className="btnUtil" disabled={this.state.borrar} /*onClick={onClear}*/ >
                       Borrar
                    </button>

            </div>
        );
    }
}



export default ListProducts1;