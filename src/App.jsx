import { useState } from 'react'
import TabelaIMC from './components/Tabela'
import Peso from './components/Peso'
import Altura from './components/Altura'
import CalcularIMC from './components/CalcularIMC'
import Resultado from './components/Resultado'

function App() {
  const [resultado,setResultado]=useState(0)
  const [peso,setPeso]=useState(0)
  const [altura,setAltura]=useState(0)

  return (
    <>
    <Peso p={peso} sp={setPeso}/>
    <Altura a={altura} sa={setAltura}/>
    <CalcularIMC p={peso} a={altura} sr={setResultado}/>
    <Resultado r={resultado}/>
    <TabelaIMC/>
    </>
  )
}

export default App
