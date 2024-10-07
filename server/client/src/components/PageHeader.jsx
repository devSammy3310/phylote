import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";

const PageHeader = ({ logo, ID }) => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <div className="page-header">
      <div className="page-header__logo-container">
        <img className="page-header__logo" src={logo} alt="" />
      </div>

      <div className="page-header__current-container">
        <h1 className="page-header__main">
          {ID === "contact"
            ? "contact phylote"
            : ID === "about"
            ? "about phylote"
            : pathnames[pathnames.length - 1].replace(/-/, " ")}
        </h1>

        <div className="page-header__sub">
          <Link className="page-header__sub--link" to="/">
            Home
          </Link>
          {pathnames.map((path, index) => {
            const formattedPath = path.replace(/-/, " ");
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <p className="page-header__sub--text">{formattedPath}</p>
            ) : (
              <Link className="page-header__sub--link" to={`/${path}/`}>
                {formattedPath}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
