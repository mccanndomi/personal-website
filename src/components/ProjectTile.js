import "./ProjectTile.css";
import cover from "../res/mobile-app-cover.png";
import { TechnologyBadge } from "./TechnologyBadge";

export const ProjectTile = ({ project }) => {
  return (
    <div className="project-container">
      <div className="project-image-space">
        <img src={cover} className="cover-image" />
      </div>
      <div className="project-infomation">
        <h1 className="project-infomation-title">{project.name}</h1>
        {project.technology.map((tech) => (
          <TechnologyBadge technology={tech} />
        ))}
        <p className="project-infomation-desc">{project.description}</p>
      </div>
    </div>
  );
};
