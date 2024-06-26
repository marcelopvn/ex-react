const calculo = () => {

const fpeso =(p,sp) => {
  <div>
    <label>
      Peso
      <input type="text" value={p} onchange={(e)=>{sp(e.target.value)}} />
    </label>
  </div>
}
const faltura =(a,sa) => {
  <div>
    <label>
      Peso
      <input type="text" value={a} onchange={(e)=>{sa(e.target.value)}} />
    </label>
  </div>
}

const fcalcular=(p,a,sr)=> {
  const calc=()=>{
    sr(p/(a*a))
  }
  return(
    <div>
      <button onClick={calc}>Calcular</button>
    </div>
  )
}

const fresultado=(r)=>{
  return(
    <div>
      <p>Resultado: {r.toFixed(2)}</p>
    </div>
  )
}

}

export default calculo()