import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, className, open, setOpen }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        onClick={() => setOpen(!open)}
        className={`mr-3 inline-block px-3 text-lg font-semibold ${className}`}
        style={{ color: match ? "red" : "black" }}
        to={to}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
