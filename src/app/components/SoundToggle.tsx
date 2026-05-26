import { useRef, useState } from "react";

export function SoundToggle() {

  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);

  const toggleSound = () => {

    if (!audioRef.current) return;

    if (playing) {

      audioRef.current.pause();

    } else {

      audioRef.current.volume = 0.18;

      audioRef.current.play();

    }

    setPlaying(!playing);
  };

  return (
    <>

      <audio
        ref={audioRef}
        loop
        src="/audio/ambient.mp3"
      />

      <button
        onClick={toggleSound}
        className="
          fixed
          bottom-6
          left-6
          z-[999]
          bg-black/60
          backdrop-blur-xl
          border
          border-[rgba(255,255,255,0.08)]
          text-white
          px-5
          py-3
          rounded-full
          text-sm
          tracking-[0.15em]
          uppercase
          hover:border-[var(--gold)]
          hover:text-[var(--gold)]
          transition-all
          duration-500
        "
      >
        {playing ? "Sound Off" : "Sound On"}
      </button>

    </>
  );
}