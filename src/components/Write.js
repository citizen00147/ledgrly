import React, { useState } from "react";

function Write(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function writeNote(event) {
    props.add(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  function expand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form>
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            placeholder="Title"
            value={note.title}
          ></input>
        )}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          placeholder="Log your thoughts..."
          rows={isExpanded ? "3" : "1"}
          value={note.content}
        ></textarea>
        <button style={{ color: "#413f42" }} onClick={writeNote}>
          Log
        </button>
      </form>
    </div>
  );
}

export default Write;
