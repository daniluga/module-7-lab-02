import { useState } from "react";
import "./App.css";
import "./EmojiButton.css";

function App() {
  type Emoji = {
    id: number;
    emoji: string;
    left: number;
  };

  const [emojis, setEmojis] = useState<Emoji[]>([]);

  const handleClick = () => {
    const id = Date.now() + Math.random();
    const newEmoji: Emoji = {
      id,
      emoji: "🍋",
      left: Math.random() * 80 + 10,
    };

    setEmojis((prev) => [...prev, newEmoji]);

    setTimeout(() => {
      setEmojis((prev) => prev.filter((e) => e.id !== id));
    }, 2000);
  };

  return (
    <>
      <h1>¿Quieres limones?</h1>
      <div className="emoji-container" style={{ marginTop: "100px" }}>
        <button onClick={handleClick}>Haz clic aquí👀</button>
        {emojis.map((e) => (
          <span key={e.id} className="emoji" style={{ left: `${e.left}%` }}>
            {e.emoji}
          </span>
        ))}
      </div>
    </>
  );
}

export default App;
