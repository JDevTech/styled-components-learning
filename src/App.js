import React, { useState } from 'react'
import HomePage from './pages/home';
import LoginPage from './pages/login';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LightTheme from 'themes/light'
import DarkTheme from 'themes/dark'

const GlobalStyle = createGlobalStyle`
  body{
    background: ${p => p.theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${p => p.theme.bodyFontColor};
    font-family: 'Kaushan Script';
  }
`

function App() {
  const [theme, setTheme] = useState(LightTheme)
  return (
    <ThemeProvider theme={{...theme, setTheme: () => {
      setTheme(s => s.id === 'light' ? DarkTheme : LightTheme)
    }}}>
      <GlobalStyle/>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
