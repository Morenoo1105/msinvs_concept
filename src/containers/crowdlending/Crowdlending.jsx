import React from "react";
import "./crowdlending.css";
import crowdlendingImage from "../../assets/casa.png";

const Crowdlending = () => {
  return (
    <div className="msinvs__crowdlending section__padding" id="quienes">
      <div className="msinvs__crowdlending-image">
        <img src={crowdlendingImage} alt="crowdlendingImage" />
      </div>
      <div className="msinvs__crowdlending-content">
        <h1 className="gradient__text">
          MsInvs PFP S.L. está basada en el modelo de crowdlending
        </h1>
        <p>
          Solicitamos financiación a los inversores a cambio del pago de un
          beneficio, para poder completar operaciones de compra de inmuebles o
          de deuda sobre los mismos para obtener plusvalías con su venta, todo
          ello sin intermediarios ni terceras partes, de una manera simple,
          transparente y rápida, proporcionando siempre la mayor rentabilidad
          posible a los inversores.
        </p>
      </div>
    </div>
  );
};

export default Crowdlending;
