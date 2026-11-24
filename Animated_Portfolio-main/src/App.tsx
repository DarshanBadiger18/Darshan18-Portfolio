import React, { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import {
  LoadingScreen,
  Hero,
  Skills,
  Education,
  Experience,
  Projects,
  Contact,
  Certification,
  Sidebar,
  MobileNav,
  About,
} from './components';
const ThreeDBackground = lazy(() =>
  import('./components/ThreeDBackground').then((m) => ({ default: m.ThreeDBackground })),
);
const ResumeModal = lazy(() =>
  import('./components/ResumeModal').then((m) => ({ default: m.ResumeModal })),
);
const ProjectDetailModal = lazy(() =>
  import('./components/ProjectDetailModal').then((m) => ({ default: m.ProjectDetailModal })),
);
import { useLenis } from './hooks';
import type { Project } from './data';

function PortfolioHome() {
  const navigate = useNavigate();
  const location = useLocation();
  const isThreeDBackgroundEnabled = false;

  const isOnResumePage = location.pathname === '/resume';

  // ── resume modal ─────────────────────────────────────
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(isOnResumePage);
  const openResume = () => {
    setIsResumeOpen(true);
    if (!isOnResumePage) navigate('/resume');
  };
  const closeResume = () => {
    setIsResumeOpen(false);
    if (isOnResumePage) navigate('/');
  };

  // ── project modal — lifted from Projects.tsx ─────────
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Scroll to #projects then open modal after scroll settles
  const openProject = (project: Project) => {
    const section = document.getElementById('projects');
    if (!section) {
      setSelectedProject(project);
      return;
    }

    section.scrollIntoView({ behavior: 'smooth' });

    // Wait for scroll to finish (~800ms) then open modal
    setTimeout(() => setSelectedProject(project), 850);
  };

  return (
    <>
      <Suspense
        fallback={
          <div className="fixed inset-0 z-0 bg-[linear-gradient(135deg,#090909_0%,#1f1f1f_55%,#0d0d0d_100%)]" />
        }
      >
        {/* Temporary matte background mode: 3D backdrop is disabled for now. */}
        {isThreeDBackgroundEnabled ? (
          <ThreeDBackground />
        ) : (
          <div className="fixed inset-0 z-0 bg-[linear-gradient(135deg,#090909_0%,#1f1f1f_55%,#0d0d0d_100%)]" />
        )}
      </Suspense>
      <Sidebar />
      <MobileNav />

      <main className="relative z-10">
        {/* Hero gets openProject so orbit icons can trigger modal */}
        <section id="home">
          <Hero onResumeClick={openResume} onProjectClick={openProject} />
        </section>

        <About />
        <Skills />
        <Experience />
        <Education />

        {/* Projects gets openProject so cards still work too */}
        <Projects onProjectClick={openProject} />

        <section id="certification">
          <Certification />
        </section>
        <Contact />

        {/* --- Persistent Footer Attribution --- */}
        <footer className="w-full py-6 text-center text-xs text-white/40 theme-panel border-x-0 border-b-0 relative z-10 flex flex-col items-center gap-1">
          <p>© {new Date().getFullYear()} Darshan Badiger. All rights reserved.</p>
          <p>
            Designed & Built by{' '}
            <a
              href="https://github.com/DarshanBadiger18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-red-300 transition-colors"
            >
              DarshanBadiger18
            </a>
          </p>
        </footer>
      </main>

      {/* Resume modal */}
      <Suspense fallback={null}>
        <ResumeModal isOpen={isResumeOpen} onClose={closeResume} />
      </Suspense>

      {/* Project modal — single source of truth, lives here */}
      <Suspense fallback={null}>
        <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </Suspense>
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasValidToken, setHasValidToken] = useState<boolean>(false);

  useLenis();

  useEffect(() => {
    const existing = localStorage.getItem('portfolioToken');
    if (existing) {
      setHasValidToken(true);
      setIsLoading(false);
    }
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleLoadingComplete = () => {
    const token = `portfolio_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('portfolioToken', token);
    setHasValidToken(true);
    setTimeout(() => setIsLoading(false), 50);
  };

  return (
    <>
      {hasValidToken && (
        <div className="relative">
          <Routes>
            <Route path="/" element={<PortfolioHome />} />
            <Route path="/resume" element={<PortfolioHome />} />
          </Routes>
        </div>
      )}
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loading" onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      {/* ── Portfolio attribution watermark — required by LICENSE ──────────── */}
      {/* Author: Darshan Badiger | https://github.com/DarshanBadiger18 */}
      <span
        aria-hidden="true"
        data-portfolio-author="Darshan Badiger"
        data-portfolio-github="DarshanBadiger18"
        data-portfolio-origin="https://github.com/DarshanBadiger18"
        data-portfolio-license="Attribution required"
        style={{
          display: 'none',
          visibility: 'hidden',
          position: 'absolute',
          pointerEvents: 'none',
        }}
      />
      {/* ───────────────────────────────────────────────────────────────────── */}
    </>
  );
}

export { App };
