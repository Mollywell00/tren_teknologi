import { useState, useRef, useEffect } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Halo! Ada yang bisa saya bantu?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: "bot", text: "Ini respon otomatis dari bot 🤖" },
      ]);
    }, 500);
  };


  return (
    <div
      className="flex flex-col "
      style={{ height: "calc(100vh - 7rem)" }} 
    >
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 bg-gray-300 rounded-tl-3xl rounded-tr-3xl">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-100 text-black rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="border-t bg-white px-4 py-3 flex items-center gap-2 sticky bottom-0 rounded-bl-3xl rounded-br-3xl shadow-md">
        <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tulis pesan..."
        className="flex-1 bg-gray-100 text-black rounded-lg px-4 py-2 text-sm outline-none focus:outline-none focus:ring-0 focus:border-transparent border-0"
        />

        <button
          onClick={handleSend}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-400 text-sm"
        >
          Kirim
        </button>
      </div>
    </div>
  );
};

export default Chat;
