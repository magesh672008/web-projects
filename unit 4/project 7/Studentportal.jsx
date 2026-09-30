import { useState } from "react";

function Show() {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>Student Portal</h1>
      <p>Welcome to the student portal.</p>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Information" : "Show Information"}
      </button>

      <div style={{ display: show ? "block" : "none" }}>
        <p>No Details Available.</p>
      </div>
    </>
  );
}

export default Show;