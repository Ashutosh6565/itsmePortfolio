import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useGsapAnimations = () => {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return undefined

    const context = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 42 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 82%',
            },
          },
        )
      })

      gsap.utils.toArray('[data-parallax]').forEach((element) => {
        gsap.to(element, {
          yPercent: -18,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })

      gsap.utils.toArray('[data-progress]').forEach((bar) => {
        const width = bar.getAttribute('data-progress')
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: `${width}%`,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 90%',
            },
          },
        )
      })
    })

    return () => context.revert()
  }, [])
}
