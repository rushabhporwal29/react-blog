import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import About from './About';
import BlogDetails from './blogDetails';
import Error404 from './Error404';

function App() {
  // const title='Welcome to My Blog';
  // const likes=50;
  // // const person={name:'John', age: 55};
  // const link="http://www.google.com"

  return (
    <Router>
        <div className="App">
        <Navbar />
        
        <div className="content">
          {/* <h1>{title}</h1>
          <p>Liked { likes } times</p>   */}
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/About">
              <About/>
            </Route>
            <Route path='/create'>
              <Create/>
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails/>
            </Route>
            <Route path="*">
              <Error404/>
            </Route>
          </Switch>
          

          {/* <p>{person}</p>  Error Will occur */}
          
          {/* <p>{10}</p>
          <p>{ 'Hello World'} </p>
          <p>{ [1,2,3,4,5] }</p>
          <p>{ Math.random()*10}</p> */}

          {/* <a href={link} target='_blank'>Google Site</a> */}


        </div>
      </div>
    </Router>
    
  );
}

export default App;
