import { useEffect, useState } from 'react'

export function useTypewriter(lines, { speed = 55, startDelay = 300, pauseBetween = 200 } = {}) {
  const [outputs, setOutputs] = useState(lines.map(() => ''))
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOutputs(lines)
      setActiveIndex(lines.length)
      return
    }

    let cancelled = false
    const timeouts = []

    function typeLine(lineIndex, charIndex) {
      if (cancelled || lineIndex >= lines.length) return

      const line = lines[lineIndex]
      if (charIndex <= line.length) {
        setOutputs(prev => {
          const next = [...prev]
          next[lineIndex] = line.slice(0, charIndex)
          return next
        })
        timeouts.push(setTimeout(() => typeLine(lineIndex, charIndex + 1), speed))
      } else {
        setActiveIndex(lineIndex + 1)
        timeouts.push(setTimeout(() => typeLine(lineIndex + 1, 0), pauseBetween))
      }
    }

    timeouts.push(setTimeout(() => typeLine(0, 0), startDelay))

    return () => {
      cancelled = true
      timeouts.forEach(clearTimeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { outputs, activeIndex, isDone: activeIndex >= lines.length }
}
