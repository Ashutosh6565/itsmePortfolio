import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { Download, MapPin, Send } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { heroStats, profile, valuePillars } from '../data/portfolio'

const HeroScene = lazy(() => import('../components/HeroScene'))

const textReveal = {
  hidden: { y: 26, opacity: 0 },
  visible: (index) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.72, delay: index * 0.11, ease: [0.22, 1, 0.36, 1] },
  }),
}

const HeroSection = () => (
  <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
    <Suspense fallback={<div className="hero-scene" aria-hidden="true" />}>
      <HeroScene />
    </Suspense>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(124,58,237,0.24),transparent_34%),radial-gradient(circle_at_85%_15%,rgba(103,232,249,0.16),transparent_28%),linear-gradient(180deg,rgba(15,23,42,0.4),#0f172a_92%)]" />
    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 to-transparent" />

    <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
      <div className="max-w-4xl">
        <motion.p
          custom={0}
          variants={textReveal}
          initial="hidden"
          animate="visible"
          className="mb-5 inline-flex items-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.28em] text-cyan-100"
        >
          <MapPin className="h-4 w-4" />
          {profile.location}
        </motion.p>

        <motion.h1
          custom={1}
          variants={textReveal}
          initial="hidden"
          animate="visible"
          className="hero-title font-black leading-[0.98] text-white"
        >
          {profile.name.split(' ').map((part) => (
            <span key={part} className="block">
              {part}
            </span>
          ))}
        </motion.h1>

        <motion.div
          custom={2}
          variants={textReveal}
          initial="hidden"
          animate="visible"
          className="mt-5 text-2xl font-semibold text-cyan-200 sm:text-4xl"
        >
          {profile.role}
        </motion.div>

        <motion.p
          custom={3}
          variants={textReveal}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          custom={4}
          variants={textReveal}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Button as="a" href="#projects" showArrow>
            View Projects
          </Button>
          <Button as="a" href={profile.resumePath} variant="secondary" download={profile.resumeFileName}>
            <Download className="h-4 w-4" />
            Download Resume
          </Button>
          <Button as="a" href="#contact" variant="purple">
            <Send className="h-4 w-4" />
            Hire Me
          </Button>
        </motion.div>

        <motion.div
          custom={5}
          variants={textReveal}
          initial="hidden"
          animate="visible"
          className="hero-stats mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="rounded-md border border-white/10 bg-white/[0.055] p-4 backdrop-blur">
              <div className="text-2xl font-black text-white sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.aside
        data-reveal
        className="self-end rounded-md border border-white/10 bg-slate-900/58 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur-xl lg:mb-10"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-200">Available for</p>
            <h2 className="mt-2 text-2xl font-black text-white">Client builds and recruiter conversations</h2>
          </div>
          <span className="relative flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-300" />
          </span>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {valuePillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div key={pillar.label} className="flex items-center gap-3 rounded-md bg-white/[0.055] p-3">
                <Icon className="h-5 w-5 text-cyan-200" />
                <span className="text-sm font-semibold text-slate-200">{pillar.label}</span>
              </div>
            )
          })}
        </div>
      </motion.aside>
    </div>
  </section>
)

export default HeroSection
