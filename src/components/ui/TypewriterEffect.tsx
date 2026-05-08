'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface TypewriterEffectSmoothProps {
  words: string[]
  className?: string
  cursorClassName?: string
}

export function TypewriterEffectSmooth({
  words,
  className,
  cursorClassName,
}: TypewriterEffectSmoothProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    const tick = () => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
          timeoutRef.current = setTimeout(tick, 80)
        } else {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), 2200)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
          timeoutRef.current = setTimeout(tick, 45)
        } else {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }

    timeoutRef.current = setTimeout(tick, 100)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className={`inline-block w-[2px] h-[1em] ml-1 align-middle ${cursorClassName ?? 'bg-white'}`}
      />
    </span>
  )
}
