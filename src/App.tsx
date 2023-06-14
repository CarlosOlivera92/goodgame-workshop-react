import { useState } from 'react'
import Header from './components/header/header';
import './App.css'
import Footer from './components/footer/footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Footer/>
    </>
  )
}

export default App
