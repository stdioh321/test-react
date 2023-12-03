import { getContext, ThemeTypes } from '../context/Theme'

export default function Home() {
  const { theme, toggleTheme, isDark } = getContext()

  return (
    <div className='container'>
      <h1>
        Current theme: {theme}
      </h1>
      <div>
        <button className={`btn ${isDark() ? 'btn-light': 'btn-dark'}`} onClick={() => { toggleTheme() }}>Toogle Theme</button>
      </div>
    </div>
  )
}
