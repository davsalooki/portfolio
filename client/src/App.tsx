import { useState } from 'react'
import AboutPage from './features/about/AboutPage'
import Header from './features/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="px-4 md:px-7 lg:px-90">
        <Header />
        <AboutPage />
      </div>
    </>
  )
}

export default App
