import './App.css';
import Home from './containers/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {

  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
      
        
       
  
    </div>
  );
}

export default App;
