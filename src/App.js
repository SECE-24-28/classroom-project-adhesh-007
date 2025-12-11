import { BrowserRouter, Route,Routes,Link } from "react-router-dom";

import Home from './Home'
import About from './About'
import Contact from './Contact'
import User from './User'
import Books from "./Books";

function App(){
  return (
    <BrowserRouter>
    <h1>I am APP</h1>
    <ul>
      <Link to="/"> <li>Home</li></Link>
      <Link to="/about"> <li>About</li></Link>
      <Link to="/contact"> <li>Contact</li></Link>
      <Link to="/user/1"> <li>User 1</li></Link>
      <Link to="/user/2"> <li>User 2</li></Link>
      <Link to="/books/oldbooks"> <li>Oldbooks</li></Link>
      <Link to="/books/newbooks"> <li>Newbooks</li></Link>
    </ul>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/user/:id" element={<User/>}></Route>
      
      <Route path="/books">
        <Route path="oldbooks" element={<Books/>}></Route>
        <Route path="newbooks" element={<Books/>}></Route>
      </Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;