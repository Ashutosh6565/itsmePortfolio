import { CheckCircle2 } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { experience } from '../data/portfolio'

const ExperienceSection = () => (
  <section id="experience" className="section-wrap">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader
          eyebrow="Experience"
          title="Professional work shaped around delivery."
          description="Hands-on full stack experience with client-facing builds, frontend refinement, API integration, and maintainable implementation patterns."
        />

        <div className="space-y-5">
          {experience.map((item) => (
            <article data-reveal key={item.company} className="experience-card">
              <div className="flex flex-col justify-between gap-4 sm:flex-row">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.26em] text-cyan-200">{item.period}</p>
                  <h3 className="mt-3 text-2xl font-black text-white">{item.role}</h3>
                  <p className="mt-1 text-slate-300">
                    {item.company} - {item.location}
                  </p>
                </div>
                <span className="self-start rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
                  Current Focus
                </span>
              </div>

              <ul className="mt-6 grid gap-4">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-200" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default ExperienceSection
