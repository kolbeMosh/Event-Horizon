import styles from './styles/App.module.css';
import Home from './pages/home'

function App() {

  return (
    <body>
      <div className={styles.main}>

        <h1 className={styles.logo}>Logo</h1>
        <Home />

      </div>
    </body>

  );
}

export default App;