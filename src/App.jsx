import React, { useState } from 'react'
import { Check, Mail, Plus, Star } from 'lucide-react'

const profile = {
  name: 'Diluka',
  email: 'diluka.w@nsbm.ac.lk',
  points: 0,
}

function Avatar() {
  return (
    <div className="avatar" aria-label="Profile avatar">
      <svg viewBox="0 0 120 120" role="img" aria-hidden="true">
        <circle cx="60" cy="60" r="58" fill="#fff" />
        <circle cx="60" cy="55" r="27" fill="#f2c7b5" />
        <path d="M32 54c1-28 18-39 33-37 17 2 27 18 24 41-7-8-14-11-27-13-13-2-22 4-30 9Z" fill="#252525" />
        <path d="M29 109c4-23 17-34 31-34s28 11 32 34" fill="#383838" />
        <path d="M42 55h13a8 8 0 0 1 0 15H42a8 8 0 0 1 0-15Zm23 0h13a8 8 0 0 1 0 15H65a8 8 0 0 1 0-15Z" fill="none" stroke="#171717" strokeWidth="3" />
        <path d="M60 61h5M55 77c5 4 10 4 15 0" fill="none" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <span className="verified"><Check size={23} strokeWidth={4} /></span>
    </div>
  )
}

export default function App() {
  const [points, setPoints] = useState(profile.points)

  return (
    <main className="page-shell">
      <section className="phone" aria-label="Profile details app">
        <header className="app-bar"><h1>My Profile</h1></header>
        <div className="profile-content">
          <Avatar />
          <div className="divider" />
          <section className="simple-detail"><h2>Name</h2><p>{profile.name}</p></section>
          <section className="simple-detail"><h2>Email</h2><p className="icon-value"><Mail size={17} fill="currentColor" /> {profile.email}</p></section>
          <section className="simple-detail"><h2>Points</h2><p className="icon-value"><Star size={17} fill="currentColor" /> <span className="points-number" key={points}>{points}</span></p></section>
        </div>
        <button className="fab" type="button" aria-label="Add one point" onClick={() => setPoints((current) => current + 1)}><Plus size={27} /></button>
      </section>
    </main>
  )
}
