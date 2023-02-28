//import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Detail } from "./pages/Detail"
import { Header } from "./components/Header"
import { GlobalStyle } from './style/GlobalStyle'
import { useState } from "react"
import { darkTheme, lightTheme } from './style/theme';
import { ThemeProvider } from "styled-components"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  const [theme, setTheme] = useState("light");

  const handleclick = () => {
    theme === "light" ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header handleClick={handleclick} theme={theme}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  )
}

export default App
