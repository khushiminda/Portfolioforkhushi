import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/enari.png";
import emotion from "../../Assets/Projects/h.png";
import editor from "../../Assets/Projects/myntra.png";
import chatify from "../../Assets/Projects/sangrakshanpic.png";
import suicide from "../../Assets/Projects/promt.png";
import bitsOfCode from "../../Assets/Projects/vidyalapic.jpeg";

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
              imgPath={chatify}
              isBlog={false}
              title="Sangrakshan - SIH 2023 Winner"
              description="Advanced Metaverse to train NDRF personnel using Immersive experience with dashboard as a one stop solution to all (CBRN) disasters with cutting edge features and advanced gesture control. "
              ghLink="https://github.com/khushiminda/Sanghrakshan"
              demoLink="https://www.youtube.com/watch?v=4cW_mwIr1hg"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="VIDHYALAYA - Vihaan7 Winner"
              description="VIDYALYA: Gamified Learning for Student Engagement in rural areas (women). VIDYALYA is a laboratory or a place that builds to solve a problem. We have built the future of the Ed-Tech industry by making education fun and interactive to create an immersive learning experience that will engage, inspire, and empower learners of all ages."
              ghLink="https://github.com/khushiminda/Vihaan-DEV-i"
              demoLink="https://youtu.be/YUE5cIWV5oM"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MyntraFashion"
              description="AR Try-Ons (Model Viewer API) Wondering how an outfit will look on you? With Myntra's AR Try-Ons, see the fit and style instantly. Log into the Myntra dashboard, select your favorite apparel, and click 'View in AR' to try it on. No more guessing, no more returns—make confident purchases every time. "
              ghLink="https://github.com/khushiminda"
              demoLink="https://youtu.be/tTKaSBeTy4U"
                      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="SWASTHYA PRE(AR)NA"
              description="Medical training is inefficient - No realistic scenario training. Current training lacks realistic,immersive scenarios, limitinghands-on experience andpreparedness for real-worldsituations."
              ghLink="https://github.com/khushiminda/Sanghrakshan"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="GenAI-Scripts"
              description="It is a repository that has three multi model scripts using Gemini and MeshyAI. Text to Text Image to text Text to 3d"
              ghLink="https://github.com/khushiminda/GenAItext-3D"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
