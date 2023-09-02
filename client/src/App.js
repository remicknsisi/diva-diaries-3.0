import './App.css';
import Users from './features/users/DisplayUser';
import { Route, Routes } from "react-router-dom";
import DisplayUser from './features/users/DisplayUser';
import Login from './features/Login';
import Signup from './features/Signup';
import DisplayPosts from './features/posts/DisplayPosts';
import User from './features/users/UserDetails';
import UserDetails from './features/users/UserDetails';

function App() {
  return (
    <div className="App">
      DivaDiaries
      <header className="App-header">
        <Routes>
          {/* <Route path="/" element={<DisplayUsers/>}/> */}
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
