import "./LeftBar.css";
import { NavLink } from "react-router-dom";

export const LeftBar = () => {
  return (
    <div className="left-bar">
      <div className="menu-items">
        <p>
          <NavLink
            className="menu=link"
            to="/home"
            activeStyle={{
              textDecoration: "underline",
            }}
          >
            HOME
          </NavLink>
        </p>
        <p>
          <NavLink
            className="menu=link"
            to="/projects"
            activeStyle={{
              textDecoration: "underline",
            }}
          >
            PROJECTS
          </NavLink>
        </p>

        <p>
          <a href="https://github.com/mccanndomi">GITHUB</a>
        </p>
        <p>CV</p>
      </div>
    </div>
  );
};
