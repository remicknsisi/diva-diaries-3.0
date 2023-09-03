import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './features/Login';
import Signup from './features/Signup';
import DisplayPosts from './features/posts/DisplayPosts';
import UserDetails from './features/users/UserDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a class="title" href={`/`}>DivaDiaries</a>
      </header>
        <Routes>
          <Route path="/" element={<DisplayPosts/>}/>
          <Route path="/users/:id" element={<UserDetails/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
