/*Login View Infinity*/
/*Importamos react, estilos de la vista y el logo*/
import React from "react";
import './LoginView.css'
import logo from '../../../src/assets/img/logoinfinity.png'

// // @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import Hidden from "@material-ui/core/Hidden";

// // core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
const useStyles = makeStyles(styles);
// const logostyle = {
//    marginTop: '5%',
//    width: '30%',
//    heigth: 'auto',
//    display: 'block',
//    marginLeft: 'auto',
//    marginRight: 'auto'
// }

export default function ComponenteLogin() {
   const classes = useStyles();
   return (

      <GridContainer justify="center">
         <GridItem xs={12} sm={12} md={8}>
            <Card>
               <CardHeader color="info">
                  <h4 className={classes.cardTitleWhite}>
                     Infinity: Sales Manager
                  </h4>
                  <p className={classes.cardCategoryWhite}>
                     MisionTIC 2022
                  </p>
               </CardHeader>
               <CardBody>
                  <img className='img-login-logo' src={logo} /> 
                  <div className="container">
                     <div className="row text-center login-page">
                        <div className="col-md-12 login-form">
                           <form action="/user/dashboard/" method="GET">
                              <div className="row">
                                 <div className="col-md-12 login-form-header">
                                    <p className="login-form-font-header">
                                    </p>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="login-field">
                                    <input name="username" type="text" placeholder='username' required />
                                 </div>
                              </div>

                              <br/>
                              <div className="row">
                                 <div className="login-field">
                                    <input name="password" type="password" placeholder='password' required />
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-md-12 login-form-row">
                                    <button className="btn btn-info">Iniciar Sesión</button>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </CardBody>
            </Card>
         </GridItem>
      </GridContainer>


   );
}
