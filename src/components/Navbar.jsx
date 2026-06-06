import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems, profile } from '../data/portfolio'
import { cn } from '../lib/utils'
import { Button } from './ui/Button'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition duration-300',
        scrolled
          ? 'border-b border-white/10 bg-slate-950/78 shadow-2xl shadow-slate-950/30 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
          <span className="h-10 w-10 overflow-hidden rounded-md border border-cyan-300/30 bg-cyan-300 shadow-[0_12px_38px_rgba(103,232,249,0.24)]">
            <img src={profile.imagePath} alt="" className="h-full w-full object-cover" />
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-white">{profile.name}</span>
            <span className="block text-xs text-slate-400">{profile.role}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex xl:hidden">
          {navItems.slice(0, 5).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            as="a"
            href="#contact"
            variant="secondary"
            size="sm"
            className="hidden sm:inline-flex"
            showArrow
          >
            Hire Me
          </Button>
          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-white backdrop-blur transition hover:border-cyan-300/60 md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="border-t border-white/10 bg-slate-950/96 px-4 pb-5 pt-2 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-md px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
