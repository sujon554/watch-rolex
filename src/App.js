
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import './App.css';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import Navbar from './pages/Shared/Navbar/Navbar';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
           
          </Route>
          <Route path="/department">
            
          </Route>
          <Route path="/dptr">
            
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
