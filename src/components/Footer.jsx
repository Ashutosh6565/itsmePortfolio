import { ArrowUp } from 'lucide-react'
import { profile, socialLinks } from '../data/portfolio'

const Footer = () => (
  <footer className="border-t border-white/10 bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
    <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-black text-white">{profile.name}</p>
        <p className="mt-1 text-sm text-slate-400">Full Stack Developer - Noida, India</p>
      </div>
      <div className="flex items-center gap-3">
        {socialLinks.slice(0, 3).map((social) => {
          const Icon = social.icon
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/[0.045] text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-200"
            >
              <Icon className="h-4 w-4" />
            </a>
          )
        })}
        <a
          href="#home"
          aria-label="Back to top"
          className="grid h-10 w-10 place-items-center rounded-md bg-cyan-300 text-slate-950 transition hover:bg-cyan-200"
        >
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
