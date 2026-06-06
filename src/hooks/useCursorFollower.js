import { useEffect } from 'react'
import gsap from 'gsap'

export const useCursorFollower = () => {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (reduceMotion || !finePointer) return undefined

    const cursor = document.querySelector('.cursor-dot')
    const follower = document.querySelector('.cursor-follower')
    if (!cursor || !follower) return undefined

    const setCursorX = gsap.quickTo(cursor, 'left', { duration: 0.12, ease: 'power2.out' })
    const setCursorY = gsap.quickTo(cursor, 'top', { duration: 0.12, ease: 'power2.out' })
    const setFollowerX = gsap.quickTo(follower, 'x', { duration: 0.35, ease: 'power3.out' })
    const setFollowerY = gsap.quickTo(follower, 'y', { duration: 0.35, ease: 'power3.out' })

    const move = (event) => {
      setCursorX(event.clientX)
      setCursorY(event.clientY)
      setFollowerX(event.clientX)
      setFollowerY(event.clientY)
    }

    const enter = () => follower.classList.add('is-active')
    const leave = () => follower.classList.remove('is-active')

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, input, textarea, [data-cursor]').forEach((element) => {
      element.addEventListener('mouseenter', enter)
      element.addEventListener('mouseleave', leave)
    })

    return () => {
      document.removeEventListener('mousemove', move)
      document.querySelectorAll('a, button, input, textarea, [data-cursor]').forEach((element) => {
        element.removeEventListener('mouseenter', enter)
        element.removeEventListener('mouseleave', leave)
      })
    }
  }, [])
}
