function Card(props) {
  return (
    <div style={style.container}>
      <h4 style={style.title}>{props.title}</h4>
      <p style={style.content}>{props.text}</p>
    </div>
  );
}

export default Card;

const style = {
  container: {
    margin: "2% 2%",
    backgroundColor: "#96c2c3",
    display: "flex",
    borderRadius: "10px",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "1.4rem",
    margin: "3% 4%",
  },
  content: {
    fontSize: "1.1rem",
    marginLeft: "6%",
    marginTop: "-2%",
  },
};
