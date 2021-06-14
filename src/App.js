import logo from './logo.svg';
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import PostListPage from "./pages/PostListPage";
import PostDetailPage from "./pages/PostDetailPage";
import WritePostPage from "./pages/WritePostPage";
/*import Signup from "./components/SignUp";*/
import FirstPage from "./pages/FirstPage";

function App() {
  return (
    <div className="App">
        <Router>
            <Route exact path="/" component={PostListPage}></Route>
            <Route exact path="/posts/:postId" component={PostDetailPage}></Route>
            <Route exact path="/write/posts" component={WritePostPage}></Route>
            {/*<Route exact path="/signup" component={Signup}></Route>*/}
            <Route exact path="/first" component={FirstPage}></Route>
        </Router>
    </div>
  );
}

export default App;
