import { Link, useLocation } from "react-router-dom";

/** Share navigation between the home page and inner pages. */
export default function SiteLink({ href = "/", children, ...props }) {
  const { pathname } = useLocation();
  let to = href;
  if (href === "#about") to = "/about-us/";
  else if (href === "#home") to = pathname === "/" ? "#home" : "/";
  else if (href === "#facilities") to = "/our-facilities/";
  else if (href === "#contact") to = "/contact-us/";

  if (to.startsWith("/")) {
    return <Link to={to} {...props}>{children}</Link>;
  }
  return <a href={to} {...props}>{children}</a>;
}
