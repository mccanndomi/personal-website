import "./ProjectTile.css";
import cover from "../res/mobile-app-cover.png";
import { co } from "co";

export const ProjectTile = ({ data }) => {
  return (
    <div className="project-container">
      <div className="project-image-space">
        <img src={cover} className="cover-image" />
      </div>
      <div className="project-infomation">
        <h1>{data.name}</h1>
        <a>{data.description}</a>
        <a>{data.technologies}</a>
      </div>
    </div>
  );
};
