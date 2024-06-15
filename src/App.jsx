import Login from "./Components/auth/Login";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Register from "./Components/auth/Register";
import Table from "./Components/Table";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={ <Login />} />
          <Route path="/register" element = {<Register />} />
          <Route path="/table" element = {<Table />}/>         
        </Routes>
      </div>
    </Router>
  );
}
export default App;
