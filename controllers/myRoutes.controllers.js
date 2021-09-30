const {response} = require('express');



  const getIndex = (req, res = response) => {
    res.render('home', {
      titulo: 'Infinity'
    });
  }

 const getHome = (req, res = response) => {
    res.render('home', {
      titulo: 'Infinity'
    });
  }

 const getHomeLoged = (req, res = response) => {
    res.render('homeLoged', {
      titulo: 'Infinity'
    });
  }

const getLogin = (req, res = response) => {
  res.render('login', {
    titulo: 'Infinity Login'
  });
}


const getRegistroVenta = (req, res = response) => {
  res.render('registrarVenta', {
    titulo: 'Registro de Venta'
  });
}


const getVerVentas = (req, res = response) => {
  res.render('verVentas', {
    titulo: 'Ventas'
  });
}


const getEditarEstadoVenta = (req, res = response) => {
  res.render('editarEstadoVentas', {
    titulo: 'Ventas'
  });
}


const getLogedEnsayo = (req, res= response) => {
  res.render('homeLoged', {
    titulo: 'Ventas'
  });
}

const getNoPage = (req, res = response) => {
  res.send('Recurso no encontrado')
}


const getLogout = (req, res = response) => {
  res.render('home', {
    titulo: 'Home'
  });
}

  module.exports = {
    getIndex,
    getHome,
    getHomeLoged,
    getLogin,
    getRegistroVenta,
    getVerVentas,
    getEditarEstadoVenta,
    getLogedEnsayo,
    getNoPage,
    getLogout
  }