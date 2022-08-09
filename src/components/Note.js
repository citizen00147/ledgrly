import React from "react";

function Note(props) {
  function handleDelete() {
    props.delete(props.id);
  }

  return (
    <div className="note-post">
      <div>
        <button style={{ color: "#413f42" }} onClick={handleDelete}>
          X
        </button>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default Note;
