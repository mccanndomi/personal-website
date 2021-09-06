import "./ProjectTile.css";

export const ProjectTile = ({ data }) => {
  return (
    <div className="project-container">
      <h1>{data.name}</h1>
      <a>{data.description}</a>
    </div>
  );
};
