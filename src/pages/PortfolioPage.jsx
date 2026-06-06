import { Suspense, lazy } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useCursorFollower } from '../hooks/useCursorFollower'
import { useGithubProjects } from '../hooks/useGithubProjects'
import { useGsapAnimations } from '../hooks/useGsapAnimations'
import { useLenisScroll } from '../hooks/useLenisScroll'
import AboutSection from '../sections/AboutSection'
import ContactSection from '../sections/ContactSection'
import ExperienceSection from '../sections/ExperienceSection'
import GithubStatsSection from '../sections/GithubStatsSection'
import HeroSection from '../sections/HeroSection'
import ProjectsSection from '../sections/ProjectsSection'
import ServicesSection from '../sections/ServicesSection'
import SkillsSection from '../sections/SkillsSection'

const TestimonialsSection = lazy(() => import('../sections/TestimonialsSection'))

const PortfolioPage = () => {
  const github = useGithubProjects()
  useLenisScroll()
  useGsapAnimations()
  useCursorFollower()

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="cursor-dot" />
      <div className="cursor-follower" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ServicesSection />
        <ProjectsSection repos={github.repos} status={github.status} error={github.error} />
        <GithubStatsSection stats={github.stats} />
        <Suspense fallback={<div className="section-wrap" />}>
          <TestimonialsSection />
        </Suspense>
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default PortfolioPage
