import React from 'react'
import { getContext } from '../context/Theme'

export default function Contact() {
  const { theme, toggleTheme } = getContext()

  return (
    <h1>
      Contact: {theme}
    </h1>
  )
}
