import React from "react";
import FileItem from "./FileItem";
import Files from "./Files";
import { getProperty } from "dot-prop";
import cartIcon from "../assets/cart.png";
import Navigation from "./Navigation";

const data = {
  root: {
    node1: {
      "node1-1": {
        "node1-1-1": {},
        "node1-1-2": {},
      },
      "node1-2": {
        "node1-2-1": {},
      },
    },
    node2: {
      "node2-1": {
        "node2-1-1": {},
        "node2-1-2": {
          "node2-1-2-1": {},
          "node2-1-2-2": {},
        },
      },
      "node2-2": {},
    },
    node3: {
      "node3-1": {},
      "node3-2": {},
    },
  },
};

// const data = {
//   root: {
//     node1: {
//       "node1-1": {
//         "node1-1-1": {},
//         "node1-1-2": {},
//       },
//       "node1-2": {
//         "node1-2-1": {},
//       },
//     },
//     node2: {
//       "node2-1": {
//         "node2-1-1": {},
//         "node2-1-2": {
//           "node2-1-2-1": {},
//           "node2-1-2-2": {},
//         },
//       },
//       "node2-2": {},
//     },
//     node3: {
//       "node3-1": {},
//       "node3-2": {},
//     },
//     node4: {
//       "node4-1": {},
//     },
//     node5: {
//       "node5-1": {},
//     },
//     node6: {
//       "node6-1": {},
//     },
//     node7: {
//       "node7-1": {},
//     },
//     node8: {
//       "node8-1": {},
//     },
//     node9: {
//       "node9-1": {},
//     },
//     node10: {
//       "node10-1": {},
//     },
//     node11: {
//       "node11-1": {},
//     },
//     node12: {
//       "node12-1": {},
//     },
//     node13: {
//       "node13-1": {},
//     },
//   },
// };

const Finder = () => {
  const [userPath, setUserPath] = React.useState("root");

  return (
    <>
      <Navigation userPath={userPath} onClick={setUserPath} />
      <div
        style={{
          display: "flex",
          height: "86vh",
          width: "95vw",
          maxWidth: "95vw",
          overflow: "auto",
          border: "solid 1px #D8D4D5",
          borderRadius: "2px",
          background: "white",
          // borderRight: "none",
        }}
      >
        {userPath.split(".").map((path, pathIndex) => {
          const currentSlice = userPath.split(".").slice(0, pathIndex + 1);
          const currentPath = currentSlice.join(".");
          const currentObj = getProperty(data, currentPath);
          // console.log("user path -1", currentSlice, currentPath, currentObj);
          if (!Object.entries(currentObj).length) {
            console.log("empty");
            return (
              <Files key="empty-dir">
                <div
                  style={{
                    margin: "24px",
                    height: "100%",
                    minWidth: "280px",
                    textAlign: "center",
                  }}
                >
                  <img height={76} src={cartIcon} />
                  <p>This Folder is Empty</p>
                </div>
              </Files>
            );
          }
          return (
            <Files key="">
              {Object.keys(currentObj).map((key) => {
                const onClickItem = () => {
                  setUserPath(`${currentPath}.${key}`);
                };
                return (
                  <FileItem
                    key={`${currentPath}-${key}`}
                    onClick={onClickItem}
                    title={key}
                    isSelected={userPath.includes(`${currentPath}.${key}`)}
                  />
                );
              })}
            </Files>
          );
        })}
      </div>
    </>
  );
};

export default Finder;
