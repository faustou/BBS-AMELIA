import { useState, useEffect } from 'react'
import styles from './InvitationSection.module.css'

// Ajustá estas rutas a donde tengas guardadas tus imágenes
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'

interface BearSVGProps {
  intervalMs?: number // cada cuánto alterna, en milisegundos
}

export default function BearSVG({ intervalMs = 1500 }: BearSVGProps) {
  const [showSecond, setShowSecond] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecond(prev => !prev)
    }, intervalMs)
    return () => clearInterval(interval)
  }, [intervalMs])

  return (
    <div
      className={styles.bearContainer}
      style={{
        background: 'transparent',
        border: 'none',
        boxShadow: 'none',
        borderRadius: 0,
        padding: 0,
      }}
    >
      <img
        src={image1}
        alt="Imagen 1"
        className={styles.bear}
        style={{
          opacity: showSecond ? 0 : 1,
          background: 'transparent',
          border: 'none',
          boxShadow: 'none',
          borderRadius: 0,
          objectFit: 'contain',
          width: '100%',
          height: '100%',
          transition: 'opacity 0.6s ease',
        }}
      />
      <img
        src={image2}
        alt="Imagen 2"
        className={styles.bear}
        style={{
          opacity: showSecond ? 1 : 0,
          position: 'absolute',
          top: 0,
          left: 0,
          background: 'transparent',
          border: 'none',
          boxShadow: 'none',
          borderRadius: 0,
          objectFit: 'contain',
          width: '100%',
          height: '100%',
          transition: 'opacity 0.6s ease',
        }}
      />
    </div>
  )
}