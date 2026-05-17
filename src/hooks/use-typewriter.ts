import { useEffect, useState } from "react"

export function useTypewriter(
  words: string[],
  typingSpeed = 100,
  pauseMs = 2200
) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (typingSpeed <= 0 || words.length === 0) return

    const current = words[wordIndex] ?? ""

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          const next = current.slice(0, text.length + 1)
          setText(next)
          if (next === current) {
            window.setTimeout(() => setIsDeleting(true), pauseMs)
          }
        } else {
          const next = current.slice(0, text.length - 1)
          setText(next)
          if (next === "") {
            setIsDeleting(false)
            setWordIndex((i) => (i + 1) % words.length)
          }
        }
      },
      isDeleting ? typingSpeed / 2 : typingSpeed
    )

    return () => window.clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, pauseMs])

  return text
}
