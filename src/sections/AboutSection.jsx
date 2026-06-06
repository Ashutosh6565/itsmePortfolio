import { motion } from 'framer-motion'
import { Code2, MapPinned, Sparkles } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { education, profile, processSteps } from '../data/portfolio'

const AboutSection = () => (
  <section id="about" className="section-wrap">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <div data-reveal className="relative">
        <div className="profile-frame">
          <div className="profile-avatar">
            <img
              src={profile.resumeSnapshotPath}
              alt={`${profile.name} profile`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-md border border-white/10 bg-slate-950/70 p-4 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-200">Resume Snapshot</p>
            <p className="mt-2 text-sm leading-6 text-slate-200">{profile.summary}</p>
          </div>
        </div>
      </div>

      <div>
        <SectionHeader
          eyebrow="About"
          title="A full stack developer who keeps product quality visible."
          description="I build web applications that feel crisp on the frontend and dependable behind the scenes. The focus is practical: clean interfaces, understandable APIs, responsive layouts, and work that clients can maintain after launch."
        />

        <div data-reveal className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Code2, label: 'Frontend and backend ownership' },
            { icon: Sparkles, label: 'Animated premium interfaces' },
            { icon: MapPinned, label: `Based in ${profile.location}` },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="rounded-md border border-white/10 bg-white/[0.045] p-4">
                <Icon className="h-5 w-5 text-amber-200" />
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-200">{item.label}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {education.map((item, index) => (
            <motion.div
              data-reveal
              key={item.title}
              className="rounded-md border border-white/10 bg-slate-900/58 p-5"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <span className="text-sm font-black text-cyan-200">0{index + 1}</span>
              <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="timeline-grid">
        {processSteps.map((step, index) => (
          <div data-reveal key={step.title} className="timeline-card">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default AboutSection
