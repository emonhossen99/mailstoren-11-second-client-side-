import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AddUser from './Components/AddUser/AddUser';
import UpdateUser from './Components/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>
       <Route path='/user/add' element={<AddUser></AddUser>}></Route>
     </Routes>
    </div>
  );
}

export default App;
