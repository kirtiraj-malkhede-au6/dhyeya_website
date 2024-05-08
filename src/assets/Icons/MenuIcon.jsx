import * as React from "react";
const MenuIcon = ({ width = "30px", height = "30px", ...props }) => (
  <svg
    fill="#000000"
    width={width}
    height={height}
    viewBox="-2.5 0 19 19"
    xmlns="http://www.w3.org/2000/svg"
    className="cf-icon-svg"
    {...props}
  >
    <path d="M.789 4.836a1.03 1.03 0 0 1 1.03-1.029h10.363a1.03 1.03 0 1 1 0 2.059H1.818A1.03 1.03 0 0 1 .79 4.836zm12.422 4.347a1.03 1.03 0 0 1-1.03 1.029H1.819a1.03 1.03 0 0 1 0-2.059h10.364a1.03 1.03 0 0 1 1.029 1.03zm0 4.345a1.03 1.03 0 0 1-1.03 1.03H1.819a1.03 1.03 0 1 1 0-2.059h10.364a1.03 1.03 0 0 1 1.029 1.03z" />
  </svg>
);
export default MenuIcon;
