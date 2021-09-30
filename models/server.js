const express = require('express');
const cors = require('cors');
const ejs = require('ejs');

class Server{
    constructor(){
        this.app = express();
        // set the view engine to ejs
        this.app.set('view engine', 'ejs');  
        this.port = process.env.PORT;
        this.routesPath = '/'


        //Middlewares:
        this.middlewares();

        //Routes
        this.routes();
    }


    middlewares(){

        //CORS:
        this.app.use(cors());

        //Directorio público:
        this.app.use(express.static('public'));

        // serve static content:
        //this.app.use(express.static(__dirname + '/public'))      
      
    }


    routes(){ 

        this.app.use(this.routesPath, require('../routes/myRoutes.routes'));
    }


   

   
    listen(){
        this.app.listen(this.port, ()=>{
            console.log("servidor en puerto ", this.port);
        });
    }
}

module.exports = Server;