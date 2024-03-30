import React, { useState } from 'react';

export const [data, setdata] = useState([{title:"haziik",text:"huedhiqewfhewj"}])

const AddScreen = ({ onClose }) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleSubmit = () => {
    const newCard = {
      title: input1,
      text: input2
    };
    setdata(...data,newCard)
    console.log(data);
    onClose() 
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
          style={{ ...style.input, backgroundColor: '#ffffff' }}
        />
        <textarea 
          rows="15" 
          cols="32" 
          placeholder="Enter the text" 
          value={input2} 
          onChange={(e) => setInput2(e.target.value)} 
          style={{ ...style.textarea, width: 'calc(100% - 5px)', }}
        ></textarea>
        <button onClick={handleSubmit} style={style.button}>Add</button>
      </div>
    </div>
  );
};

const AddBtn = () => {
  const [showPopup, setShowPopup] = useState(false);

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
    // backgroundColor: "rgba(150, 194, 195, 0.7)", // 20% dim effect
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  card: {
    backgroundColor: "#bbdedf",
    border:"1px solid grey",
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
  textarea:{
    marginBottom:"10px",
    backgroundColor:"#fff",
    border:"2px solid #ccc",
    borderRadius:"10px",
    width:"100%",
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

