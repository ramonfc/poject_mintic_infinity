const {Router} = require('express');
const { 
  getIndex, 
  getHome, 
  getHomeLoged, 
  getLogin, 
  getRegistroVenta, 
  getVerVentas, 
  getEditarEstadoVenta, 
  getLogedEnsayo, 
  getNoPage, 
  getLogout } = require('../controllers/myRoutes.controllers');

const router = Router();

router.get('/', getIndex);

router.get('/home', getHome);

router.get('/home-loged', getHomeLoged);

router.get('/login', getLogin); 

router.get('/registro_venta', getRegistroVenta);

router.get('/ver_ventas', getVerVentas); 

router.get('/editar_estado_ventas', getEditarEstadoVenta); 

router.get('/loged-ensayo', getLogedEnsayo);

router.get('/logout', getLogout);

router.get('*', getNoPage);




/* router.get('/loginM', (req, res) => {
  res.render(__dirname + '/views/login.ejs', {
    titulo: 'Infinity Login'
  });
})  */







module.exports = router;