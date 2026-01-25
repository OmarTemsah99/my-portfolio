"use client";

import { useEffect, useState, useCallback, useRef, memo } from "react";

interface ShuffleTextProps {
  text?: string;
  speed?: number;
  shuffleIterations?: number;
  className?: string;
  style?: React.CSSProperties;
  charset?: string;
}

const DEFAULT_CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

const ShuffleText = memo(function ShuffleText({
  text = "Loading...",
  speed = 50,
  shuffleIterations = 3,
  className,
  style,
  charset = DEFAULT_CHARSET,
}: ShuffleTextProps) {
  const [displayText, setDisplayText] = useState("");
  const iterationRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const getRandomChar = useCallback(() => {
    return charset[Math.floor(Math.random() * charset.length)];
  }, [charset]);

  const shuffle = useCallback(() => {
    iterationRef.current = 0;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        const newText = text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";

            const revealThreshold = Math.floor(
              (iterationRef.current / (shuffleIterations * text.length)) *
                text.length,
            );

            if (index < revealThreshold) {
              return text[index];
            }

            return getRandomChar();
          })
          .join("");

        return newText;
      });

      iterationRef.current += 1;

      if (iterationRef.current >= shuffleIterations * text.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setDisplayText(text);

        // Restart animation after a pause
        setTimeout(() => {
          shuffle();
        }, 2000);
      }
    }, speed);
  }, [text, speed, shuffleIterations, getRandomChar]);

  useEffect(() => {
    shuffle();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [shuffle]);

  return (
    <span
      className={className}
      style={{
        fontFamily: "monospace",
        letterSpacing: "0.1em",
        ...style,
      }}>
      {displayText}
    </span>
  );
});

export default ShuffleText;
