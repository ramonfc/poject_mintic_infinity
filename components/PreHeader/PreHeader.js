import React from "react";
import './PreHeader.css';

// get our fontawesome imports
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PreHeader() {
  return (
    

  <div class="pre-header">
    
    <div class="container">

      <div class="row">
        <div class="col-lg-8 col-sm-8 col-7">
          <ul class="info">
            <li><FontAwesomeIcon icon={faWrench} /> Updated 1/10/2021</li>
            <li><FontAwesomeIcon icon={faCodeBranch} /> V 1.0.0</li>
          </ul>
        </div>
        <div class="col-lg-4 col-sm-4 col-5">
          <ul class="social-media">
            <li><a href="#"><FontAwesomeIcon icon={faSignInAlt} /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  );
}

export default PreHeader;
