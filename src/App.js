import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import WarningSign from "./components/WarningSign"

function App() {
  return (
    <div className="App">
      <WarningSign msg="this is my alert message" />
    </div>
  );
}

export default App;
