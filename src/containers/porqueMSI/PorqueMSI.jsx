import React from "react";
import "./porqueMSI.css";
import { Feature } from "../../components";
import {
  RiUserAddLine,
  RiArrowGoBackFill,
  RiFundsLine,
  RiCreativeCommonsNcLine,
  RiBankCardLine,
  RiQuestionLine,
  RiRfidLine,
} from "react-icons/ri";

const PorqueMSI = () => {
  return (
    <div className="msinvs__porqueMSI section__margin" id="porque">
      <div className="msinvs__porqueMSI-heading">
        <h1 className="gradient__text">Por qué elegir MSInvs</h1>
      </div>
      <div className="msinvs__porqueMSI-container">
        <Feature
          icon={
            <RiFundsLine style={{ fill: "url(#blue-gradient)" }} size={34} />
          }
          title="Rentabilidad media del 20%"
          text="Conseguirás rentabilidades de entre un 15% hasta un 30% TAE."
        />
        <Feature
          icon={
            <RiCreativeCommonsNcLine
              style={{ fill: "url(#blue-gradient)" }}
              size={34}
            />
          }
          title="Sin comisiones"
          text="Únicamente retenemos el I.R.P.F. establecido legalmente."
        />
        <Feature
          icon={
            <RiArrowGoBackFill
              style={{ fill: "url(#blue-gradient)" }}
              size={34}
            />
          }
          title="Reembolso inmediato"
          text="Una vez cerrada la operación, dispondrás en tu saldo de la cantidad invertida y los beneficios obtenidos."
        />
        <Feature
          icon={
            <RiBankCardLine style={{ fill: "url(#blue-gradient)" }} size={34} />
          }
          title="Sin mínimo de inversión"
          text="Participarás con la cantidad que quieras, así podrás diversificar tus inversiones al máximo."
        />
        <Feature
          icon={
            <RiUserAddLine style={{ fill: "url(#blue-gradient)" }} size={34} />
          }
          title="Inversión profesional"
          text="Podrás acceder a operaciones hasta ahora solo accesibles a grandes inversores."
        />
        <Feature
          icon={
            <RiQuestionLine style={{ fill: "url(#blue-gradient)" }} size={34} />
          }
          title="Tú decides donde invertir"
          text="Decidirás en qué proyecto participar, con qué cantidad y sabiendo cuánto será el beneficio."
        />
        <Feature
          icon={
            <RiRfidLine style={{ fill: "url(#blue-gradient)" }} size={34} />
          }
          title="Completamente online"
          text="Podrás invertir y reservar participaciones desde cualquier sitio de forma sencilla y 100% online."
        />
      </div>
    </div>
  );
};

export default PorqueMSI;
