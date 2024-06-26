const tabelaIMC=() => {
  return(
    <table>
      <thead>
        <tr>
          <th>
            Classificacao
          </th>
          <th>
            IMC
          </th>
        </tr>
        <tbody>
          <tr>
            <td>Abaixo do peso</td>
            <td>Abaixo de 18,5</td>
          </tr>
          <tr>
            <td>Peso normal</td>
            <td>Entre 18,5 e 24,9</td>
          </tr>
          <tr>
            <td>Sobrepeso</td>
            <td>Entre 25 e 29,9</td>
          </tr>
          <tr>
            <td>Obesidade Grau I</td>
            <td>Entre 30 e 34,9</td>
          </tr>
          <tr>
            <td>Obesidade Grau II</td>
            <td>Entre 35 e 39,9</td>
          </tr>
          <tr>
            <td>Obesidade Grau III ou Morbida</td>
            <td>Maior que 40</td>
          </tr>
        </tbody>
      </thead>
    </table>
  )
}

export default tabelaIMC()