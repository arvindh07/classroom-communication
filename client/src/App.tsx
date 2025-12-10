import { useState } from "react"

function App() {
  const [username, setUsername] = useState("");

  const handleSubmit = async () => {
    try {
      if(!username) return;
      const response = await fetch("http://localhost:5555/api/register", {
        method: "POST",
        body: JSON.stringify({ username }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const json = await response.json();
      console.log("json ", json);
    } catch (error) {
      console.log("err in register ", error);
    }
  }

  return (
    <div style={{
      backgroundColor: "lightgray",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <h1 style={{ marginTop: "10rem" }}>Welcome to Classroom</h1>
      <div style={{
        marginTop: "5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem"
      }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter name"
          style={{
            padding: "8px 14px",
            fontFamily: "sans-serif",
            fontSize: "1rem"
          }} />
        <button
          style={{
            fontFamily: "sans-serif",
            padding: "8px 20px",
            cursor: "pointer",
            background: "black",
            color: "white",
            border: 0,
            outline: 0
          }}
          onClick={handleSubmit}>
          Enter
        </button>
      </div>
    </div>
  )
}

export default App
