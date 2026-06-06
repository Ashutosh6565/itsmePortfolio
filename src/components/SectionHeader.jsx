import { motion } from 'framer-motion'

const SectionHeader = ({ eyebrow, title, description, align = 'left' }) => (
  <motion.div
    data-reveal
    className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    initial={false}
  >
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.34em] text-cyan-200">{eyebrow}</p>
    <h2 className="text-balance text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
    {description && <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>}
  </motion.div>
)

export default SectionHeader
