import { useEffect, useRef } from 'react'
import './StarField.css'

const STAR_COUNT = 220
const MIN_SHOT_GAP = 3500

function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width, height, stars
    let shootingStars = []
    let animationId
    let lastShot = 0

    function resize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.3 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.35,
        twinkleSpeed: Math.random() * 0.0018 + 0.0004,
        phase: Math.random() * Math.PI * 2,
      })).sort((a, b) => a.radius - b.radius)
    }

    function spawnShootingStar() {
      shootingStars.push({
        x: Math.random() * width * 0.6 + width * 0.2,
        y: -20,
        length: Math.random() * 70 + 60,
        speed: Math.random() * 5 + 7,
        angle: (Math.PI / 4) + (Math.random() * 0.3 - 0.15),
        life: 1,
      })
    }

    function draw(time) {
      ctx.clearRect(0, 0, width, height)

      for (const s of stars) {
        const twinkle = reduceMotion ? 0 : Math.sin(time * s.twinkleSpeed + s.phase) * 0.35
        const alpha = Math.min(1, Math.max(0.05, s.baseAlpha + twinkle))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(226, 232, 255, ${alpha})`
        ctx.fill()
      }

      if (!reduceMotion) {
        if (time - lastShot > MIN_SHOT_GAP + Math.random() * 4500) {
          spawnShootingStar()
          lastShot = time
        }

        shootingStars = shootingStars.filter((s) => s.life > 0 && s.y < height + 100)
        for (const s of shootingStars) {
          const dx = Math.cos(s.angle)
          const dy = Math.sin(s.angle)
          const tailX = s.x - dx * s.length
          const tailY = s.y - dy * s.length

          const gradient = ctx.createLinearGradient(s.x, s.y, tailX, tailY)
          gradient.addColorStop(0, `rgba(200, 214, 255, ${s.life})`)
          gradient.addColorStop(1, 'rgba(200, 214, 255, 0)')

          ctx.strokeStyle = gradient
          ctx.lineWidth = 1.6
          ctx.lineCap = 'round'
          ctx.beginPath()
          ctx.moveTo(s.x, s.y)
          ctx.lineTo(tailX, tailY)
          ctx.stroke()

          s.x += dx * s.speed
          s.y += dy * s.speed
          s.life -= 0.012
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    animationId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="starfield" aria-hidden="true">
      <div className="starfield__nebula starfield__nebula--one" />
      <div className="starfield__nebula starfield__nebula--two" />
      <canvas ref={canvasRef} className="starfield__canvas" />
    </div>
  )
}

export default StarField
