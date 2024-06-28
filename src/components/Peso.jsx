import React from "react"

function Peso(props) {
  <div>
    <label>
      Peso
      <input type="text" value={props.p} onchange={(e)=>{props.sp(e.target.value)}} />
    </label>
  </div>
}

export default Peso(props)