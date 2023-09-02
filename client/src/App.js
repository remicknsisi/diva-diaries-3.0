import './App.css';
import Users from './features/users/DisplayUsers';
import { Route, Routes } from "react-router-dom";
import DisplayUsers from './features/users/DisplayUsers';
import Login from './features/Login';
import Signup from './features/Signup';
import DisplayPosts from './features/posts/DisplayPosts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        DivaDiaries
        <Routes>
          {/* <Route path="/" element={<DisplayUsers/>}/> */}
          <Route path="/" element={<DisplayPosts/>}/>

          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
