import './Navbar.css' 

function Navbar() {
  return (
    <div style={styles.container}>
        <h3 style={styles.containerText}>NoteNest</h3>
    </div>
  )
}

export default Navbar

const styles = {
  container: {
    display: "flex",
    backgroundColor: "#519D9E"
  },
  containerText: {
    color: "#ffff",
    fontSize: "1.2rem",
    marginLeft: "5%"
  }
};

