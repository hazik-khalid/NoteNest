import React from "react";
import { useNoteContext } from "./NoteContext";

const AddScreen = ({ onClose }) => {
  const { addNote } = useNoteContext();
  const [input1, setInput1] = React.useState("");
  const [input2, setInput2] = React.useState("");

  const handleSubmit = () => {
    const newNote = {
      title: input1,
      text: input2,
    };
    addNote(newNote);
    setInput1("");
    setInput2("");
    onClose();
  };

  return (
    <div style={style.popup}>
      <div style={style.card}>
        <h1>Add Note</h1>
        <input
          type="text"
          placeholder="Title"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          style={{ ...style.input, backgroundColor: "#ffffff" }}
        />
        <textarea
          rows="15"
          cols="32"
          placeholder="Enter the text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          style={{ ...style.textarea, width: "calc(100% - 5px)" }}
        ></textarea>
        <button onClick={handleSubmit} style={style.button}>
          Add
        </button>
      </div>
    </div>
  );
};

const AddBtn = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  const { notes } = useNoteContext();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <img
        onClick={togglePopup}
        style={style.fab}
        src="/icons/add.png"
        alt="image"
      />
      {showPopup && <AddScreen onClose={togglePopup} />}
      {notes.map((note, index) => (
        <div key={index} style={style.container}>
          <h4 style={style.title}>{note.title}</h4>
          <p style={style.content}>{note.text}</p>
        </div>
      ))}
    </div>
  );
};

export default AddBtn;

const style = {
  fab: {
    width: "50px",
    height: "50px",
    position: "fixed",
    bottom: "2%",
    right: "2%",
  },
  popup: {
    position: "fixed",
    top: "4%",
    bottom: "10%",
    left: "4%",
    right: "4%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  card: {
    backgroundColor: "#bbdedf",
    border: "1px solid grey",
    padding: "20px",
    borderRadius: "8px",
    width: "600px",
    height: "500px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  textarea: {
    marginBottom: "10px",
    backgroundColor: "#fff",
    border: "2px solid #ccc",
    borderRadius: "10px",
    width: "100%",
    resize: "none",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#519D9E",
    color: "#ffffff",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  },
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
