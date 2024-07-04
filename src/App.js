import "./App.css";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <h1>URL Parser</h1>
        <form>
          <input
            type="text"
            placeholder="Enter http(s) URL e.g https//github.com"
          />
        </form>
      </header>
    </div>
  );
}

export default App;
