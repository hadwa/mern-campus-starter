import { render, screen } from '@testing-library/react'
import PerkForm from '../pages/PerkForm.jsx'
import { MemoryRouter } from 'react-router-dom'

test('renders create perk form', () => {
  render(<MemoryRouter><PerkForm /></MemoryRouter>)
  expect(screen.getByText(/create perk/i)).toBeInTheDocument()
  expect(screen.getByPlaceholderText(/title/i)).toBeInTheDocument()
})
