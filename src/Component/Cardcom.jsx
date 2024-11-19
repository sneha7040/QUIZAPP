import React, { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cardcom.css"; 

export default function Cardc({ img, alttitle, heading, send }) {

  return (
    <Button component={Link} to={send}  sx={{  boxShadow: "0px 8px 15px rgba(227, 37, 252, 0.7)",borderRadius:"15px", padding:{xs:"3px 25px",md:"9px 9px",lg:"10px 10px"}}}>
      
      <div className="card-container"  >
        <div className="card">
          <div className="card-content">
            <img src={img} alt={alttitle} className="card-gif" />
            <h2>{heading}</h2>
            
          </div>
        </div>
      </div>
    </Button>
  );
}
