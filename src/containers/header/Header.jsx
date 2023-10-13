import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import mockup from "../../assets/mockup.png";

const Header = () => {
  return (
    <div className="msinvs__header header__padding" id="home">
      <div className="msinvs__header-content">
        <h1 className="gradient__text">
          Forma parte del verdadero MOVIMIENTO GANADOR
        </h1>
        <p>
          Ahora puedes poner en marcha tu dinero para conseguir un auténtico
          movimiento ganador.
        </p>
        <p>
          Sin comisiones ni tarifas. Con la seguridad de participar en
          operaciones en las que hasta nosotros ponemos toda nuestra confianza y
          fondos.
        </p>
        <div className="msinvs__header-content__input">
          <button type="button">Información básica para el inversor</button>
        </div>
        <div className="msinvs__header-content__people">
          <img src={people} alt="people" />
          <p>+200 inversores a día de hoy</p>
        </div>
      </div>
      <div className="msinvs__header-image">
        <img
          src={mockup}
          alt="Phone Illustration Mock-Up with the app on screen"
        />
      </div>
    </div>
  );
};

export default Header;
