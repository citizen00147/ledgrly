import React, { useState } from "react";

function About() {
  const [isOpen, setOpen] = useState(false);

  function openUp() {
    setOpen(true);
  }

  function closeDown() {
    setOpen(false);
  }

  return (
    <div>
      {isOpen && (
        <aside>
          <button style={{ color: "#413f42" }} onClick={closeDown}>
            X
          </button>
          <h3>What's this about?</h3>
          <p>
            Ledgrly is a simple note taking app that utilizes local storage over
            a database on someone else's computer. Who needs to see your notes
            but you?!
          </p>
          <p>Remember: deleting your browser's cache will delete your notes!</p>
          <h3>Say Hello!</h3>
          <p>
            Please reach out with any questions, comments or suggestions. I'd
            love to hear how I could make this app better for you.
          </p>
          <p>
            Follow <a href="http://twitter.com/citizen00147">me</a> on Twitter!
          </p>
          <p>
            I like to write too, so give me a follow on {""}
            <a href="https://hashnode.com/@citizen00147">Hashnode</a>
            {""} and check out my <a href="http://blog.cmdme.dev">blog!</a>
          </p>
          <p>
            Whew! That's a lot of links. But I'm done now. I'll let you think.
          </p>
        </aside>
      )}
      <button
        style={{ color: "#413f42" }}
        className="aboutBtn"
        onClick={openUp}
      >
        ???
      </button>
    </div>
  );
}

export default About;
