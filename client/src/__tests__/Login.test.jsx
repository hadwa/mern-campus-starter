import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Login from '../pages/Login.jsx'
import { useAuth } from '../hooks/useAuth'

vi.mock('../hooks/useAuth')

test('login shows error on failure', async () => {
  useAuth.mockReturnValue({ login: vi.fn(() => Promise.reject({ response: { data: { message: 'Invalid credentials' }}})) })
  render(<MemoryRouter><Login /></MemoryRouter>)
  fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'x@x.com' } })
  fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'bad' } })
  fireEvent.submit(screen.getByRole('button', { name: /login/i }))
  await waitFor(() => expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument())
})
