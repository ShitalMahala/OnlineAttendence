import './App.css';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import Landing from './Components/Landing';
import LoginRegister from './Components/LoginRegister';
import Students from './Components/Students';
import AddStudents from './Components/AddStudents';
import Attendences from './Components/Attendences';
import AddAttendences from './Components/AddAttendences';


function App() {
  return (
<Router>
<div className="App">
      <Switch>
        
        <Route path='/login'><LoginRegister /> </Route>
        <Route path='/students'><Students /></Route>
        <Route path='/addStudents'><AddStudents /></Route>
        <Route path='/addattendences'><AddAttendences /></Route>
        <Route path='/attendences'><Attendences /></Route>
        <Route path='/'><Landing /></Route>

      </Switch>
    </div>
</Router>
  );
}

export default App;
