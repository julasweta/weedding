import { useEffect, useRef, useState, FC } from "react";

const AudioPlayer: FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    return localStorage.getItem("mute") === "true";
  });

  // Спроба автозапуску після першої взаємодії
  useEffect(() => {
    const tryPlay = () => {
      if (audioRef.current && !isMuted) {
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch((e) => {
          console.warn("Автовідтворення не вдалось:", e.message);
        });
      }
      window.removeEventListener("click", tryPlay);
    };

    window.addEventListener("click", tryPlay);

    return () => window.removeEventListener("click", tryPlay);
  }, [isMuted]);

  // Синхронізація mute/unmute
  useEffect(() => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
    }
  }, [isMuted]);

  const toggleMute = () => {
    const newMute = !isMuted;
    setIsMuted(newMute);
    localStorage.setItem("mute", String(newMute));
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src="/audio/dreams.mp3"
        loop
        preload="auto"
        muted={false}
      />
      <button onClick={toggleMute}>
        {isMuted ? "🔇 Вимкнути звук" : "🔊 Увімкнути звук"}
      </button>
    </div>
  );
};

export default AudioPlayer;
