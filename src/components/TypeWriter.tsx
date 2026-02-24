import { useState, useEffect } from "react";

const words = ["MERN Developer", "React Enthusiast", "Future Meta Engineer", "Tech Innovator"];

const TypeWriter = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) setTimeout(() => setDeleting(true), 1500);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex]);

  return (
    <span className="neon-text font-display">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypeWriter;
