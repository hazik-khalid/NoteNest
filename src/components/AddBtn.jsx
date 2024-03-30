import React from "react";
import { useNoteContext } from "./NoteContext";

const AddScreen = ({ onClose }) => {
  const { addNote } = useNoteContext();
  const [input1, setInput1] = React.useState("");
  const [input2, setInput2] = React.useState("");

  const handleSubmit = () => {
    const newNote = {
      id: Date.now(),
      title: input1,
      text: input2,
    };
    addNote(newNote);
    setInput1("");
    setInput2("");
    onClose();
  };

  const style = {
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

const NotePopup = ({ note, onClose, onDelete }) => {
  const style = {
    popup: {
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      backgroundColor: "rgba(0,0,0,0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "1001"
    },
    popupcard: {
      backgroundColor: "#bbdedf",
      border: "1px solid grey",
      padding: "20px",
      borderRadius: "8px",
      width: "600px",
      height: "400px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column"
    },
    closeBtn: {
      position: "absolute",
      top: "10px",
      right: "10px",
      cursor: "pointer",
      fontSize: "24px",
      backgroundColor: "#519D9E",
      color: "#ffffff",
      border: "none",
      borderRadius: "50%",
      padding: "5px 10px"
    },
    deleteBtn: {
      marginTop: "auto",
      backgroundColor: "#FF6347",
      color: "#ffffff",
      border: "none",
      borderRadius: "4px",
      padding: "10px 20px",
      cursor: "pointer",
    },
    title: {
      fontSize: "2rem"
    },
    content: {},
  };

  const handleDelete = () => {
    onDelete(note.id);
    onClose();
  };

  return (
    <div style={style.popup}>
      <div style={style.popupcard}>
        <button onClick={onClose} style={style.closeBtn}>X</button>
        <h4 style={style.title}>{note.title}</h4>
        <p style={style.content}>{note.text}</p>
        <button onClick={handleDelete} style={style.deleteBtn}>Delete</button>
      </div>
    </div>
  );
};

const AddBtn = () => {
  const [showAddScreen, setShowAddScreen] = React.useState(false);
  const [selectedNote, setSelectedNote] = React.useState(null);
  const { notes, setNotes } = useNoteContext();

  const toggleAddScreen = () => {
    setShowAddScreen(!showAddScreen);
  };

  const toggleNotePopup = (note) => {
    setSelectedNote(note);
  };

  const closePopup = () => {
    setShowAddScreen(false);
  };

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const style = {
    fab: {
      width: "50px",
      height: "50px",
      position: "fixed",
      bottom: "2%",
      right: "2%",
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

  return (
    <div>
      <img
        onClick={toggleAddScreen}
        style={style.fab}
        src="/icons/add.png"
        alt="image"
      />
      {showAddScreen && <AddScreen onClose={closePopup} />}
       
      {notes.map((note) => (
        <div onClick={() => toggleNotePopup(note)} key={note.id} style={style.container}>
          <h4 style={style.title}>{note.title}</h4>
          <p style={style.content}>{note.text}</p>
        </div>
      ))}
      {selectedNote && <NotePopup note={selectedNote} onClose={() => setSelectedNote(null)} onDelete={handleDelete} />}
    </div>
  );
};

export default AddBtn;
