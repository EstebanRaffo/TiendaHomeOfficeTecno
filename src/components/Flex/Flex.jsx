function Flex({ children }) {
  const flexStyle = {
    // display: "flex",
    // justifyContent: "space-around",
    // flexWrap: "wrap",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: "10px",
  };

  return <div style={flexStyle}>{children}</div>;
}

export default Flex;
