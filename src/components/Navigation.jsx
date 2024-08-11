import houseIcon from "../assets/house.png";
import arrow from "../assets/right-chevron.png";

const Navigation = ({ userPath, onClick }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "4px 0",
          padding: "4px 12px",
          border: "1px solid #D8D4D5",
          borderRadius: "4px",
          background: "white",
          overflow: "auto",
          maxWidth: "95vw",
        }}
      >
        <img src={houseIcon} height={22} />
        {userPath.split(".").map((path, index) => {
          const currentSlice = userPath.split(".").slice(0, index + 1);
          const currentPath = currentSlice.join(".");
          //   console.log("path", currentPath);
          return (
            <>
              <div
                key={`navpath-${currentPath}-${index}`}
                onClick={() => onClick(currentPath)}
                style={{
                  display: "flex",
                  margin: "0 4px",
                  padding: "4px",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <span style={{ minWidth: "min-content" }}>{path}</span>
                <div style={{ margin: "0 4px" }} />
                <img height={18} src={arrow} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Navigation;
