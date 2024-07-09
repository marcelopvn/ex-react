import styles from './Formulario.module.css';

const Formulario = ({setAltura, setPeso, calculoIMC, clean}) => {
  return(
    <form className={styles.form}>
      <div className={styles.inputs}>
        <div className={styles.altura__block}>
          <label htmlFor="altura">Altura <small>(ex.: 1,80)</small></label>
          <input type="number" id='altura' onBlur={setAltura} min={0}/>
        </div>
        <div className={styles.peso__block}>
          <label htmlFor="peso">Peso <small>(ex.: 86,2)</small></label>
          <input type="number" id='peso' onBlur={setPeso} min={0}/>
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={clean} className={styles.clear} type="reset">Limpar <i className="bi bi-caret-right"></i></button>
        <button onClick={calculoIMC} id='calcular' type="button">Calcular <i className="bi bi-caret-right"></i></button>
      </div>
    </form>
  )
}

export default Formulario