import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, GitFork, Loader2, Search, Star } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import { Button } from '../components/ui/Button'
import { projectCategories } from '../data/portfolio'
import { cn, formatDate } from '../lib/utils'

const ProjectCard = ({ project }) => {
  const topics = project.topics?.slice(0, 4) || []

  return (
    <motion.article
      data-reveal
      className="project-card group"
      whileHover={{ y: -9 }}
      transition={{ duration: 0.24 }}
      data-cursor
    >
      <div className="project-image">
        <div className="project-image-grid" />
        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-100">{project.category}</p>
          <h3 className="mt-3 text-3xl font-black text-white">{project.name}</h3>
        </div>
        {project.featured && (
          <span className="absolute right-4 top-4 rounded-md bg-amber-300 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-slate-950">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="line-clamp-4 text-sm leading-7 text-slate-300">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {[project.language, ...topics].filter(Boolean).slice(0, 5).map((tech) => (
            <span key={tech} className="rounded-md border border-white/10 bg-white/[0.055] px-2.5 py-1 text-xs font-semibold text-slate-200">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-4 text-xs text-slate-400">
          <span>Updated {formatDate(project.updated_at)}</span>
          <span className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <Star className="h-3.5 w-3.5" />
              {project.stargazers_count || 0}
            </span>
            <span className="inline-flex items-center gap-1">
              <GitFork className="h-3.5 w-3.5" />
              {project.forks_count || 0}
            </span>
          </span>
        </div>

        <div className="mt-6 flex gap-3">
          {project.homepage && (
            <Button as="a" href={project.homepage} target="_blank" rel="noreferrer" size="sm">
              <ExternalLink className="h-4 w-4" />
              Live
            </Button>
          )}
          <Button as="a" href={project.html_url} target="_blank" rel="noreferrer" variant="secondary" size="sm">
            <FaGithub className="h-4 w-4" />
            GitHub
          </Button>
        </div>
      </div>
    </motion.article>
  )
}

const ProjectsSection = ({ repos, status, error }) => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return repos.filter((repo) => {
      const matchesCategory = activeCategory === 'All' || repo.category === activeCategory
      const matchesQuery =
        !normalizedQuery ||
        [repo.name, repo.description, repo.language, ...(repo.topics || [])]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery)
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query, repos])

  return (
    <section id="projects" className="section-wrap">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            eyebrow="Projects"
            title="Every public GitHub project, shaped into client-ready case cards."
            description="The grid fetches Ashutosh6565 repositories automatically, filters by useful portfolio categories, and generates stronger descriptions when repository metadata is thin."
          />

          <div data-reveal className="rounded-md border border-white/10 bg-slate-900/56 p-4">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search projects, tech, or category"
                className="h-12 w-full rounded-md border border-white/10 bg-slate-950/70 pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70"
              />
            </label>
            <div className="mt-3 flex flex-wrap gap-2">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    'rounded-md border px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] transition',
                    activeCategory === category
                      ? 'border-cyan-300 bg-cyan-300 text-slate-950'
                      : 'border-white/10 bg-white/[0.045] text-slate-300 hover:border-cyan-300/60 hover:text-white',
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div data-reveal className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-400">
          {status === 'loading' && (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Fetching GitHub repositories
            </span>
          )}
          {status === 'fallback' && <span>GitHub API fallback active: {error}</span>}
          {status === 'success' && <span>Showing live public repositories from GitHub.</span>}
          <span>{filteredProjects.length} project cards visible</span>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
