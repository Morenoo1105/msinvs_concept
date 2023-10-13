import React from "react";
import "./noPFP.css";
import possibilityImage from "../../assets/question.png";

const NoPFP = () => {
  return (
    <div className="msinvs__nopfp section__padding" id="possibility">
      <div className="msinvs__nopfp-image">
        <img src={possibilityImage} alt="possibilityImage" />
      </div>
      <div className="msinvs__nopfp-content">
        <h1 className="gradient__text">Qué NO somos</h1>
        <p>
          No somos una Plataforma de Financiación Participativa, empresa de
          servicio de inversión, ni de entidad de crédito y no está adherida a
          ningún fondo de garantía de inversiones o fondo de garantía de
          depósitos y los proyectos no son objeto de autorización ni de
          supervisión por la Comisión Nacional del Mercado de Valores ni por el
          Banco de España.
        </p>
      </div>
    </div>
  );
};

export default NoPFP;
