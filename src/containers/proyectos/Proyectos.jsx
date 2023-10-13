import React from "react";
import "./proyectos.css";
import { Proyecto } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Proyectos = () => {
  return (
    <div className="msinvs__proyectos section__padding" id="blog">
      <div className="msinvs__proyectos-heading">
        <h1 className="gradient__text">
          Echa un vistazo a algunos de nuestros proyectos
        </h1>
      </div>
      <div className="msinvs__proyectos-container">
        <div className="msinvs__proyectos-container__groupA">
          <Proyecto
            imgUrl={blog01}
            msi="37.000,00€"
            title="PARCELA GANADERA EN LORCA"
            gains={"30"}
          />
        </div>
        <div className="msinvs__proyectos-container__groupB">
          <Proyecto
            imgUrl={blog02}
            msi="105.000,00€"
            title="PARCELA AGRICOLA LORCA"
            gains={"20"}
          />
          <Proyecto
            imgUrl={blog03}
            msi="50.000,00€"
            title="PARCELA ORIHUELA"
            gains={"30"}
          />
          <Proyecto
            imgUrl={blog04}
            msi="28.000,00€"
            title="LO FERRO"
            gains={"15"}
          />
          <Proyecto
            imgUrl={blog05}
            msi="85.000,00€"
            title="DUPLEX EN EL PALMAR"
            gains={"20"}
          />
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
