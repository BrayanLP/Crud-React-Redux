import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import logo from './logo.svg';

// And Components
import { Button } from 'antd';
import './App.css';
// import CreatePost from './components/post/createPost';
// import ViewPost from './components/post/viewPost'; 
import ViewAlbums  from './components/albums/viewAlbums';

// import AllPost from './AllPost';
import Users from './components/Users'



class App extends Component {
  render() {
    return (
      <div className="App"> 
      <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Users</Link>
        </li>
        <li>
          <Link to="/albums">Albums</Link>
        </li> 
      </ul>

      <hr />
      <Button type="primary">Button</Button>
      <Route exact path="/" component={Users} />
      <Route path="/albums" component={ViewAlbums} />
      {/* <Route path="/topics" component={Topics} /> */}
    </div>
  </Router>
        {/* <Users/> */}
        {/* <CreatePost /> */}
        {/* <ViewPost/> */}
        {/* <ViewAlbums/> */}
        {/* <EditPost /> */}
      </div>
    );
  }
}

export default App;
