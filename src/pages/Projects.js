import "./Projects.css";
import "../components/ProjectTile";
import { LeftBar } from "../components/LeftBar";
import { ProjectTile } from "../components/ProjectTile";

const projectData = [
  {
    name: "Optimum",
    description:
      "A mobile app that colates Everton Football club forums into one easy to read space.",
    technologies: ["Puppeteer", "Javascript", "Express", "React Native"],
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fnews%2Fbusiness-56635888&psig=AOvVaw3pg6L25X2xAy1YCUpmtlma&ust=1630729479130000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiOu-764fICFQAAAAAdAAAAABAD",
  },
  {},
  {},
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
              Below you can find a list of all my project including those that
              are still a work in progress. Further details can be found inside
              the project page including the github link and other relavant
              infomation.
            </p>
            <div className="project-space">
              {projectData.map((project) => (
                <ProjectTile data={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
