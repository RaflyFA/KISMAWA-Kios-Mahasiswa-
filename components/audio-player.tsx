"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const attemptPlay = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
          })
          .catch((err) => {
            console.warn("Audio play prevented by browser policy:", err)
            setIsPlaying(false)
          })
      }
    }
  }

  useEffect(() => {
    // Attempt play on mount
    attemptPlay()

    // Fallback: start on first click/tap anywhere on the window if autoplay was blocked
    const handleFirstUserInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        attemptPlay()
      }
    }

    window.addEventListener("click", handleFirstUserInteraction, { once: true })
    window.addEventListener("touchstart", handleFirstUserInteraction, { once: true })

    return () => {
      window.removeEventListener("click", handleFirstUserInteraction)
      window.removeEventListener("touchstart", handleFirstUserInteraction)
    }
  }, [])

  const toggleSound = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.volume = 0.6
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
          })
          .catch((err) => {
            console.error("Error playing audio on button click:", err)
          })
      }
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/sound.mpeg" type="audio/mpeg" />
        <source src="/sound.mpeg" type="audio/mp3" />
        <source src="/sound.mpeg" type="audio/x-mpeg" />
      </audio>

      <button
        onClick={toggleSound}
        type="button"
        aria-label={isPlaying ? "Matikan Musik" : "Putar Musik"}
        title={isPlaying ? "Matikan Musik Background" : "Putar Musik Background"}
        className="relative z-50 group flex items-center justify-center p-2.5 rounded-full bg-[#2d496a]/85 hover:bg-[#2d496a] backdrop-blur-md border border-white/50 text-white shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#00ced0]"
      >
        {/* Dynamic Sound Wave Pulse Ring when active */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-40 pointer-events-none" />
        )}

        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-white transition-transform duration-200 group-hover:scale-110" />
        ) : (
          <VolumeX className="w-5 h-5 text-white/80 transition-transform duration-200 group-hover:scale-110" />
        )}
      </button>
    </>
  )
}
