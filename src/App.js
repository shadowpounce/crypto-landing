import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  const [currentScroll, setCurrentScroll] = React.useState(0)

  React.useEffect(() => {
    window.addEventListener('scroll', () =>
      setCurrentScroll(window.pageYOffset)
    )
  }, [])

  return (
    <div className="App">
      <div className="rectangle-shadow" id="shadow-2"></div>
      <Header />
      <Main currentScroll={currentScroll} />
    </div>
  )
}

export default App
