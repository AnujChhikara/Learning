import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [yourMessages, setYourMessages] = useState<string[]>([]);
  const [otherMessages, setOtherMessages] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const sendMessage = () => {
    if (!socket) return;

    const message = inputRef.current?.value ?? "";
    if (message.trim() === "") return; // Prevent sending empty messages

    socket.send(message);
    setYourMessages((prev) => [...prev, message]);

    if (inputRef.current) {
      inputRef.current.value = ""; // Clear the input after sending
    }
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onopen = () => {
      console.log("connected");
    };

    ws.onmessage = (event) => {
      const message = event.data;
      setOtherMessages((prev) => [...prev, message]);
    };

    ws.onclose = () => {
      console.log("disconnected");
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // Cleanup WebSocket connection on unmount
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter a message" />
      <button type="button" onClick={sendMessage}>
        Send
      </button>

      <div>
        <h2>Your Messages</h2>
        {yourMessages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <div>
        <h2>Other Users' Messages</h2>
        {otherMessages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
