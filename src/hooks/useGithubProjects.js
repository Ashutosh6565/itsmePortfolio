import { useEffect, useMemo, useState } from 'react'
import { fallbackProjects, profile } from '../data/portfolio'
import { normalizeRepo } from '../lib/utils'

const GITHUB_REPOS_URL = `https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=updated`

export const useGithubProjects = () => {
  const [repos, setRepos] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    const loadRepos = async () => {
      try {
        setStatus('loading')
        const response = await fetch(GITHUB_REPOS_URL, {
          signal: controller.signal,
          headers: {
            Accept: 'application/vnd.github+json',
          },
        })

        if (!response.ok) {
          throw new Error(`GitHub API returned ${response.status}`)
        }

        const data = await response.json()
        const publicRepos = data
          .filter((repo) => !repo.fork && !repo.archived)
          .map(normalizeRepo)

        setRepos(publicRepos.length ? publicRepos : fallbackProjects.map(normalizeRepo))
        setStatus('success')
      } catch (err) {
        if (err.name === 'AbortError') return
        setError(err.message)
        setRepos(fallbackProjects.map(normalizeRepo))
        setStatus('fallback')
      }
    }

    loadRepos()

    return () => controller.abort()
  }, [])

  const stats = useMemo(() => {
    const languages = repos.reduce((acc, repo) => {
      const language = repo.language || 'Web'
      acc[language] = (acc[language] || 0) + 1
      return acc
    }, {})

    return {
      total: repos.length,
      featured: repos.filter((repo) => repo.featured).length,
      stars: repos.reduce((sum, repo) => sum + Number(repo.stargazers_count || 0), 0),
      forks: repos.reduce((sum, repo) => sum + Number(repo.forks_count || 0), 0),
      languages: Object.entries(languages)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6),
    }
  }, [repos])

  return { repos, status, error, stats }
}
