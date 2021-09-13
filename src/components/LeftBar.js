import "./LeftBar.css";
import { NavLink } from "react-router-dom";

export const LeftBar = () => {
  return (
    <div className="left-bar">
      <div className="menu-items">
        <p>
          <NavLink
            className="menu=link"
            activeStyle={{
              color: "#46453f",
            }}
            exact
            to="/"
          >
            HOME
          </NavLink>
        </p>
        <p>
          <NavLink
            className="menu=link"
            to="/projects"
            activeStyle={{
              color: "#46453f",
            }}
          >
            PROJECTS
          </NavLink>
        </p>

        <p>
          <a href="https://github.com/mccanndomi">GITHUB</a>
        </p>
        <a>CV</a>
      </div>
    </div>
  );
};
