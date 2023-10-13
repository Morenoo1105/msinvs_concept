import React from "react";
import "./comoFunciona.css";
import { Feature } from "../../components";
import {
  RiArrowUpDoubleLine,
  RiDownload2Fill,
  RiHandCoinLine,
  RiSearch2Line,
  RiUserSearchLine,
} from "react-icons/ri";

const comoFuncionaData = [
  {
    title: "Descarga la aplicación",
    text: "Primero tienes que descargar e instalar nuestra app, es importante que autorices las notificaciones para estar a día de la situación en que se encuentran tus inversiones.",
    icon: <RiDownload2Fill style={{ fill: "url(#blue-gradient)" }} size={34} />,
  },
  {
    title: "Elige tu inversión",
    text: "Escoge entre las operaciones disponibles, introduce la cantidad que quieras invertir y quedará reservada automáticamente.",
    icon: <RiSearch2Line style={{ fill: "url(#blue-gradient)" }} size={34} />,
  },
  {
    title: "Transfiere el dinero",
    text: "Tienes 3 días para transferir el importe invertido a la cuenta que figura en la aplicación, que no tiene pasarela de pago. Solamente aceptamos transferencias bancarias para que los movimientos se realicen con total seguridad.",
    icon: <RiHandCoinLine style={{ fill: "url(#blue-gradient)" }} size={34} />,
  },
  {
    title: "Revisión manual",
    text: "Cada movimiento es revisado cuidadosamente por una persona para asegurar que todo está en orden.",
    icon: (
      <RiUserSearchLine style={{ fill: "url(#blue-gradient)" }} size={34} />
    ),
  },
  {
    title: "Mira como crece",
    text: "Nosotros nos encargamos del resto y te iremos informando puntualmente del estado de las operaciones.",
    icon: (
      <RiArrowUpDoubleLine style={{ fill: "url(#blue-gradient)" }} size={34} />
    ),
  },
];

const ComoFunciona = () => {
  return (
    <div className="msinvs__comofunciona section__padding" id="como">
      <div className="msinvs__comofunciona-heading">
        <h1 className="gradient__text">Cómo funciona nuestra app</h1>
      </div>
      <div className="msinvs__comofunciona-container">
        {comoFuncionaData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            icon={item.icon}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default ComoFunciona;
