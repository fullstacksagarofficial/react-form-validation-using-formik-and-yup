import './App.css';
import { Signup } from './components/SignUp';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
