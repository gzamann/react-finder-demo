import folderIcon from "../assets/folder.png";
import folderSelectedIcon from "../assets/folder-selected.png";

const FileItem = ({ title, iconType, onClick, isSelected }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: "solid 1px #D8D4D5",
          padding: "4px 12px",
          cursor: "pointer",
          minWidth: "280px",
          background: isSelected ? "#F6FBEF" : "",
        }}
        onClick={onClick}
      >
        <img
          style={{ height: 36 }}
          src={isSelected ? folderSelectedIcon : folderIcon}
        />
        <div style={{ margin: "4px" }} />
        <p>{title || "build"}</p>
      </div>
    </>
  );
};

export default FileItem;
