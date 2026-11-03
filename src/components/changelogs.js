import useGlobalData from "@docusaurus/useGlobalData";
import Link from "@docusaurus/Link";
import "@root/css/changelogs.css";

// custom styling
const containerStyle = {
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "16px",
  marginTop: "24px",
};

const Changelogs = () => {
  const globalData = useGlobalData();
  const changelogDirs = globalData["changelogs-dirs"]?.default.dirs || [];

  return (
    <div style={containerStyle}>
      <h1>Changelogs</h1>
      <div style={gridStyle}>
        {changelogDirs.map((dir) => (
          <div className="changelog-card" key={dir.name}>
            <Link className="changelog-card-content" to={`changelogs/${dir.name}`}>
              {dir.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Changelogs;
