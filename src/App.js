// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router } from '@reach/router';
import ApiCall from './components/ApiCall';
import Results from "./components/Results"

function App() {
  return (
    <div className="App">
        <ApiCall path ="/"/>
        <Router>
          <Results path ="/:category/:id"/>
        </Router>
    </div>
  );
}
export default App;
