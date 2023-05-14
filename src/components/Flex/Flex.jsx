function Flex({ children }) {
  const flexStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: "2%",
  };

  return <div style={flexStyle}>{children}</div>;
}

export default Flex;
