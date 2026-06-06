import { Activity, Code2, GitFork, Star } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import { Button } from '../components/ui/Button'
import { profile } from '../data/portfolio'
import { createGithubStatsUrl, createTopLanguagesUrl } from '../lib/utils'

const GithubStatsSection = ({ stats }) => {
  const statCards = [
    { label: 'Repositories', value: stats.total, icon: FaGithub },
    { label: 'Featured Cards', value: stats.featured, icon: Activity },
    { label: 'Stars', value: stats.stars, icon: Star },
    { label: 'Forks', value: stats.forks, icon: GitFork },
  ]

  return (
    <section id="github" className="section-wrap section-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              eyebrow="GitHub Stats"
              title="Live development signal from public repositories."
              description="Repository cards and summary metrics update from GitHub so the portfolio stays current as new projects are published."
            />
            <div data-reveal className="mt-8 grid grid-cols-2 gap-3">
              {statCards.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="rounded-md border border-white/10 bg-slate-950/58 p-4">
                    <Icon className="h-5 w-5 text-cyan-200" />
                    <div className="mt-4 text-3xl font-black text-white">{item.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{item.label}</div>
                  </div>
                )
              })}
            </div>
            <div data-reveal className="mt-5 rounded-md border border-white/10 bg-slate-950/58 p-5">
              <div className="flex items-center gap-3">
                <Code2 className="h-5 w-5 text-amber-200" />
                <h3 className="font-black text-white">Top languages in fetched repos</h3>
              </div>
              <div className="mt-5 grid gap-3">
                {stats.languages.map(([language, count]) => (
                  <div key={language} className="flex items-center justify-between gap-4 rounded-md bg-white/[0.045] px-3 py-2">
                    <span className="text-sm font-semibold text-slate-200">{language}</span>
                    <span className="text-xs font-bold text-cyan-200">{count} repos</span>
                  </div>
                ))}
              </div>
              <Button as="a" href={profile.github} target="_blank" rel="noreferrer" variant="secondary" className="mt-5" showArrow>
                Open GitHub
              </Button>
            </div>
          </div>

          <div className="grid gap-5">
            <div data-reveal className="github-visual-card">
              <img loading="lazy" src={createGithubStatsUrl(profile.githubUser)} alt={`${profile.name} GitHub statistics`} />
            </div>
            <div data-reveal className="github-visual-card">
              <img loading="lazy" src={createTopLanguagesUrl(profile.githubUser)} alt={`${profile.name} top GitHub languages`} />
            </div>
            <div data-reveal className="github-visual-card">
              <img
                loading="lazy"
                src={`https://ghchart.rshah.org/67e8f9/${profile.githubUser}`}
                alt={`${profile.name} GitHub contribution graph`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GithubStatsSection
