'use client'

import { useEffect, useState } from 'react'

type TypingTextProps = {
  texts?: string[]
  className?: string
}

const DEFAULT_TEXTS = [
  'UI/UX Designer.',
  'Software Engineer.',
  'Full Stack Developer.',
  'Mobile Developer.',
]

const DEFAULT_TYPING_SPEED = 90
const DEFAULT_DELETING_SPEED = 55
const DEFAULT_PAUSE_MS = 1200

export const TypingText = ({ texts = DEFAULT_TEXTS }: TypingTextProps) => {
  const safeTexts = texts.length > 0 ? texts : DEFAULT_TEXTS
  const [textIndex, setTextIndex] = useState(0)
  const [visibleText, setVisibleText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = safeTexts[textIndex]
    const isDoneTyping = visibleText === currentText
    const isDoneDeleting = visibleText.length === 0
    const delay = isDoneTyping
      ? DEFAULT_PAUSE_MS
      : isDeleting
        ? DEFAULT_DELETING_SPEED
        : DEFAULT_TYPING_SPEED

    const timer = window.setTimeout(() => {
      if (!isDeleting && isDoneTyping) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && isDoneDeleting) {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % safeTexts.length)
        return
      }

      setVisibleText((prev) =>
        isDeleting
          ? currentText.slice(0, Math.max(prev.length - 1, 0))
          : currentText.slice(0, prev.length + 1),
      )
    }, delay)

    return () => window.clearTimeout(timer)
  }, [isDeleting, safeTexts, textIndex, visibleText])

  return (
    <span className={`text-ink font-semibold`}>
      {visibleText}
      <span className="text-muted ml-0.5 inline-block animate-pulse">|</span>
    </span>
  )
}
