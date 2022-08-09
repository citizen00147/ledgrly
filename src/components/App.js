import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Write from "./Write";
import Note from "./Note";
import About from "./About";

// Initilize state & check for notes in localStorage. Otherwise start with an empty array.

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  function writeNote(newNote) {
    setNotes((prevNote) => {
      return [...prevNote, newNote];
    });
  }

  // Save notes to localStorage by converting JSON objects to strings.

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <About />
      <Write add={writeNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            delete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
