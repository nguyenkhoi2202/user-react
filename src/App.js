/* eslint-disable react/jsx-no-undef */
import './App.css';
import Appbar from './components/Appbar';
import UserComponent from './components/UserComponent';
import Login from './components/login/Login';
function App() {
  return (
    <div className="App">
       <UserComponent/>
      <Appbar/>
      <Login/>
     
    </div>
  );
}

export default App;
