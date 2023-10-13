import React from "react";
import "./proyecto.css";

const Proyecto = ({ imgUrl, msi, title, gains }) => {
  return (
    <div className="msinvs__blog-container__article">
      <div className="msinvs__blog-container__article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="msinvs__blog-container__article-content">
        <div>
          <p>{msi}</p>
          <h3 className="gradient__text">{title}</h3>
        </div>
        <div className="msinvs__blog-container__article-content-gains">
          <p>Beneficio del {gains}%</p>
        </div>
      </div>
    </div>
  );
};

export default Proyecto;
