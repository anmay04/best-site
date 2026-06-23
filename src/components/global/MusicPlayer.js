import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      {/* Audio File */}
      <audio
        ref={audioRef}
        src="./music/Our Song.mp3"
        loop
      />

      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.6, type: "spring" }}
        className="fixed bottom-5 left-5 z-50 glass rounded-full px-4 py-2.5 flex items-center gap-3"
      >
        <button
          onClick={toggleMusic}
          className="w-9 h-9 rounded-full flex items-center justify-center text-primary-foreground shrink-0"
          style={{
            background:
              "linear-gradient(135deg, var(--rose), var(--rose-gold))",
          }}
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? "❚❚" : "▶"}
        </button>

        <div className="hidden sm:block">
          <p className="text-xs font-semibold leading-tight">Our Song</p>
          <p className="text-[10px] text-muted-foreground">
            Forever — You & Me
          </p>
        </div>

        <div className="flex items-end gap-[2px] h-6">
          {[0.4, 0.7, 1, 0.6, 0.85].map((h, i) => (
            <motion.span
              key={i}
              className="w-[3px] rounded-full origin-bottom"
              style={{ background: "var(--rose)", height: 22 }}
              animate={
                playing
                  ? { scaleY: [h, h * 0.3, h] }
                  : { scaleY: 0.2 }
              }
              transition={{
                repeat: playing ? Infinity : 0,
                duration: 0.7 + i * 0.1,
              }}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}