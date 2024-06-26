import { useState } from 'react'
import calculo from './components/calculo'
import tabelaIMC from './components/Tabela'

function App() {
  const [resultado,setresultado]=useState(0)
  const [peso,setpeso]=useState(0)
  const [altura,setaltura]=useState(0)

  return (
    <>
    {fpeso(peso,setpeso)}
    {faltura(altura,setaltura)}
    {fcalcular(peso,altura,setresultado)}
    {calculo()}
    {tabelaIMC()}
    </>
  )
}

export default App
