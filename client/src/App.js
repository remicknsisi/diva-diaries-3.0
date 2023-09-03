import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './features/Login';
import Signup from './features/Signup';
import DisplayPosts from './features/posts/DisplayPosts';
import UserDetails from './features/users/UserDetails';

function App() {
  return (
    <div className="App">
      DivaDiaries
      <header className="App-header">
        <Routes>
          <Route path="/" element={<DisplayPosts/>}/>
          <Route path="/users/:id" element={<UserDetails/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
