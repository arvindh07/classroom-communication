import { useState } from "react";

const Chatroom = ({ username }: { username: string }) => {
  const [msg, setMsg] = useState("");
  const handleSendMessage = () => {

  }

  return (
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }}>
      <div>
        {/* header */}
        <h4 style={{
          fontFamily: "sans-serif",
          padding: "16px 24px",
          borderBottom: "1px solid gray"
        }}>
          Chatroom
        </h4>
      </div>
      <div style={{
        flex: "1",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}>
        <Message msgObj={{ msg: "hello", mine: "arvindh" === username }} />
        <Message msgObj={{ msg: "hi", mine: true }} />
        {/* messages window */}
      </div>
      {/* bottom div */}
      <div style={{
        display: "flex",
        justifyContent: "end",
        alignItems: "end",
        width: "100%",
        borderTop: "1px solid gray",
        padding: "20px"
      }}>
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Enter message"
          style={{
            width: "100%",
            padding: "8px 14px",
            fontFamily: "sans-serif",
            fontSize: "1rem"
          }} />
        <button
          style={{
            fontFamily: "sans-serif",
            padding: "12px 24px",
            cursor: "pointer",
            background: "black",
            color: "white",
            border: 0,
            outline: 0
          }}
          onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  )
}

const Message = (props: { msgObj: { msg: string, mine: boolean } }) => {
  const { msgObj } = props;
  const { msg, mine } = msgObj;
  return (
    <div style={{
      border: "1px solid black",
      width: "max-content",
      padding: "4px 8px",
      borderRadius: "6px",
      marginLeft: mine ? "auto" : "0"
    }}>
      {msg}
    </div>
  )
}

export default Chatroom