"use client";

import HomeComponent from "@/components/HomePage";
import { useEffect, useState } from "react";
import io from "socket.io-client";

let socket;

export default function Home() {
  const [message, setMessage] = useState("");
  const [receivedMessage, setReceivedMessage] = useState([]);

  useEffect(() => {
    // Initialize the connection to the backend server
    socket = io("http://localhost:8000");

    // Listen for the "message" event from the backend
    socket.on("message", (data) => {
      setReceivedMessage((prev) => [...prev, data]);
    });

    // Cleanup when component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  // Emit a message event to the backend
  const sendMessage = () => {
    socket.emit("message", message);
    setMessage("");
  };

  return (
    <div>
      <HomeComponent/>
      <div className="bg-red-400 w-[100vw] h-[100vh] flex justify-center items-center">
        second page
      </div>
      <div className="bg-green-400 w-[100vw] h-[100vh] flex justify-center items-center">
        third page
      </div>

      {/* <h1>Socket.io Chat Example</h1>
      <input
        type='text'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>

      <div>
        <h2>Messages:</h2>
        {receivedMessage.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div> */}
    </div>
  );
}
