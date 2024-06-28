import React from "react"

function Resultado(props){
  return(
    <div>
      <p>Resultado: {props.r.toFixed(2)}</p>
    </div>
  )
}

export default Resultado