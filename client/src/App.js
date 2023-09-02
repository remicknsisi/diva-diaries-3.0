import './App.css';
import Users from './features/users/Users';
import { Route, Routes } from "react-router-dom";
import DisplayUsers from './features/users/Users';
import Login from './features/Login';
import Signup from './features/Signup'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<DisplayUsers/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
