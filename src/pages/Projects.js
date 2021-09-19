import "./Projects.css";
import "../components/ProjectTile";
import { LeftBar } from "../components/LeftBar";
import { ProjectTile } from "../components/ProjectTile";

const projectData = [
  {
    name: "Optimum",
    description:
      "A mobile app that colates Everton Football club forums into one easy to read space. This application is built in react native and is iOS and Android compatiable. The data is stored in Firebase and currently has no running costs. This was my first app.",
    technology: ["Puppeteer", "Javascript", "Express", "React Native"],
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fnews%2Fbusiness-56635888&psig=AOvVaw3pg6L25X2xAy1YCUpmtlma&ust=1630729479130000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiOu-764fICFQAAAAAdAAAAABAD",
  },
  {
    name: "",
    description: "",
    technology: [""],
    img: "",
  },
  {
    name: "",
    description: "",
    technology: [""],
    img: "",
  },
];

function Projects() {
  return (
    <div className="container">
      <LeftBar />
      <div className="main">
        <div className="center-space">
          <div className="wrapper">
            <p className="project-title">PROJECTS</p>
            <p className="project-title-subtext">
              I like to create applications that improve my day to day life.
              Below you can find a list of all my projects including those that
              are still a work in progress. Further details can be found inside
              the project page including the GitHub link and other relevant
              information.
            </p>
            <div className="project-space">
              {projectData.map((project) => (
                <ProjectTile project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
