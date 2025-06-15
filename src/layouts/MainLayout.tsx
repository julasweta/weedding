import { useEffect, useRef, useState, FC } from "react";
import { Outlet } from "react-router-dom";
import "./../App.css";
import Header from "../components/header/Header";
import { LoginForm } from "../components/header/LoginForm";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { authActions } from "../redux/slices/authSlice";
import i18n from "../i18n";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const MainLayout: FC = () => {
  const dispatch = useAppDispatch();
  const { me, logoutTrigger, language } = useAppSelector((state) => state.auth);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    return localStorage.getItem("mute") === "true";
  });

  // Флаг, чи починався відтворення аудіо (щоб не запускати зайвий раз)
  const [audioStarted, setAudioStarted] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    if (!me) {
      const first_name = localStorage.getItem("first_name");
      const last_name = localStorage.getItem("last_name");
      if (first_name && last_name) {
        dispatch(authActions.login({ firstName: first_name, lastName: last_name }));
      }
    }
  }, [me, logoutTrigger, dispatch]);

  // Функція, яка запускає аудіо після першої взаємодії
  const startAudio = () => {
    if (audioStarted) return;
    if (audioRef.current && !isMuted) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch((err) => {
        console.warn("Помилка відтворення аудіо:", err.message);
      });
      setAudioStarted(true);
    }
  };

  // Додаємо слухача події для запуску звуку після першої взаємодії
  useEffect(() => {
    window.addEventListener("click", startAudio, { once: true });
    window.addEventListener("touchstart", startAudio, { once: true });
    return () => {
      window.removeEventListener("click", startAudio);
      window.removeEventListener("touchstart", startAudio);
    };
  }, [audioStarted, isMuted]);

  // Перемикання звуку
  const toggleMute = () => {
    const newMute = !isMuted;
    setIsMuted(newMute);
    localStorage.setItem("mute", String(newMute));

    if (audioRef.current) {
      if (newMute) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch(() => { });
      }
    }
  };

  // Якщо змінився mute, синхронізуємо аудіо
  useEffect(() => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.pause();
    } else if (audioStarted) {
      audioRef.current.play().catch(() => { });
    }
  }, [isMuted, audioStarted]);

  return (
    <div className="main-layout">
      <Header />
      <LoginForm />
      <Outlet />

      <audio ref={audioRef} src="/weedding/audio/dreams.mp3" loop preload="auto" />

      <button
        onClick={toggleMute}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          fontSize: "24px",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#fff",
        }}
        aria-label={isMuted ? "Увімкнути звук" : "Вимкнути звук"}
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </div>
  );
};

export { MainLayout };
