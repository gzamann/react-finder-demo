const Files = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRight: "solid 1px #D8D4D5",
      }}
    >
      {children}
    </div>
  );
};

export default Files;
