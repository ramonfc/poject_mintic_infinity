/*eslint-disable*/
import React from "react";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// import Hidden from "@material-ui/core/Hidden";
// // core components
// import GridItem from "components/Grid/GridItem.js";
// import GridContainer from "components/Grid/GridContainer.js";
// import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardBody from "components/Card/CardBody.js";

// import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";

// const useStyles = makeStyles(styles);

export default function ComponenteLogin() {
  //const classes = useStyles();
  return (
    <>
    
    <div class="container">
      <div class="row text-center login-page">
         <div class="col-md-12 login-form">
            <form action="/admin/dashboard/" method="GET">
               <div class="row">
                  <div class="col-md-12 login-form-header">
                     <p class="login-form-font-header"><i>Login</i>
                     </p>
                  </div>
               </div>
               <div class="row">
                  <div class="col-md-10 login-form-row">
                     <label for="name">Username:</label>
                     <input name="username" type="text" required />
                  </div>
               </div>
               <div class="row">
                  <div class="col-md-10 login-form-row">
                     <label for="password">Password:</label>&nbsp;
                     <input name="password" type="password" required />
                  </div>
               </div>
               <div class="row">
                  <div class="col-md-12 login-form-row">
                     <button class="btn btn-info">Click to login</button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   </div>
    </>
    
  );
}
