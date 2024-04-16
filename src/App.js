import "./App.css";
import Dictionary from "./dictionary";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1 className="main-header">📚 Dictionary</h1>
        <main>
          <Dictionary />
        </main>
        <footer>
          Coded by{" "}
          <strong>
            <a
              href="https://praca-hlada-cloveka.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              JuliaD
            </a>
          </strong>
        </footer>
      </div>
    </div>
  );
}

export default App;
