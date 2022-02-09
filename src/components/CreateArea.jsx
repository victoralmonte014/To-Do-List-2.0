import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  function submitButton(event) {
    if (note.title === "" || note.content === "") {
      alert("you must have to write a title or a contect");
    } else {
      props.onAdd(note);
      setNote({ title: "", content: "" });
    }
    event.preventDefault();
  }

  function addOnKeypress(event) {
    const enterKey = event.target.key;
    if (enterKey === "Enter") {
      return props.OnKeyPress;
    }
  }

  return (
    <div>
      <form>
        <input
          onKeyPress={addOnKeypress}
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitButton}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
