import React, { useState, useEffect } from "react";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";
import api from "../services/api";

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua Plataforma de estudo online.</h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de estudo"
          className="here-image"
        />

        <div className="button-continers">
          <a
            href="https://www.google.com.br/?gfe_rd=cr&ei=9Xh4Vv_UJoaq8wfztopA&gws_rd=ssl"
            className="study"
          >
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>

          <a
            href="https://www.google.com.br/?gfe_rd=cr&ei=9Xh4Vv_UJoaq8wfztopA&gws_rd=ssl"
            className="give-classes"
          >
            <img src={giveClassesIcon} alt="Estudar" />
            Estudar
          </a>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas{" "}
          <img src="{purpleHeartIcon}" alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
