import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs) => twMerge(clsx(inputs))

export const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))

export const titleFromRepo = (name = '') =>
  name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim()

const categoryRules = [
  { category: 'AI Projects', terms: ['ai', 'ml', 'openai', 'chatbot', 'gpt', 'machine-learning'] },
  { category: 'Full Stack', terms: ['fullstack', 'full-stack', 'mern', 'dashboard', 'ecommerce', 'app'] },
  { category: 'Backend', terms: ['api', 'server', 'backend', 'express', 'node', 'mongodb'] },
  { category: 'React', terms: ['react', 'vite', 'next', 'frontend'] },
  { category: 'Frontend', terms: ['html', 'css', 'javascript', 'landing', 'portfolio', 'ui'] },
]

export const inferCategory = (repo) => {
  const haystack = [
    repo.name,
    repo.description,
    repo.language,
    ...(repo.topics || []),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()

  return categoryRules.find(({ terms }) => terms.some((term) => haystack.includes(term)))?.category || 'Frontend'
}

export const professionalDescription = (repo) => {
  if (repo.description) return repo.description

  const title = titleFromRepo(repo.name)
  const category = inferCategory(repo)

  const descriptions = {
    'AI Projects': `${title} explores AI-assisted workflows with practical interfaces, clean data handling, and production-minded user flows.`,
    'Full Stack': `${title} is a full stack web application with connected frontend and backend flows, built for practical business use.`,
    Backend: `${title} focuses on backend architecture, API behavior, service integration, and reliable server-side logic.`,
    React: `${title} is a React-based interface focused on responsive layouts, component reuse, and smooth product interactions.`,
    Frontend: `${title} is a polished frontend project with responsive UI, accessible structure, and modern browser-ready implementation.`,
  }

  return descriptions[category]
}

export const normalizeRepo = (repo, index = 0) => ({
  ...repo,
  id: repo.id || repo.name,
  name: titleFromRepo(repo.name),
  rawName: repo.name,
  description: professionalDescription(repo),
  category: repo.category || inferCategory(repo),
  featured:
    repo.featured ??
    (index < 6 ||
      Number(repo.stargazers_count || 0) > 0 ||
      Boolean(repo.homepage)),
  topics: repo.topics || [],
  language: repo.language || 'Web',
})

export const createGithubStatsUrl = (username) =>
  `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0F172A&title_color=67E8F9&text_color=F8FAFC&icon_color=A78BFA`

export const createTopLanguagesUrl = (username) =>
  `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0F172A&title_color=67E8F9&text_color=F8FAFC`
