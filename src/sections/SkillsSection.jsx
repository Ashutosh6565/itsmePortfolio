import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { skillGroups } from '../data/portfolio'

const SkillsSection = () => (
  <section id="skills" className="section-wrap section-muted">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Skills"
        title="Technology stack for polished full stack delivery."
        description="The stack is tuned for modern web products: React interfaces, Node/Express APIs, database-backed flows, and the everyday tooling needed to ship cleanly."
        align="center"
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {skillGroups.map((group) => {
          const GroupIcon = group.icon
          return (
            <motion.article
              data-reveal
              key={group.name}
              className="rounded-md border border-white/10 bg-slate-950/58 p-5 backdrop-blur"
              whileHover={{ y: -7 }}
              transition={{ duration: 0.24 }}
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-cyan-300/12 text-cyan-200">
                  <GroupIcon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-black text-white">{group.name}</h3>
              </div>

              <div className="mt-6 grid gap-5">
                {group.skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-3">
                          <Icon className="h-5 w-5 shrink-0 text-amber-200" />
                          <span className="truncate text-sm font-semibold text-slate-200">{skill.name}</span>
                        </div>
                        <span className="text-xs font-bold text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-white/[0.075]">
                        <div
                          data-progress={skill.level}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-amber-300"
                          style={{ width: 0 }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.article>
          )
        })}
      </div>
    </div>
  </section>
)

export default SkillsSection
