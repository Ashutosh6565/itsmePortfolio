import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { services } from '../data/portfolio'

const ServicesSection = () => (
  <section id="services" className="section-wrap section-muted">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Services"
        title="Client-oriented development services."
        description="Focused development help for founders, agencies, and teams that need practical web applications rather than generic portfolio pieces."
        align="center"
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.article
              data-reveal
              key={service.title}
              className="service-card"
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-md bg-white/[0.075] text-cyan-200">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-black text-white/28">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-xl font-black text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
            </motion.article>
          )
        })}
      </div>
    </div>
  </section>
)

export default ServicesSection
