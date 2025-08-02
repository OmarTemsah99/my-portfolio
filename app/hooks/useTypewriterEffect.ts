import { useEffect, useState } from "react";

export const useTypewriterEffect = (fullText: string, typingSpeed = 150) => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const typeWriter = () => {
      if (textIndex < fullText.length) {
        setCurrentText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }
    };

    const timer = setTimeout(typeWriter, typingSpeed);
    return () => clearTimeout(timer);
  }, [textIndex, fullText, typingSpeed]);

  return currentText;
};
