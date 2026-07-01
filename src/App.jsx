
import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import ActorsPage from './pages/ActorsPage'
import { Routes, Route } from 'react-router'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/actors" element={<ActorsPage />} />
      </Routes>
    </>
  )
}

export default App