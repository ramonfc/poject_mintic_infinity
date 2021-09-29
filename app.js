require('dotenv').config();
const express = require('express');
const app = express();
const ejs = require('ejs');


const port = process.env.PORT;


// set the view engine to ejs
app.set('view engine', 'ejs');

// serve static content:
app.use(express.static(__dirname + '/public'))


app.get('/', (req, res) => {
  res.render('home', {
    titulo: 'Infinity'
  });
})

app.get('/home', (req, res) => {
  res.render('home', {
    titulo: 'Infinity'
  });
})

app.get('/home-loged', (req, res) => {
  res.render('homeLoged', {
    titulo: 'Infinity'
  });
})

app.get('/login', (req, res) => {
  res.render('login', {
    titulo: 'Infinity Login'
  });
}) 

app.get('/loginM', (req, res) => {
  res.render(__dirname + '/views/login.ejs', {
    titulo: 'Infinity Login'
  });
}) 


app.get('/registro_venta', (req, res) => {
  res.render('registrarVenta', {
    titulo: 'Registro de Venta'
  });
}) 


app.get('/ver_ventas', (req, res) => {
  res.render('verVentas', {
    titulo: 'Ventas'
  });
}) 

app.get('/editar_estado_ventas', (req, res) => {
  res.render('editarEstadoVentas', {
    titulo: 'Ventas'
  });
}) 


app.get('/loged-ensayo', (req, res) => {
  res.render('homeLoged', {
    titulo: 'Ventas'
  });
}) 


app.get('/logout', (req, res) => {
  res.render('home', {
    titulo: 'Home'
  });
}) 

app.get('/hello_world', (req, res) => {
    res.send('Hello World in its own route')
  })


  
  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
  })



 
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })