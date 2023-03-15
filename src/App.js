import logo from './logo.svg';
import './App.css';
import Admin from './components/Admin';
import {Route,Routes} from 'react-router-dom'
import AddEmployee from './components/AddEmployee';
import Edit from './components/Edit';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Admin/>}/>
      <Route path="add" element={<AddEmployee/>}/>
      <Route path="edit/:id" element={<Edit/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
