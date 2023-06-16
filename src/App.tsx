import { useState } from 'react'
import Header from './components/header/header';
import './App.css'
import Footer from './components/footer/footer';
import ItemListContainer from './components/itemlistcontainer/itemlistcontainer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <ItemListContainer greeting="¡Hola, bienvenido!" />
      <Footer/>
    </>
  )
}

export default App