import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const PortfolioPage = lazy(() => import('./pages/PortfolioPage'))

const Loader = () => (
  <div className="grid min-h-screen place-items-center bg-slate-950 text-slate-100">
    <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-cyan-200">
      <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
      Loading portfolio
    </div>
  </div>
)

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="*"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <PortfolioPage />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </Suspense>
  </BrowserRouter>
)

export default App
