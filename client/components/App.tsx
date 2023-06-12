import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={'Welcome Home'} />
      </Routes>
    </>
  )
}

export default App
