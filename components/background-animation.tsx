'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const columns = Math.floor(width / 30)
    const raindrops: number[] = new Array(columns).fill(0).map(() => Math.random() * -100)
    
    const charList = [
      'func', 'struct', 'interface', 'package', 'type', 'go', 'nil', 'err',
      'const', 'export', 'await', 'async', 'import', 'return', 'class',
      '<div>', '</div>', '=>', 'null', 'undefined', 'true', 'false',
      '{', '}', '[', ']', '(', ')', '&&', '||', '!', '?', ':', ';',
      'npm', 'git', 'docker', 'run', 'push', 'pull', 'commit', 'deploy'
    ]

    const draw = () => {
      // Create a trail effect
      ctx.fillStyle = theme === 'dark' ? 'rgba(10, 10, 15, 0.1)' : 'rgba(255, 255, 255, 0.1)'
      ctx.fillRect(0, 0, width, height)

      ctx.textAlign = 'left'
      ctx.font = '12px "JetBrains Mono", monospace'

      for (let i = 0; i < raindrops.length; i++) {
        const x = i * 30
        const y = raindrops[i] * 18

        // Randomly pick a snippet
        const snippet = charList[Math.floor(Math.random() * charList.length)]
        
        // Calculate distance from mouse for highlight effect
        const dx = x - mouseRef.current.x
        const dy = y - mouseRef.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const spotlight = Math.max(0, 1 - dist / 300)

        // Color logic
        if (theme === 'dark') {
          const baseOpacity = 0.15 + (spotlight * 0.25)
          ctx.fillStyle = `rgba(34, 197, 94, ${baseOpacity})` // Vivid green
        } else {
          const baseOpacity = 0.08 + (spotlight * 0.15)
          ctx.fillStyle = `rgba(0, 0, 0, ${baseOpacity})`
        }

        ctx.fillText(snippet, x, y)

        if (y > height && Math.random() > 0.98) {
          raindrops[i] = 0
        }

        raindrops[i]++
      }
    }

    const interval = setInterval(draw, 50)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      const newCols = Math.floor(width / 30)
      raindrops.length = newCols
      for(let i=0; i<newCols; i++) if(raindrops[i] === undefined) raindrops[i] = 0
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [theme])

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-background">
      {/* Technical Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Programming Rain - Boosted Opacity */}
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-100"
      />

      {/* Vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--background),0.3)_100%)]" />
    </div>
  )
}
