import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Experience } from '../Experience';

describe('Experience', () => {
  it('shows Darshan’s 2025 Python full-stack internship and its technologies', () => {
    render(<Experience />);

    expect(screen.getByText('Python Full Stack Development Intern')).toBeInTheDocument();
    expect(screen.getByText('Innovatum Engineering & Technology LLP')).toBeInTheDocument();
    expect(screen.getByText('Vijayapura')).toBeInTheDocument();
    expect(screen.getByText('2025')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /show more/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /show more/i }));

    expect(screen.getByText('Technologies Used')).toBeInTheDocument();
    expect(screen.getByText('Django')).toBeInTheDocument();
    expect(screen.getByText('Java')).toBeInTheDocument();
  });
});
