import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import ecoocean from "../../Assets/Projects/ecoocean.jpg"
import triagem from"../../Assets/Projects/triagem.jpg"
import save from "../../Assets/Projects/saveourocean.jpg"
import screen from "../../Assets/Projects/screensound.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecoocean}
              isBlog={false}
              title="EcoOcean"
              description="O projeto é um sistema de gerenciamento de eventos que atende tanto administradores quanto voluntários. Os usuários iniciam o acesso por meio de um login, onde os administradores têm acesso manual, enquanto os voluntários fazem login para visualizar eventos disponíveis.        
              User - Caio -
              Senha - 123"
              ghLink="https://github.com/MarcoAraujo02/EcoOcean"
   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={screen}
              isBlog={false}
              title="ScreenSound"
              description="ScreenSound é API criada para gerencimanto de um sistema de musicas. podendo excluir, editar e criar artistas para o App, relacionando artistas a seus devidos albuns e musics. A Api se conecta com o front-end feito com Blazor web"
              ghLink="https://github.com/MarcoAraujo02/ScreenSound.git"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={triagem}
              isBlog={false}
              title="InScreening"
              description="InScreening é uma API criada para sistemas de hospitais e triagem, utilizando uma inteligencia artificial criada com python e treinada com tensorflow
               para fazer os exames de forma rapida e precisa."
              ghLink="https://github.com/MarcoAraujo02/InScreeningApi.git"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={save}
              isBlog={false}
              title="Save Our Ocean"
              description="O aplicativo permite que Voluntários cadastrem áreas com poluição, informando CEP, tipo de poluição e descrição. Eles também podem verificar o status das áreas, especialmente as marcadas como Limpa. O Administrador gerencia voluntários e atualiza o status das áreas para Limpa, mostrando o progresso das ações de limpeza."
              ghLink="https://github.com/MarcoAraujo02/Save_Our_Ocean.git"

            />
          </Col>

    

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
