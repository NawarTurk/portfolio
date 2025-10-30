import React, { useState, useEffect } from "react";

export default function MiniGame() {
  const [pos, setPos] = useState({ x: 100, y: 0 });
  const [isJumping, setIsJumping] = useState(false);
  const [currentMsg, setCurrentMsg] = useState(0);

  // Bird states
  const [birdX, setBirdX] = useState(200);
  const [birdY, setBirdY] = useState(160);
  const [birdDir, setBirdDir] = useState("right"); // 'right' or 'left'

  const messages = [
    "Hi, welcome! Thank you for taking the time to check out my site. I really appreciate it.",
    "I'm Nawar, an NLP researcher and master's student at Concordia University.",
    "I love exploring how language, AI, and human reasoning connect.",
    "I enjoy playing chess and discovering new cafés to code at.",
    "I'm working on research combining persuasion detection and discourse analysis.",
    "My work has been presented at EMNLP, SemEval, and Canadian AI 2025.",
    "I’ve received NSERC and FRQNT scholarships for my research contributions.",
    "I'm currently learning French and enjoying life in Montreal.",
    "I'm looking for internships in Machine Learning and NLP for Winter or Summer 2026.",
    "Thank you for spending a bit of time with me here! I’ll repeat my messages in case you missed any.",
  ];
  

  // Move and jump controls
  useEffect(() => {
    const handleKey = (e) => {
      setPos((p) => {
        switch (e.key) {
          case "ArrowLeft":
            return { ...p, x: Math.max(p.x - 15, 0) };
          case "ArrowRight":
            return { ...p, x: Math.min(p.x + 15, window.innerWidth - 120) };
          default:
            return p;
        }
      });

      if (e.code === "Space" && !isJumping) {
        setIsJumping(true);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isJumping]);

  // Single jump
  useEffect(() => {
    if (!isJumping) return;

    let velocity = 14;
    const gravity = 1;
    const jumpInterval = setInterval(() => {
      setPos((p) => {
        const newY = p.y + velocity;
        velocity -= gravity;

        if (newY <= 0) {
          clearInterval(jumpInterval);
          setIsJumping(false);
          return { ...p, y: 0 };
        }
        return { ...p, y: newY };
      });
    }, 20);

    return () => clearInterval(jumpInterval);
  }, [isJumping]);

  // Intro animation: jump twice, move right 3 steps, then left 2 steps
  useEffect(() => {
    const jumpOnce = (callback) => {
      setIsJumping(true);
      const checkJump = setInterval(() => {
        if (!isJumping) {
          clearInterval(checkJump);
          if (callback) callback();
        }
      }, 100);
    };

    // sequence: jump → move right → jump → move left
    setTimeout(() => {
      jumpOnce(() => {
        let step = 0;
        const moveRight = setInterval(() => {
          setPos((p) => ({ ...p, x: p.x + 10 }));
          step++;
          if (step >= 3) {
            clearInterval(moveRight);
            setTimeout(() => {
              jumpOnce(() => {
                let stepLeft = 0;
                const moveLeft = setInterval(() => {
                  setPos((p) => ({ ...p, x: p.x - 10 }));
                  stepLeft++;
                  if (stepLeft >= 2) clearInterval(moveLeft);
                }, 150);
              });
            }, 400);
          }
        }, 150);
      });
    }, 500);
  }, []);

  // Bird flying animation (independent + facing direction)
  useEffect(() => {
    let direction = 1;
    const fly = setInterval(() => {
      setBirdX((x) => {
        if (x > 550) {
          direction = -1;
          setBirdDir("left");
        }
        if (x < 100) {
          direction = 1;
          setBirdDir("right");
        }
        return x + direction * 2;
      });
      setBirdY(160 + Math.sin(Date.now() / 500) * 10);
    }, 30);
    return () => clearInterval(fly);
  }, []);

  // Rotate messages every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMsg((prev) => (prev + 1) % messages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <div className="relative w-full h-[260px] overflow-hidden">
      {/* Character */}
      <div
        className="absolute w-20 h-20 bg-[url('/images/player.png')] bg-cover transition-all duration-75"
        style={{
          left: pos.x,
          bottom: pos.y + 45,
        }}
      >
        {/* Speech bubble */}
        <div
          className="absolute -top-16 left-16 text-black text-xs font-semibold px-4 py-2 rounded-lg shadow-md border border-gray-300 relative"
          style={{
            backgroundColor: "#ffffff",
            minWidth: "300px",
            maxWidth: "600px",
            lineHeight: "1.3rem",
            whiteSpace: "normal",
            wordWrap: "break-word",
          }}
        >
          {messages[currentMsg]}
          <div className="absolute left-[-6px] bottom-2 w-0 h-0 border-t-6 border-t-transparent border-b-6 border-b-transparent border-r-6 border-r-white"></div>
        </div>
      </div>

      {/* Flying Bird */}
      <div
        className="absolute w-20 h-20 bg-cover transition-all duration-75"
        style={{
          backgroundImage:
            birdDir === "right"
              ? "url('/images/bird.png')"
              : "url('/images/bird2.png')",
          left: birdX,
          bottom: birdY,
        }}
      ></div>

      {/* Ground */}
      <div className="absolute bottom-[45px] w-[200%] left-[-50%] h-[6px] bg-transparent"></div>
      </div>
  );
}
