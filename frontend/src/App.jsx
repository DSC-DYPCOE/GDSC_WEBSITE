import React, { useState, createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
export const ThemeContext = createContext("light")

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? "dark" : "light"))
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  )
}

export default App;
// export {ThemeContext};