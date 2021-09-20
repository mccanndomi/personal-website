import "./Projects.css";
import "../components/ProjectTile";
import { LeftBar } from "../components/LeftBar";
import { ProjectTile } from "../components/ProjectTile";

const projectData = [
  {
    name: "Optimum",
    description:
      "A mobile app that colates Everton Football club forums into one easy to read space. This application is built in react native and is iOS and Android compatiable.",
    technology: ["JavaScript", "React Native", "Puppeteer", "Expo", "Firebase"],
    img: "https://miro.medium.com/max/1091/0*hQve1WGpy9cSyCfl.png",
    highlights: ["WIP", "Mobile"],
  },
  {
    name: "Savings",
    description:
      "A simple website optimised for mobile devices. Built with React and Prisma this application simply allows you to monitor your spending and keep within a budget.",
    technology: ["TypeScript", "React", "Prisma"],
    img: "https://i.pinimg.com/600x315/69/61/25/696125c37da5096881dddf652d8a7871.jpg", //https://cdn.dribbble.com/users/1794537/screenshots/14815108/media/a0e61f48dcc1b28ea0b0b727ebfcceb7.png
    highlights: ["Live", "Website"],
  },
  {
    name: "Lorem IP",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra a nisl ut gravida. Nam venenatis, tortor sed ultrices ultrices, turpis nibh.",
    technology: ["JavaScript", "React"],
    img: "https://pbs.twimg.com/media/Dm4dvRdW4AEUwzA.jpg",
    highlights: ["WIP", "Mobile", "Live"],
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
