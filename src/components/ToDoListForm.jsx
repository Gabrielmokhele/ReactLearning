import React from "react";

const ToDoListForm = ({ setTodoList }) => {
  const [inputState, setInputState] = React.useState("");

  const handleInput = (event) => {
    setInputState(event.target.value); // this is to handle the event input
  };

  const handleSubmit = () => {
    if (inputState.trim()!== "") {// this is to ensure that the todo is not added automatically
    setTodoList((prev) => {
      return [
        ...prev,
        { id: prev.length + 1, text: inputState, completed: false },
      ];     
    });
    setInputState("");  // this is to remove input 
    } 
  };

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      marginTop: "100px"}}>
      
      <input style={{
              fontSize: "1rem",
              padding: "5px",
              border: "2px solid hsla(0, 0%, 80%, 0.5)",
              borderRadius: "3px",
              color: "hsla(0, 20%, 0%, 0.5)",}} 
              placeholder= "Enter To Do" type="text" id="text" name="text" onChange={handleInput} />
      <button style={{
        fontSize: "1rem",
        padding: "5px",
        border: "2px solid hsla(0, 0%, 80%, 0.5)",
        borderRadius: "3px",
        backgroundColor: "green",
        color: "#fff",
      }} onClick={handleSubmit}>Submit</button>
    </div>
  ); // removed label outside and added an input placeholder
};

export default ToDoListForm;
