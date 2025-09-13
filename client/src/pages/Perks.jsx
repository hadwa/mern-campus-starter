import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../api'

export default function Perks() {
  const [perks, setPerks] = useState([])
  const [q, setQ] = useState('')
  const [min, setMin] = useState('')

  async function load() {
    const res = await api.get('/perks', { params: { q, minDiscount: min || undefined } })
    setPerks(res.data.perks)
  }

  useEffect(() => { load() }, [])

  return (
    <div className="space-y-4">
      <div className="card">
        <div className="flex items-end gap-3">
          <div className="flex-1">
            <label className="block text-sm mb-1">Search</label>
            <input className="input" placeholder="title or merchant" value={q} onChange={e => setQ(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm mb-1">Min %</label>
            <input className="input" type="number" value={min} onChange={e => setMin(e.target.value)} />
          </div>
          <button className="btn" onClick={load}>Apply</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {perks.map(p => (
          <div key={p._id} className="card">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{p.title}</div>
                <div className="text-sm text-zinc-600">{p.merchant} • {p.category} • {p.discountPercent}%</div>
              </div>
              <Link to={`/perks/${p._id}`} className="btn text-sm">Edit</Link>
            </div>
            {p.description && <p className="mt-2 text-sm">{p.description}</p>}
          </div>
        ))}
        {perks.length === 0 && <div className="text-sm text-zinc-600">No perks found.</div>}
      </div>
    </div>
  )
}
