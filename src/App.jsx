import styles from "./App.module.css";
import Buttons from "./Buttons";
import Display from "./Components/Display";

function App() {

  return (
    <div id="calculator" className={styles.calculator}>
      <Display />
      <Buttons />
    </div>
  )
}

export default App
