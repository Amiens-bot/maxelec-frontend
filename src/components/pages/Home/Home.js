import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import BackgroundImage from "../../../images/19089.jpg";

function Home() {
  return (
    <>
      <div
        className="text-center"
        style={{
          backgroundImage: "url(" + BackgroundImage + ")",
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-danger homeTitulo" style={{ fontWeight: "bold" }}>
          MAXELEC
        </h1>
        <span
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          <b>SISTEMA DE GESTION POSTVENTA</b>
        </span>

        <div className="buttonsHomediv">
          <div className="form-group">
            <Button as={Link} to="/tecnico" className="btn btn-danger btn-lg">
              TECNICO
            </Button>
          </div>

          <div className="form-group">
            <Button as={Link} to="/empleado" className="btn btn-danger btn-lg">
              EMPLEADO
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
