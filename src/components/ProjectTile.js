import "./ProjectTile.css";
import { Pill } from "./Pill";
import { TechnologyBadge } from "./TechnologyBadge";

export const ProjectTile = ({ project }) => {
  return (
    <div className="project-container">
      <div className="project-image-space">
        <img src={project.img} className="cover-image" />
      </div>
      <div className="project-infomation">
        <div className="project-head">
          <h1 className="project-infomation-title">{project.name}</h1>

          {project.highlights.map((data) => (
            <Pill info={data} />
          ))}
        </div>
        <div className="badge-area">
          {project.technology.map((tech) => (
            <TechnologyBadge technology={tech} />
          ))}
        </div>
        <p className="project-infomation-desc">{project.description}</p>
      </div>
    </div>
  );
};
