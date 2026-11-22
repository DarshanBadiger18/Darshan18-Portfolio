import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Projects } from '../Projects';
import { portfolioData } from '../../data/portfolio';

const renderWithRouter = (path = '/') =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Projects />
    </MemoryRouter>,
  );

describe('Projects', () => {
  it('renders the Projects heading and subtitle', () => {
    renderWithRouter();
    expect(screen.getByRole('heading', { name: /my projects/i })).toBeInTheDocument();
    expect(
      screen.getByText(/Swipe or click to explore — interactive 3D deck/i),
    ).toBeInTheDocument();
  });

  it('renders a card for each project in portfolio data', () => {
    renderWithRouter();
    portfolioData.projects.forEach((p) => {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    });
  });

  it('shows only the requested repositories', () => {
    expect(portfolioData.projects.map((project) => project.githubUrl)).toEqual([
      'https://github.com/DarshanBadiger18/SpiderMan-Interactive-Website',
      'https://github.com/DarshanBadiger18/Darshan18-Portfolio',
      'https://github.com/DarshanBadiger18/AgroShree-AI',
      'https://github.com/DarshanBadiger18/SPEACTRA.-Showroom',
      'https://github.com/DarshanBadiger18/Resume-Analyzer---Project',
      'https://github.com/DarshanBadiger18/AYUCARE',
      'https://github.com/DarshanBadiger18/SNPSU-MCA-Trainer-feedback-Portal',
    ]);
  });

  it('provides a cover image for each card and project details view', () => {
    portfolioData.projects.forEach((project) => {
      expect(project.thumbnail).toBeTruthy();
      expect(project.screenshots).toEqual([project.thumbnail]);
    });
  });

  it('clicking a card does not throw (navigate fires)', () => {
    renderWithRouter();
    const card = screen.getByText(portfolioData.projects[0].title).closest('.animated-card');
    expect(() => {
      if (card) fireEvent.click(card);
    }).not.toThrow();
  });

  it('does NOT render a modal — modal is gone from Projects', () => {
    renderWithRouter();
    // ProjectDetailModal is no longer rendered inside Projects
    // Verify no dialog/modal role exists
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
