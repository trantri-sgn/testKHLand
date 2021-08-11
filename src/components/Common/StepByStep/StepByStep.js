import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export function StepByStep() {
  const { pathname } = useLocation();
  return (
    <div className="box_nav">
      <ul>
        <li>
          <span className={pathname === "/" ? "slide-left" : ""}>
            {pathname === "/" ? "Lĩnh vực hoạt động" : ""}
          </span>
          <NavLink to="/">01</NavLink>
        </li>
        <li>
          <span className={pathname === "/projects" ? "slide-left" : ""}>
            {pathname === "/projects" ? "Dự án tiêu biểu" : ""}
          </span>
          <NavLink to="/">02</NavLink>
        </li>
        <li>
          <span className={pathname === "/news" ? "slide-left" : ""}>
            {pathname === "/news" ? "Hoạt động nổi bật" : ""}
          </span>
          <NavLink to="/">03</NavLink>
        </li>
      </ul>
    </div>
  );
}
