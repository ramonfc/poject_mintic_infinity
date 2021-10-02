import React from "react";
import './Header.css';
import logo from '../../../src/LogoMini.png'

// get our fontawesome imports
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    
    
    <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="main-nav">
            
              <a href="#" class="logo">
                {/* style={{ width:'15%', height:'auto', float: 'left', lineHeight:'100px'}} */}
                <img src={logo}  />
              </a>
             
              <ul class="nav">
                <li class="scroll-to-section"><a href="#" class="active">Home</a></li>
                <li class="scroll-to-section"><a href="#">Productos</a></li>
                <li class="scroll-to-section"><a href="#">Ventas</a></li>
                <li class="scroll-to-section"><a href="#">Usuarios</a></li>
                <li class="scroll-to-section"><a href="#">Noticias</a></li>
                <li class="scroll-to-section"><a href="#">Mi Perfil</a></li> 
                <li class="scroll-to-section"><div><a href="#">Cerrar Sesion</a></div></li> 
              </ul>        
              <a class='menu-trigger'>
                  <span>Menu</span>
              </a>
             
            </nav>
          </div>
        </div>
      </div>
    </header>
   

  );
}

export default Header;
