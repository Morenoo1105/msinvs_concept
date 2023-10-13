import React from "react";
import "./footer.css";
import msinvsLogo from "../../assets/logoMSINVS.png";
import { Download } from "../../components";

const Footer = () => {
  return (
    <div className="msinvs__footer section__padding">
      <div className="gpt3__footer-heading">
        <Download />
      </div>
      <div className="msinvs__footer-links">
        <div className="msinvs__footer-links__logo">
          <img src={msinvsLogo} alt="logo" />
          <p>+34 868 28 38 38</p>
          <p>info@msinvs.com</p>
        </div>
        <div className="msinvs__footer-links__div">
          <h4>Introducción</h4>
          <p>Información básica para el inversor</p>
        </div>
        <div className="msinvs__footer-links__div">
          <h4>Legal</h4>
          <p>Ley Orgánica de Protección de Datos</p>
        </div>
        <div className="msinvs__footer-links__div">
          <h4>MSInvs</h4>
          <p>Contacto</p>
        </div>
      </div>
      <div className="msinvs__footer-copyright">
        <p>MSInvs P.F.P. S.L. © 2022</p>
      </div>
    </div>
  );
};

export default Footer;
