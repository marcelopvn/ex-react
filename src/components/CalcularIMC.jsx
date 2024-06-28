import React from "react"

function CalcularIMC(props) {
  const calc=()=>{
    props.sr(props.p/(props.a*props.a))
    props.sr(r)
  }

  return(
    <div>
      <button onClick={calc}>Calcular</button>
    </div>
  )
}

export default CalcularIMC