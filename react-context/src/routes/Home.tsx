import { getContext, ThemeTypes } from '../context/Theme'

export default function Home() {
  const { theme, toggleTheme } = getContext()

  return (
    <div>
      <h1>
        Homeeee: {theme}
      </h1>
      <div>
        <button onClick={() => { toggleTheme() }}>Toogle</button>
      </div>
    </div>
  )
}
