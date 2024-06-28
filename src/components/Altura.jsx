import React from "react"

function altura(props) {
  <div>
    <label>
      Altura
      <input type="text" value={props.a} onchange={(e)=>{props.sa(e.target.value)}} />
    </label>
  </div>
}

export default altura(props)